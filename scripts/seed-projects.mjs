/**
 * Pretty-print data/projects.json (bestand moet al bestaan).
 * Inhoud beheer je via /admin/projects of direct in het JSON-bestand.
 */
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "data", "projects.json");
const data = JSON.parse(await readFile(out, "utf8"));
await writeFile(out, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Formatted", out);
