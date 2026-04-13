"use client";

import { ExternalLink } from "lucide-react";
import { toFigmaEmbedUrl } from "@/lib/figma-embed";
import type { Project } from "@/lib/project-types";

function PanelShell({
  title,
  href,
  children,
}: {
  title: string;
  href?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-primary/25 bg-[#0d1f19]/80 overflow-hidden flex flex-col min-h-[280px]">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-primary/20 bg-[#162824]/90">
        <span className="text-sm font-bold text-primary tracking-wide">{title}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-primary transition-colors shrink-0"
          >
            Los openen
            <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
      <div className="flex-1 min-h-[260px] bg-black/20">{children}</div>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.36.5 0 5.86 0 12.42c0 5.25 3.44 9.7 8.22 11.27.6.13.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.33 3.51 1.02.11-.78.42-1.33.76-1.63-2.66-.3-5.46-1.35-5.46-6.02 0-1.33.47-2.42 1.24-3.27-.12-.3-.54-1.48.12-3.09 0 0 1-.33 3.28 1.24a11.2 11.2 0 013-.41c1.02 0 2.06.14 3.03.41 2.27-1.57 3.27-1.24 3.27-1.24.66 1.61.24 2.79.12 3.09.78.85 1.24 1.94 1.24 3.27 0 4.68-2.81 5.71-5.48 6.01.43.37.81 1.12.81 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.71.83.59C20.56 22.12 24 17.67 24 12.42 24 5.86 18.63.5 12 .5z" />
    </svg>
  );
}

export function ProjectEmbedTripleColumn({ project }: { project: Project }) {
  const live = project.links.liveDemo?.trim() ?? "";
  const figma = project.links.figma?.trim() ?? "";
  const github = project.links.github?.trim() ?? "";

  const showLiveEmbed = Boolean(project.embeds.liveDemo && live);
  const showFigmaEmbed = Boolean(project.embeds.figma && figma);
  const showLiveButton = Boolean(!showLiveEmbed && live);
  const showFigmaButton = Boolean(!showFigmaEmbed && figma);

  const hasAny =
    showLiveEmbed || showFigmaEmbed || showLiveButton || showFigmaButton || Boolean(github);
  if (!hasAny) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
      {showFigmaEmbed || showFigmaButton ? (
        <div className="min-w-0">
          {showFigmaEmbed ? (
            <PanelShell title="Figma" href={figma}>
              <iframe
                title={`Figma: ${project.title}`}
                src={toFigmaEmbedUrl(figma)}
                className="w-full h-[min(420px,55vh)] lg:h-[min(480px,50vh)] border-0"
                loading="lazy"
                allowFullScreen
              />
            </PanelShell>
          ) : (
            <PanelShell title="Figma" href={figma}>
              <div className="h-full flex items-center justify-center p-6">
                <a
                  href={figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Open Figma
                  <ExternalLink className="w-4 h-4" aria-hidden />
                </a>
              </div>
            </PanelShell>
          )}
        </div>
      ) : null}

      {showLiveEmbed || showLiveButton ? (
        <div className="min-w-0">
          {showLiveEmbed ? (
            <PanelShell title="Live (Vercel)" href={live}>
              <iframe
                title={`Live: ${project.title}`}
                src={live}
                className="w-full h-[min(420px,55vh)] lg:h-[min(480px,50vh)] border-0 bg-white"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </PanelShell>
          ) : (
            <PanelShell title="Live (Vercel)" href={live}>
              <div className="h-full flex items-center justify-center p-6">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  Open live site
                  <ExternalLink className="w-4 h-4" aria-hidden />
                </a>
              </div>
            </PanelShell>
          )}
        </div>
      ) : null}

      {github ? (
        <div className="min-w-0">
          <div className="rounded-2xl border-2 border-primary/25 bg-[#0d1f19]/80 overflow-hidden flex flex-col min-h-[280px]">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-primary/20 bg-[#162824]/90">
              <span className="text-sm font-bold text-primary tracking-wide">GitHub</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-black/20">
              <p className="text-white/45 text-sm text-center max-w-[14rem]">
                Repository opent in een nieuw tabblad.
              </p>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1a2332] border-2 border-[#30363d] hover:border-primary/60 hover:bg-[#212b3d] hover:text-primary shadow-lg transition-all w-full max-w-[240px]"
              >
                <GithubIcon className="w-5 h-5 shrink-0" />
                Naar GitHub
                <ExternalLink className="w-4 h-4 opacity-70" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
