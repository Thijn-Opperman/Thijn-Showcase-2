import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import path from "path";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

function safeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureBucketExists(bucket: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.storage.getBucket(bucket);

  if (data && !error) return supabase;

  const notFound = (error as { statusCode?: string | number } | null)?.statusCode === 404;
  if (!notFound && error) {
    throw new Error(`Bucket check mislukt: ${error.message}`);
  }

  const { error: createError } = await supabase.storage.createBucket(bucket, {
    public: true,
    allowedMimeTypes: [...ALLOWED],
  });

  if (createError && !createError.message.toLowerCase().includes("already exists")) {
    throw new Error(`Bucket aanmaken mislukt: ${createError.message}`);
  }

  return supabase;
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

    const ext = path.extname(file.name || "").toLowerCase() || ".jpg";
    const base = safeName(path.basename(file.name || "upload", ext)) || "upload";
    const stamp = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const fileName = `${stamp}-${base}${ext}`;

    const bytes = Buffer.from(await file.arrayBuffer());
    const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "project-assets";
    const objectPath = path.posix.join("projects", scope, fileName);
    const supabase = await ensureBucketExists(bucket);

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
