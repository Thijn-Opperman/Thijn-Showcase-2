import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import path from "path";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;

function safeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    const scopeRaw = String(form.get("scope") ?? "misc");
    const scope = safeName(scopeRaw) || "misc";

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Geen bestand ontvangen." }, { status: 400 });
    }
    if (!ALLOWED.has(file.type)) {
      return NextResponse.json({ error: "Alleen jpg/png/webp/gif toegestaan." }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ error: "Bestand te groot (max 8MB)." }, { status: 400 });
    }

    const extByMime: Record<string, string> = {
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/webp": ".webp",
      "image/gif": ".gif",
    };
    const sourceExt = path.extname(file.name || "");
    const ext = extByMime[file.type] ?? ".jpg";
    const base = safeName(path.basename(file.name || "upload", sourceExt)) || "upload";
    const stamp = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const fileName = `${stamp}-${base}${ext}`;

    const bytes = Buffer.from(await file.arrayBuffer());
    const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "project-assets";
    const objectPath = path.posix.join("projects", scope, fileName);
    const supabase = getSupabaseAdmin();

    const { error: uploadError } = await supabase.storage.from(bucket).upload(objectPath, bytes, {
      contentType: file.type,
      upsert: false,
    });
    if (uploadError) {
      return NextResponse.json({ error: `Upload mislukt: ${uploadError.message}` }, { status: 500 });
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(objectPath);
    return NextResponse.json({ path: data.publicUrl });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Upload mislukt." }, { status: 500 });
  }
}
