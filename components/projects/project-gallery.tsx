"use client";

import Image from "next/image";
import type { Project } from "@/lib/project-types";

export type GalleryScope = {
  wireframes: boolean;
  iterations: boolean;
  final: boolean;
};

const defaultScope: GalleryScope = {
  wireframes: true,
  iterations: true,
  final: true,
};

type Props = {
  project: Project;
  onImageClick: (src: string) => void;
  /** Welke categorieën tonen; default alles */
  scope?: Partial<GalleryScope>;
  /** Sectietitel boven de grid(s) */
  heading?: string;
  className?: string;
};

export function ProjectGallery({
  project,
  onImageClick,
  scope: scopeProp,
  heading,
  className = "",
}: Props) {
  const scope = { ...defaultScope, ...scopeProp };
  const { categories } = project;
  if (!categories) return null;

  type BlockKind = "wireframes" | "iterations" | "final";
  const raw: { title: string; images: string[]; kind: BlockKind }[] = [
    { title: "Wireframes", images: categories.wireframes ?? [], kind: "wireframes" },
    { title: "Iteraties", images: categories.iterations ?? [], kind: "iterations" },
    { title: "Screenshots", images: categories.final ?? [], kind: "final" },
  ];
  const blocks = raw.filter((b) => {
    if (b.kind === "wireframes" && !scope.wireframes) return false;
    if (b.kind === "iterations" && !scope.iterations) return false;
    if (b.kind === "final" && !scope.final) return false;
    return b.images.length > 0;
  });

  if (blocks.length === 0) return null;

  return (
    <div className={`space-y-8 ${className}`}>
      {heading ? (
        <h3 className="text-lg font-black text-primary tracking-tight">{heading}</h3>
      ) : null}
      {blocks.map((block) => (
        <div key={block.title}>
          <h4 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-4">
            {block.title}
          </h4>
          <div
            className={`grid gap-4 ${
              block.kind === "wireframes"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {block.images.map((img, i) => (
              <button
                key={`${block.title}-${i}`}
                type="button"
                className="aspect-video relative rounded-xl overflow-hidden border-2 border-primary/25 bg-[#162824] cursor-pointer hover:border-primary/55 hover:shadow-[0_0_24px_rgba(78,203,113,0.12)] transition-all text-left w-full group"
                onClick={() => onImageClick(img)}
              >
                <Image
                  src={img}
                  alt={`${project.title} — ${block.title} ${i + 1}`}
                  fill
                  className={
                    block.kind === "wireframes"
                      ? "object-contain group-hover:scale-[1.02] transition-transform"
                      : "object-cover group-hover:scale-[1.03] transition-transform"
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
