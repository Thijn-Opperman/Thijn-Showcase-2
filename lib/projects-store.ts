import type { Project, ProjectsFile } from "@/lib/project-types";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type ProjectRow = {
  id: string;
  order: number;
  title: string;
  subtitle: string | null;
  description: string;
  problem: string;
  approach: string;
  result: string;
  challenges: string;
  learnings: string;
  hero_image: string;
  image_position: "left" | "right";
  tech_stack: unknown;
  recruiter: unknown;
  links: unknown;
  embeds: unknown;
  categories: unknown;
};

function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

function getSupabaseReadClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const readKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !readKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or read key for projects query.");
  }
  return createClient(url, readKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

async function selectProjects(client: SupabaseClient) {
  return client.from("projects").select("*").order("order", { ascending: true });
}

function asObj(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((x): x is string => typeof x === "string") : [];
}

function rowToProject(row: ProjectRow): Project {
  const links = asObj(row.links);
  const embeds = asObj(row.embeds);
  const categories = asObj(row.categories);
  const recruiterObj = asObj(row.recruiter);
  const recruiter = {
    role: typeof recruiterObj.role === "string" ? recruiterObj.role : undefined,
    team: typeof recruiterObj.team === "string" ? recruiterObj.team : undefined,
    duration: typeof recruiterObj.duration === "string" ? recruiterObj.duration : undefined,
    contribution:
      typeof recruiterObj.contribution === "string" ? recruiterObj.contribution : undefined,
    impact: typeof recruiterObj.impact === "string" ? recruiterObj.impact : undefined,
  };
  const hasRecruiter = Object.values(recruiter).some(Boolean);

  return {
    id: row.id,
    order: row.order,
    title: row.title,
    ...(row.subtitle ? { subtitle: row.subtitle } : {}),
    description: row.description ?? "",
    problem: row.problem ?? "",
    approach: row.approach ?? "",
    result: row.result ?? "",
    challenges: row.challenges ?? "",
    learnings: row.learnings ?? "",
    heroImage: row.hero_image ?? "",
    imagePosition: row.image_position === "left" ? "left" : "right",
    techStack: asStringArray(row.tech_stack),
    ...(hasRecruiter ? { recruiter } : {}),
    links: {
      figma: typeof links.figma === "string" ? links.figma : null,
      github: typeof links.github === "string" ? links.github : null,
      liveDemo: typeof links.liveDemo === "string" ? links.liveDemo : null,
    },
    embeds: {
      liveDemo: Boolean(embeds.liveDemo),
      figma: Boolean(embeds.figma),
    },
    categories: {
      wireframes: asStringArray(categories.wireframes),
      iterations: asStringArray(categories.iterations),
      final: asStringArray(categories.final),
    },
  };
}

function projectToRow(project: Project): Record<string, unknown> {
  return {
    id: project.id,
    order: project.order,
    title: project.title,
    subtitle: project.subtitle ?? null,
    description: project.description ?? "",
    problem: project.problem ?? "",
    approach: project.approach ?? "",
    result: project.result ?? "",
    challenges: project.challenges ?? "",
    learnings: project.learnings ?? "",
    hero_image: project.heroImage ?? "",
    image_position: project.imagePosition ?? "right",
    tech_stack: project.techStack ?? [],
    recruiter: project.recruiter ?? null,
    links: project.links ?? {},
    embeds: project.embeds ?? {},
    categories: project.categories ?? {},
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const readClient = getSupabaseReadClient();
    const { data, error } = await selectProjects(readClient);
    if (!error) {
      const rows = (data ?? []) as ProjectRow[];
      return sortProjects(rows.map(rowToProject));
    }

    // Fallback: probeer service role voor omgevingen waar anon/RLS niet goed staat.
    const admin = getSupabaseAdmin();
    const adminResult = await selectProjects(admin);
    if (adminResult.error) throw adminResult.error;
    const rows = (adminResult.data ?? []) as ProjectRow[];
    return sortProjects(rows.map(rowToProject));
  } catch (e) {
    console.error("getProjects failed:", e);
    // Geen harde 500 op /projects; toon lege state i.p.v. crash.
    return [];
  }
}

export async function readProjectsFile(): Promise<ProjectsFile> {
  const projects = await getProjects();
  return { projects };
}

export async function writeProjectsFile(data: ProjectsFile): Promise<void> {
  const supabase = getSupabaseAdmin();
  const projects = sortProjects(data.projects ?? []);
  const rows = projects.map(projectToRow);

  const { error: upsertError } = await supabase.from("projects").upsert(rows, {
    onConflict: "id",
  });
  if (upsertError) throw upsertError;

  const incomingIds = new Set(projects.map((p) => p.id));
  const { data: existing, error: existingError } = await supabase.from("projects").select("id");
  if (existingError) throw existingError;

  const removeIds = (existing ?? [])
    .map((r: { id: string }) => r.id)
    .filter((id: string) => !incomingIds.has(id));

  if (removeIds.length) {
    const { error: deleteError } = await supabase.from("projects").delete().in("id", removeIds);
    if (deleteError) throw deleteError;
  }
}
