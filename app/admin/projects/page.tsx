"use client";

import Image from "next/image";
import type { ImagePosition, Project, ProjectsFile } from "@/lib/project-types";
import { useCallback, useEffect, useMemo, useState } from "react";

function emptyProject(order: number): Project {
  return {
    id: `project-${Date.now()}`,
    order,
    title: "Nieuw project",
    subtitle: "",
    description: "",
    problem: "",
    approach: "",
    result: "",
    challenges: "",
    learnings: "",
    heroImage: "/logos/t-logo.png",
    imagePosition: "right",
    techStack: [],
    recruiter: {},
    links: { figma: null, github: null, liveDemo: null },
    embeds: { liveDemo: true, figma: true },
    categories: { wireframes: [], iterations: [], final: [] },
  };
}

function normalizeProject(p: Project): Project {
  const subtitle = p.subtitle?.trim();
  const recruiter = {
    role: p.recruiter?.role?.trim() || undefined,
    team: p.recruiter?.team?.trim() || undefined,
    duration: p.recruiter?.duration?.trim() || undefined,
    contribution: p.recruiter?.contribution?.trim() || undefined,
    impact: p.recruiter?.impact?.trim() || undefined,
  };
  const hasRecruiter = Object.values(recruiter).some(Boolean);
  return {
    id: p.id.trim(),
    order: p.order,
    title: p.title.trim(),
    ...(subtitle ? { subtitle } : {}),
    description: (p.description ?? "").trim(),
    problem: (p.problem ?? "").trim(),
    approach: (p.approach ?? "").trim(),
    result: (p.result ?? "").trim(),
    challenges: (p.challenges ?? "").trim(),
    learnings: (p.learnings ?? "").trim(),
    heroImage: (p.heroImage ?? "").trim(),
    imagePosition: p.imagePosition,
    techStack: (p.techStack ?? []).map((t) => t.trim()).filter(Boolean),
    ...(hasRecruiter ? { recruiter } : {}),
    links: {
      figma: p.links.figma?.trim() || null,
      github: p.links.github?.trim() || null,
      liveDemo: p.links.liveDemo?.trim() || null,
    },
    embeds: {
      liveDemo: Boolean(p.embeds?.liveDemo),
      figma: Boolean(p.embeds?.figma),
    },
    categories: {
      wireframes: (p.categories?.wireframes ?? []).map((x) => x.trim()).filter(Boolean),
      iterations: (p.categories?.iterations ?? []).map((x) => x.trim()).filter(Boolean),
      final: (p.categories?.final ?? []).map((x) => x.trim()).filter(Boolean),
    },
  };
}

