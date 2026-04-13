"use client";

import Image from "next/image";
import { ProjectEmbedTripleColumn } from "@/components/projects/project-embed-panels";
import { getTechIconMeta } from "@/lib/tech-icons";
import type { Project } from "@/lib/project-types";

function BriefCard({
  label,
  text,
  accent = "muted",
}: {
  label: string;
  text: string;
  accent?: "primary" | "muted";
}) {
  const border =
    accent === "primary" ? "border-primary/35 bg-[#0c1814]/90" : "border-white/12 bg-[#0a1411]/80";

  return (
    <div className={`rounded-xl border ${border} p-4 sm:p-5 h-full`}>
      <h3 className="text-xs font-bold uppercase tracking-wider text-primary/85 mb-2">{label}</h3>
      <p className="text-white/82 text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

export function ProjectDetailBody({ project }: { project: Project }) {
  const result = project.result?.trim() ?? "";
  const problem = project.problem?.trim() ?? "";
  const approach = project.approach?.trim() ?? "";

  const overview = [
    result ? { label: "Resultaat", text: result, accent: "primary" as const } : null,
    problem ? { label: "Probleem", text: problem, accent: "muted" as const } : null,
    approach ? { label: "Aanpak", text: approach, accent: "muted" as const } : null,
  ].filter(Boolean) as { label: string; text: string; accent: "primary" | "muted" }[];
  const hasAnyPreviewLink =
    Boolean(project.links.figma?.trim()) ||
    Boolean(project.links.liveDemo?.trim()) ||
    Boolean(project.links.github?.trim());
  const recruiter = project.recruiter;
  const hasRecruiterSnapshot =
    Boolean(recruiter?.role?.trim()) ||
    Boolean(recruiter?.team?.trim()) ||
    Boolean(recruiter?.duration?.trim()) ||
    Boolean(recruiter?.contribution?.trim()) ||
    Boolean(recruiter?.impact?.trim());

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="pr-10 sm:pr-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">{project.title}</h2>
        {project.subtitle?.trim() ? (
          <p className="mt-2 text-primary/90 text-sm sm:text-base font-medium">{project.subtitle.trim()}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="lg:col-span-7 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Opdracht & wat ik heb gemaakt</p>
          {project.description?.trim() ? (
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">{project.description}</p>
          ) : null}
        </div>
        <div className="lg:col-span-5">
          {project.heroImage?.trim() ? (
            <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary/25 shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
              <Image
                src={project.heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          ) : null}
        </div>
      </div>

      {project.techStack?.length ? (
        <div className="rounded-xl border border-primary/25 bg-[#0d1814] px-4 py-4 sm:px-6 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-6 sm:gap-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 shrink-0">Tech</p>
            <ul className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.techStack.map((t) => (
                <li key={t}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-primary/15 text-primary border border-primary/30">
                    <TechSymbol label={t} />
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {hasRecruiterSnapshot ? (
        <section className="space-y-3">
          <h3 className="text-lg font-black text-primary">Recruiter snapshot</h3>
          <div className="rounded-xl border border-white/12 bg-[#0a1411]/80 p-4 sm:p-5 grid md:grid-cols-2 gap-3">
            {recruiter?.role?.trim() ? <MetaItem label="Mijn rol" value={recruiter.role} /> : null}
            {recruiter?.team?.trim() ? <MetaItem label="Team" value={recruiter.team} /> : null}
            {recruiter?.duration?.trim() ? <MetaItem label="Duur" value={recruiter.duration} /> : null}
            {recruiter?.contribution?.trim() ? (
              <MetaItem label="Belangrijkste bijdrage" value={recruiter.contribution} />
            ) : null}
            {recruiter?.impact?.trim() ? (
              <div className="md:col-span-2">
                <MetaItem label="Impact" value={recruiter.impact} />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {overview.length ? (
        <section className="space-y-4">
          <h3 className="text-lg font-black text-primary">Kort overzicht</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overview.map((item) => (
              <BriefCard key={item.label} label={item.label} text={item.text} accent={item.accent} />
            ))}
          </div>
        </section>
      ) : null}

      {hasAnyPreviewLink ? (
        <section className="space-y-4">
          <h3 className="text-lg font-black text-primary">Figma, live site & GitHub</h3>
          <ProjectEmbedTripleColumn project={project} />
        </section>
      ) : null}
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-primary/75 mb-1">{label}</p>
      <p className="text-white/85 text-sm leading-relaxed whitespace-pre-line">{value}</p>
    </div>
  );
}

function TechSymbol({ label }: { label: string }) {
  const meta = getTechIconMeta(label);
  if (!meta) {
    return (
      <span className="inline-flex w-4 h-4 items-center justify-center rounded bg-black/25 text-[10px] font-bold">
        {label.trim().charAt(0).toUpperCase() || "•"}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color}`}
      alt=""
      className="w-4 h-4"
      loading="lazy"
    />
  );
}
