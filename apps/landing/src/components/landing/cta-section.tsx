"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const platformStats = [
  { value: "20", label: "Active plans" },
  { value: "42", label: "Off-plan calls blocked" },
  { value: "1.8ms", label: "Decision latency p50" },
  { value: "20", label: "Verified installs" },
];

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const show = prefersReduced || isInView;

  return (
    <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="border border-border bg-background">
        {/* Stats bar */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border-b border-border"
        >
          {platformStats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-4 flex flex-col gap-0.5">
              <span className="text-xl font-heading tracking-[-0.04em] font-mono tabular-nums">
                {s.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA copy */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="px-8 py-12 flex flex-col gap-5 max-w-2xl"
        >
          <h2 className="text-3xl lg:text-4xl font-heading tracking-[-0.04em] leading-[0.98]">
            Ship agents you can hold to their word.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Start with enforcement. Observability, replay, and analytics come with it.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="border border-foreground bg-foreground text-background px-6 py-2.5 text-sm font-mono hover:bg-foreground/90 transition-colors">
              Request access
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
            >
              Read the docs
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
