export type ParsedGithubRepo = { owner: string; repo: string };

/** Haalt owner/repo uit een github.com-URL. */
export function parseGithubRepo(url: string): ParsedGithubRepo | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  try {
    const u = new URL(trimmed);
    if (!u.hostname.includes("github.com")) return null;
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1].replace(/\.git$/, "") };
  } catch {
    return null;
  }
}

export function githubReadmeStatsPinUrl(owner: string, repo: string): string {
  const params = new URLSearchParams({
    username: owner,
    repo,
    bg_color: "0a1f1a",
    border_color: "4ecb71",
    title_color: "4ecb71",
    icon_color: "4ecb71",
    text_color: "ffffff",
  });
  return `https://github-readme-stats.vercel.app/api/pin/?${params.toString()}`;
}
