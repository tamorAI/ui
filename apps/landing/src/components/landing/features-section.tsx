"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const pillars = [
  {
    id: "govern",
    title: "Govern",
    summary:
      "Agents declare a plan up front. Trajeckt enforces it at runtime — off-plan actions never execute.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: "observe",
    title: "Observe",
    summary:
      "Because every action passes through enforcement, you see exactly what ran, in order, with nothing missing.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "investigate",
    title: "Investigate",
    summary:
      "Every blocked or allowed action is recorded. Replay any incident and see the exact moment a run left its plan.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: "improve",
    title: "Improve",
    summary:
      "Deviations are first-class data. Learn which plans hold and which break.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const show = prefersReduced || isInView;

  return (
    <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <h2 className="text-3xl lg:text-4xl font-heading tracking-[-0.04em]">
            One enforcement layer. Everything else follows.
          </h2>
          <p className="text-sm text-muted-foreground font-mono">
            Logs tell you what happened. Trajectories tell you why it happened.
          </p>
        </motion.div>

        {/* Pillar cards — animate as one unit, no per-card stagger */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-background p-6 flex flex-col gap-4 group transition-colors duration-150 hover:bg-muted/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  {pillar.icon}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  {pillar.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.summary}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
