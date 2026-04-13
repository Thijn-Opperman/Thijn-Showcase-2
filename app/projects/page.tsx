import { getProjects } from "@/lib/projects-store";
import ProjectsPageClient from "./projects-page-client";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsPageClient projects={projects} />;
}
