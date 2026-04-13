type TechIconMeta = {
  slug: string;
  color: string;
};

const MAP: Record<string, TechIconMeta> = {
  figma: { slug: "figma", color: "F24E1E" },
  react: { slug: "react", color: "61DAFB" },
  "next.js": { slug: "nextdotjs", color: "000000" },
  nextjs: { slug: "nextdotjs", color: "000000" },
  typescript: { slug: "typescript", color: "3178C6" },
  javascript: { slug: "javascript", color: "F7DF1E" },
  html: { slug: "html5", color: "E34F26" },
  css: { slug: "css", color: "1572B6" },
  "html/css": { slug: "html5", color: "E34F26" },
  tailwind: { slug: "tailwindcss", color: "06B6D4" },
  vercel: { slug: "vercel", color: "000000" },
  github: { slug: "github", color: "181717" },
};

function norm(label: string): string {
  return label.trim().toLowerCase();
}

export function getTechIconMeta(label: string): TechIconMeta | null {
  const key = norm(label);
  if (MAP[key]) return MAP[key];
  if (key.includes("figma")) return MAP.figma;
  if (key.includes("react")) return MAP.react;
  if (key.includes("next")) return MAP["next.js"];
  if (key.includes("typescript")) return MAP.typescript;
  if (key.includes("javascript")) return MAP.javascript;
  if (key.includes("html")) return MAP.html;
  if (key.includes("css")) return MAP.css;
  if (key.includes("tailwind")) return MAP.tailwind;
  if (key.includes("github")) return MAP.github;
  if (key.includes("vercel") || key.includes("live")) return MAP.vercel;
  return null;
}
