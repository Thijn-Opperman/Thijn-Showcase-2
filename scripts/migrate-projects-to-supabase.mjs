import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "data", "projects.json");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Missing env vars NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const raw = await readFile(source, "utf8");
const json = JSON.parse(raw);
const projects = Array.isArray(json.projects) ? json.projects : [];

const rows = projects.map((p) => ({
  id: p.id,
  order: p.order,
  title: p.title,
  subtitle: p.subtitle ?? null,
  description: p.description ?? "",
  problem: p.problem ?? "",
  approach: p.approach ?? "",
  result: p.result ?? "",
  challenges: p.challenges ?? "",
  learnings: p.learnings ?? "",
  hero_image: p.heroImage ?? "",
  image_position: p.imagePosition ?? "right",
  tech_stack: p.techStack ?? [],
  recruiter: p.recruiter ?? null,
  links: p.links ?? {},
  embeds: p.embeds ?? {},
  categories: p.categories ?? {},
}));

const { error } = await supabase.from("projects").upsert(rows, { onConflict: "id" });
if (error) {
  console.error(error.message);
  process.exit(1);
}

console.log(`Migrated ${rows.length} projects to Supabase.`);

