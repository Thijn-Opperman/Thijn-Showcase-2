"use client";

import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  variant?: "default" | "emphasis";
};

export function ProjectCaseBlock({ icon: Icon, label, children, variant = "default" }: Props) {
  const isEmphasis = variant === "emphasis";
  return (
    <section
      className={`relative rounded-2xl border overflow-hidden ${
        isEmphasis
          ? "border-primary/35 bg-gradient-to-br from-[#0f241c]/95 to-[#0a1814]/90 shadow-[0_0_40px_rgba(78,203,113,0.08)]"
          : "border-white/10 bg-[#0f1c17]/60"
      }`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${isEmphasis ? "bg-primary" : "bg-primary/45"}`}
        aria-hidden
      />
      <div className="pl-4 sm:pl-5 pr-4 sm:pr-6 py-5 sm:py-6">
        <div className="flex gap-3 sm:gap-4">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              isEmphasis ? "bg-primary/20 text-primary" : "bg-white/5 text-primary/90"
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">{label}</h3>
            <div className="mt-3 text-white/85 text-[15px] sm:text-base leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProseText({ children }: { children: string }) {
  if (!children.trim()) return null;
  return <p className="whitespace-pre-line">{children}</p>;
}
