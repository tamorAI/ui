"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const stats = [
  { value: "100%", label: "probe actions blocked" },
  { value: "96.7%", label: "in-plan calls allowed" },
  { value: "<3ms", label: "decision latency p95" },
  { value: "20/20", label: "plans verified" },
];

const proofPoints = [
  { label: "Declared plan: 9 steps", width: "75%", kind: "bar" as const },
  { label: "Observed: 11 calls", width: "92%", kind: "bar" as const },
  { label: "2 blocked", kind: "chip" as const },
  { label: "Plan fidelity 96.7%", pct: 96.7, kind: "pct" as const },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  const match = value.match(/^(\d+(?:\.\d+)?)(%|[a-zA-Z]*)$/);
  const animatable = match !== null && !prefersReduced;

  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!animatable || !isInView || !match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const isFloat = match[1].includes(".");
    const duration = 1200;
    const startTime = performance.now();

    let raf: number;
    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = isFloat ? current.toFixed(1) : Math.round(current).toString();
      setDisplay(formatted + suffix);
      if (progress < 1) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [animatable, isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-3xl font-heading tracking-[-0.04em] font-mono tabular-nums">
        {display}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible = mounted || !!prefersReduced;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-border">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/5"
            style={{ top: `${(i + 1) * (100 / 7)}%`, left: 0, right: 0 }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/5"
            style={{ left: `${(i + 1) * (100 / 11)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-8">
          {/* Badge — static dot, no pulse */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/50" />
              Runtime enforcement for AI agents
            </span>
          </motion.div>

          {/* H1 — blur-in only */}
          <motion.h1
            className="text-[clamp(2.8rem,6vw,5rem)] font-heading leading-[0.98] tracking-[-0.04em]"
            initial={prefersReduced ? false : { opacity: 0, filter: "blur(8px)" }}
            animate={visible ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Agents that do
            <br />
            <span className="opacity-70">what they said they would.</span>
          </motion.h1>

          <motion.p
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            Every agent declares its plan before it runs. Trajeckt holds it to that
            plan — in-plan actions pass, off-plan actions are blocked before they
            execute, and every run becomes a trajectory you can replay.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-6 pt-2"
            initial={{ opacity: 0, y: 8 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          >
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>

        {/* Right: dashboard card — no shadow, no animated dot */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          <div className="border border-border bg-background rounded-none overflow-hidden font-mono text-xs">
            {/* Card header — static dot */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span className="text-muted-foreground">trajeckt · live enforcement</span>
              </div>
              <span className="text-muted-foreground/50 font-mono tabular-nums">
                run-20260604-152135
              </span>
            </div>

            {/* Proof points */}
            <div className="p-4 flex flex-col gap-3">
              {proofPoints.map((p, i) => {
                if (p.kind === "chip") {
                  return (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-foreground">{p.label}</span>
                      <span className="bg-foreground text-background px-1.5 py-0.5 text-[10px] font-medium">
                        blocked
                      </span>
                    </div>
                  );
                }
                if (p.kind === "pct") {
                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{p.label}</span>
                        <span className="text-foreground font-mono tabular-nums">{p.pct}%</span>
                      </div>
                      <div className="h-px bg-border w-full relative">
                        <div
                          className="absolute inset-y-0 left-0 bg-foreground/30"
                          style={{ width: `${p.pct}%` }}
                        />
                      </div>
                    </div>
                  );
                }
                // bar
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-muted-foreground">{p.label}</span>
                    <div className="h-px bg-border w-full relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-foreground/20"
                        style={{ width: p.width }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              plan declared → enforced at runtime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
