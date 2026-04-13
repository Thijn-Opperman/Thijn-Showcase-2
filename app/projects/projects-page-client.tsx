"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PillNav from "@/components/PillNav";
import { Footer } from "@/components/footer";
import { ProjectDetailBody } from "@/components/projects/project-detail-body";
import type { Project } from "@/lib/project-types";
import { useState } from "react";

export default function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  return (
    <main
      className="min-h-screen dark:bg-[#0a1f1a] bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)",
      }}
    >
      <PillNav
        logo="/logos/t-logo.png"
        logoAlt="Thijn Opperman"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Projecten", href: "/projects" },
          { label: "CV", href: "/cv" },
        ]}
        activeHref="/projects"
        baseColor="#000"
        pillColor="#4ecb71"
        hoveredPillTextColor="#000"
        pillTextColor="#000"
      />

      <div
        className="fixed inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <section className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4"
            style={{
              color: "#4ecb71",
              textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
              letterSpacing: "1px",
            }}
          >
            Projecten
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Hier drie projecten in het kort. Klik op een kaart voor het volledige verhaal — probleem,
            aanpak, resultaat, en waar het past Figma of een live site.
          </motion.p>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-12 xl:px-16 pb-20">
        <div className="max-w-[min(96vw,88rem)] mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex"
              >
                <button
                  type="button"
                  onClick={() => setDetailProject(project)}
                  className="flex flex-col w-full rounded-2xl border-2 border-primary/20 bg-[#121f1a]/85 shadow-[0_16px_48px_rgba(0,0,0,0.4)] ring-1 ring-white/5 overflow-hidden hover:border-primary/40 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f1a]"
                >
                  <span className="relative block w-full aspect-[16/10] shrink-0">
                    <Image
                      src={project.heroImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#0a1512]/90 via-transparent to-transparent pointer-events-none" aria-hidden />
                  </span>
                  <span className="flex flex-col flex-1 p-4 sm:p-5 min-w-0">
                    <span className="text-lg sm:text-xl font-black text-primary leading-tight mb-1">
                      {project.title}
                    </span>
                    {project.subtitle?.trim() ? (
                      <span className="text-white/45 text-xs font-medium mb-3 line-clamp-2 block">
                        {project.subtitle.trim()}
                      </span>
                    ) : null}
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-white/45 mb-1.5 block">
                      Opdracht
                    </span>
                    <span className="text-white/75 text-sm leading-relaxed line-clamp-5 flex-1 block">
                      {project.description}
                    </span>
                    <span className="mt-4 w-full py-3 rounded-xl font-bold text-sm text-center text-black bg-primary border-2 border-primary shadow-md block">
                      Uitgebreid bekijken
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {detailProject ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] flex items-center justify-center p-2 sm:p-4 md:p-6"
            style={{ background: "rgba(0, 0, 0, 0.88)" }}
            onClick={() => setDetailProject(null)}
          >
            <motion.div
              key={detailProject.id}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-[min(96vw,88rem)] max-h-[min(94vh,920px)] overflow-y-auto rounded-2xl border-2 border-primary/30 shadow-[0_25px_60px_rgba(78,203,113,0.15)]"
              style={{
                background: "linear-gradient(165deg, #0f1f1a 0%, #070f0d 50%, #0a1814 100%)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setDetailProject(null)}
                className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center bg-primary text-black text-xl font-bold hover:bg-red-500 hover:text-white transition-colors rounded-full shadow-lg border-2 border-primary/70"
                title="Sluiten"
              >
                ×
              </button>

              <div className="px-5 pt-14 pb-8 sm:px-10 sm:pt-16 sm:pb-12 lg:px-14">
                <ProjectDetailBody project={detailProject} />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div
        className="fixed top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4ecb71 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4ecb71 0%, transparent 70%)",
        }}
      />

      <Footer />
    </main>
  );
}
