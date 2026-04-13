/** Zet een normale Figma-deellink om naar een embed-URL voor iframes. */
export function toFigmaEmbedUrl(figmaUrl: string): string {
  const trimmed = figmaUrl.trim();
  if (!trimmed) return "";
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(trimmed)}`;
}
