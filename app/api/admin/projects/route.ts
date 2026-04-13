import { NextResponse } from "next/server";
import type { ProjectsFile } from "@/lib/project-types";
import { readProjectsFile, writeProjectsFile } from "@/lib/projects-store";

export async function GET() {
  try {
    const data = await readProjectsFile();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Kon projects.json niet lezen" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    if (
      !body ||
      typeof body !== "object" ||
      !("projects" in body) ||
      !Array.isArray((body as ProjectsFile).projects)
    ) {
      return NextResponse.json({ error: "Body moet { projects: Project[] } zijn" }, { status: 400 });
    }
    await writeProjectsFile(body as ProjectsFile);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Opslaan mislukt" }, { status: 500 });
  }
}