async function uploadImage(file: File, scope: string): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  form.append("scope", scope);
  const res = await fetch("/api/admin/upload", { method: "POST", body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error ?? "Upload mislukt");
  }
  return data.path as string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/projects", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(data.error ?? `Fout ${res.status}`);
        setProjects(null);
        return;
      }
      const file = data as ProjectsFile;
      setProjects((file.projects ?? []).map((p, i) => ({ ...p, order: p.order ?? i })));
      setStatus("Geladen.");
    } catch {
      setStatus("Netwerkfout.");
      setProjects(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const save = useCallback(async () => {
    if (!projects) return;
    setStatus(null);
    setLoading(true);
    try {
      const normalized: ProjectsFile = {
        projects: projects.map((p, i) => normalizeProject({ ...p, order: i })),
      };
      const res = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalized),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(data.error ?? `Opslaan mislukt (${res.status})`);
        return;
      }
      setStatus("Opgeslagen. Vernieuw /projects om te zien.");
    } catch {
      setStatus("Opslaan mislukt (netwerk).");
    } finally {
      setLoading(false);
    }
  }, [projects]);

  return (
    <main className="min-h-screen bg-[#0a1f1a] text-white px-4 py-8 sm:px-8">
      <div className="max-w-[1200px] mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-black text-[#4ecb71]">Admin — projecten</h1>
          <p className="text-white/65 text-sm leading-relaxed">
            Leeg veld = niet zichtbaar op je projectpagina. Je kunt nu direct afbeeldingen uploaden
            zonder URL; die gaan naar je Supabase Storage bucket{" "}
            <code className="text-primary/90">project-assets</code>.
          </p>
        </header>

        <section className="rounded-xl border border-[#4ecb71]/30 bg-[#162824]/60 p-4 sm:p-5 space-y-3">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => void load()}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-[#4ecb71] text-black font-bold text-sm disabled:opacity-40"
            >
              Herladen
            </button>
            <button
              type="button"
              onClick={() => void save()}
              disabled={loading || !projects}
              className="px-4 py-2 rounded-lg border-2 border-[#4ecb71] text-[#4ecb71] font-bold text-sm disabled:opacity-40"
            >
              Alles opslaan
            </button>
          </div>
          {status ? <p className="text-sm text-white/80">{status}</p> : null}
        </section>

        {projects ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <h2 className="text-xl font-bold">Projecten ({projects.length})</h2>
              <button
                type="button"
                onClick={() => {
                  const next = emptyProject(projects.length);
                  setProjects([...projects, next]);
                  setOpenId(next.id);
                }}
                className="text-sm font-bold text-black bg-[#4ecb71] px-3 py-2 rounded-lg"
              >
                + Project toevoegen
              </button>
            </div>

            {projects.map((p, index) => (
              <ProjectEditorCard
                key={p.id}
                project={p}
                open={openId === p.id}
                onToggle={() => setOpenId((id) => (id === p.id ? null : p.id))}
                onChange={(next) => {
                  setProjects((list) => (list ? list.map((x) => (x.id === p.id ? next : x)) : list));
                }}
                onDelete={() => {
                  if (!confirm(`Project “${p.title}” verwijderen?`)) return;
                  setProjects((list) => list?.filter((x) => x.id !== p.id) ?? null);
                  setOpenId(null);
                }}
                onMoveUp={() => {
                  if (index <= 0) return;
                  setProjects((list) => {
                    if (!list) return list;
                    const copy = [...list];
                    [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
                    return copy.map((c, i) => ({ ...c, order: i }));
                  });
                }}
                onMoveDown={() => {
                  setProjects((list) => {
                    if (!list || index >= list.length - 1) return list;
                    const copy = [...list];
                    [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
                    return copy.map((c, i) => ({ ...c, order: i }));
                  });
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}

function ProjectEditorCard({
  project,
  open,
  onToggle,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
  onChange: (p: Project) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const [uploading, setUploading] = useState<string | null>(null);
  const techText = (project.techStack ?? []).join(", ");
  const finalShots = project.categories.final ?? [];

  const visibleParts = useMemo(() => {
    return [
      project.description?.trim() ? "Opdracht" : null,
      project.result?.trim() ? "Resultaat" : null,
      project.problem?.trim() ? "Probleem" : null,
      project.approach?.trim() ? "Aanpak" : null,
      project.techStack?.length ? "Tech" : null,
      project.links.figma?.trim() ? "Figma" : null,
      project.links.liveDemo?.trim() ? "Live" : null,
      project.links.github?.trim() ? "GitHub" : null,
      project.heroImage?.trim() ? "Hero" : null,
      project.recruiter?.role?.trim() ? "Rol" : null,
      project.recruiter?.impact?.trim() ? "Impact" : null,
    ].filter(Boolean) as string[];
  }, [project]);

  const scope = project.id.trim() || "project";

  const handleHeroUpload = async (file: File | null) => {
    if (!file) return;
    setUploading("hero");
    try {
      const imagePath = await uploadImage(file, scope);
      onChange({ ...project, heroImage: imagePath });
    } finally {
      setUploading(null);
    }
  };

  const handleScreenshotUpload = async (file: File | null) => {
    if (!file) return;
    setUploading("screenshot");
    try {
      const imagePath = await uploadImage(file, scope);
      onChange({
        ...project,
        categories: { ...project.categories, final: [...(project.categories.final ?? []), imagePath] },
      });
    } finally {
      setUploading(null);
    }
  };

  const removeScreenshot = (idx: number) => {
    onChange({
      ...project,
      categories: {
        ...project.categories,
        final: finalShots.filter((_, i) => i !== idx),
      },
    });
  };

  return (
    <div className="rounded-xl border border-white/15 bg-[#101f1a]/90 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-[#162824]/80 hover:bg-[#162824] transition-colors"
      >
        <div className="min-w-0">
          <span className="font-bold text-[#4ecb71] truncate block">{project.title}</span>
          <span className="text-white/45 text-xs">
            Zichtbaar in UI: {visibleParts.length ? visibleParts.join(" · ") : "nog niets"}
          </span>
        </div>
        <span className="text-white/50 text-sm shrink-0">{open ? "Verberg" : "Bewerk"}</span>
      </button>

      {open ? (
        <div className="p-4 border-t border-white/10 space-y-4">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={onMoveUp} className="text-xs font-bold px-2 py-1 rounded border border-white/25">Omhoog</button>
            <button type="button" onClick={onMoveDown} className="text-xs font-bold px-2 py-1 rounded border border-white/25">Omlaag</button>
            <button type="button" onClick={onDelete} className="text-xs font-bold px-2 py-1 rounded border border-red-400/50 text-red-300 ml-auto">Verwijderen</button>
          </div>

          <section className="rounded-xl border border-primary/20 bg-[#0b1512] p-3 sm:p-4 space-y-4">
            <h3 className="text-sm font-bold text-[#4ecb71]">Wireframe builder</h3>
            <p className="text-xs text-white/55">
              Vul je project in zoals het op de site staat. Lege velden worden niet getoond.
            </p>
            <WireframeBuilder
              project={project}
              techText={techText}
              finalShots={finalShots}
              uploading={uploading}
              onChange={onChange}
              onHeroUpload={handleHeroUpload}
              onScreenshotUpload={handleScreenshotUpload}
              onRemoveScreenshot={removeScreenshot}
            />
          </section>
        </div>
      ) : null}
    </div>
  );
}

function WireframeBuilder({
  project,
  techText,
  finalShots,
  uploading,
  onChange,
  onHeroUpload,
  onScreenshotUpload,
  onRemoveScreenshot,
}: {
  project: Project;
  techText: string;
  finalShots: string[];
  uploading: string | null;
  onChange: (p: Project) => void;
  onHeroUpload: (file: File | null) => Promise<void>;
  onScreenshotUpload: (file: File | null) => Promise<void>;
  onRemoveScreenshot: (idx: number) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 space-y-3">
          <Field label="Titel" value={project.title} onChange={(title) => onChange({ ...project, title })} />
          <Field label="Ondertitel (optioneel)" value={project.subtitle ?? ""} onChange={(subtitle) => onChange({ ...project, subtitle })} />
          <Field
            label="Opdracht + wat je hebt gemaakt"
            value={project.description}
            onChange={(description) => onChange({ ...project, description })}
            multiline
            rows={3}
          />
        </div>
        <div className="lg:col-span-5 space-y-3">
          <Field label="Hero-afbeelding pad" value={project.heroImage} onChange={(heroImage) => onChange({ ...project, heroImage })} />
          <label className="block text-sm text-white/75">
            Hero upload
            <input
              type="file"
              accept="image/*"
              onChange={(e) => void onHeroUpload(e.target.files?.[0] ?? null)}
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-white"
            />
          </label>
          {project.heroImage?.trim() ? (
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/20">
              <Image src={project.heroImage} alt="" fill className="object-cover" sizes="320px" />
            </div>
          ) : null}
          <label className="block text-sm text-white/75">
            Hero positie
            <select
              value={project.imagePosition}
              onChange={(e) => onChange({ ...project, imagePosition: e.target.value as ImagePosition })}
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2"
            >
              <option value="left">Links</option>
              <option value="right">Rechts</option>
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Kort overzicht kaarten</p>
        <div className="grid md:grid-cols-3 gap-3">
          <Field
            label="Resultaat"
            value={project.result ?? ""}
            onChange={(result) => onChange({ ...project, result })}
            multiline
            rows={4}
          />
          <Field
            label="Probleem"
            value={project.problem ?? ""}
            onChange={(problem) => onChange({ ...project, problem })}
            multiline
            rows={4}
          />
          <Field
            label="Aanpak"
            value={project.approach ?? ""}
            onChange={(approach) => onChange({ ...project, approach })}
            multiline
            rows={4}
          />
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Tech balk</p>
        <Field
          label="Tech (komma gescheiden)"
          value={techText}
          onChange={(v) =>
            onChange({
              ...project,
              techStack: v.split(",").map((t) => t.trim()).filter(Boolean),
            })
          }
        />
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Recruiter snapshot (aanrader)</p>
        <div className="grid md:grid-cols-2 gap-3">
          <Field
            label="Mijn rol"
            value={project.recruiter?.role ?? ""}
            onChange={(role) =>
              onChange({ ...project, recruiter: { ...(project.recruiter ?? {}), role } })
            }
          />
          <Field
            label="Team"
            value={project.recruiter?.team ?? ""}
            onChange={(team) =>
              onChange({ ...project, recruiter: { ...(project.recruiter ?? {}), team } })
            }
          />
          <Field
            label="Duur"
            value={project.recruiter?.duration ?? ""}
            onChange={(duration) =>
              onChange({ ...project, recruiter: { ...(project.recruiter ?? {}), duration } })
            }
          />
          <Field
            label="Belangrijkste bijdrage"
            value={project.recruiter?.contribution ?? ""}
            onChange={(contribution) =>
              onChange({ ...project, recruiter: { ...(project.recruiter ?? {}), contribution } })
            }
          />
          <div className="md:col-span-2">
            <Field
              label="Impact"
              value={project.recruiter?.impact ?? ""}
              onChange={(impact) =>
                onChange({ ...project, recruiter: { ...(project.recruiter ?? {}), impact } })
              }
              multiline
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Figma / Live / GitHub</p>
        <div className="grid md:grid-cols-3 gap-3">
          <Field
            label="Figma URL"
            value={project.links.figma ?? ""}
            onChange={(figma) => onChange({ ...project, links: { ...project.links, figma } })}
          />
          <Field
            label="Live URL"
            value={project.links.liveDemo ?? ""}
            onChange={(liveDemo) => onChange({ ...project, links: { ...project.links, liveDemo } })}
          />
          <Field
            label="GitHub URL"
            value={project.links.github ?? ""}
            onChange={(github) => onChange({ ...project, links: { ...project.links, github } })}
          />
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={project.embeds.figma} onChange={(e) => onChange({ ...project, embeds: { ...project.embeds, figma: e.target.checked } })} />
            Figma embed tonen
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={project.embeds.liveDemo} onChange={(e) => onChange({ ...project, embeds: { ...project.embeds, liveDemo: e.target.checked } })} />
            Live embed tonen
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Screenshots</p>
        <label className="block text-sm text-white/75">
          Screenshot upload
          <input
            type="file"
            accept="image/*"
            onChange={(e) => void onScreenshotUpload(e.target.files?.[0] ?? null)}
            className="mt-1 w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-white"
          />
        </label>
        {uploading ? <p className="text-xs text-white/60">Uploaden: {uploading}...</p> : null}
        {finalShots.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {finalShots.map((src, idx) => (
              <div key={`${src}-${idx}`} className="rounded-lg border border-white/15 p-2 bg-black/20 space-y-2">
                <div className="relative aspect-video overflow-hidden rounded border border-white/10">
                  <Image src={src} alt="" fill className="object-cover" sizes="200px" />
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveScreenshot(idx)}
                  className="w-full text-xs px-2 py-1 rounded border border-red-400/50 text-red-300"
                >
                  Verwijder
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-white/45">Nog geen screenshots toegevoegd.</p>
        )}
      </div>

      <details className="rounded-lg border border-white/15 p-3">
        <summary className="cursor-pointer text-sm font-bold text-[#4ecb71]">Geavanceerd</summary>
        <div className="mt-3 grid sm:grid-cols-2 gap-3">
          <Field label="id (anker / URL)" value={project.id} onChange={(id) => onChange({ ...project, id })} />
          <Field
            label="Uitdagingen (optioneel)"
            value={project.challenges ?? ""}
            onChange={(challenges) => onChange({ ...project, challenges })}
            multiline
            rows={3}
          />
          <div className="sm:col-span-2">
            <Field
              label="Wat ik heb geleerd (optioneel)"
              value={project.learnings ?? ""}
              onChange={(learnings) => onChange({ ...project, learnings })}
              multiline
              rows={3}
            />
          </div>
        </div>
      </details>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  const cls =
    "mt-1 w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-white placeholder:text-white/35";

  return (
    <label className="block text-sm text-white/75">
      {label}
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} className={cls} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </label>
  );
}
