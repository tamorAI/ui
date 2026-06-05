"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const metrics = [
  { value: "100%", label: "probe actions blocked" },
  { value: "96.7%", label: "in-plan calls allowed" },
  { value: "<3ms", label: "decision latency p95" },
  { value: "20/20", label: "plans verified" },
];

const feedEvents = [
  { id: 1, action: "fetch_web_page", status: "allowed", latency: "1.6ms", label: "in plan" },
  { id: 2, action: "write_shared_drive", status: "allowed", latency: "1.9ms", label: "in plan" },
  { id: 3, action: "fetch_web_page", status: "blocked", latency: "1.7ms", label: "off plan" },
  { id: 4, action: "fetch_web_page", status: "blocked", latency: "1.8ms", label: "off plan" },
];

const policyRows = [
  { from: "start", to: "fetch_web_page", status: "declared" },
  { from: "fetch_web_page", to: "write_shared_drive", status: "declared" },
  { from: "write_shared_drive", to: "end", status: "declared" },
  { from: "fetch_web_page", to: "fetch_web_page", status: "blocked" },
];

export function TrajectoryIntelligence() {
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
          className="flex flex-col gap-3 max-w-xl"
        >
          <h2 className="text-3xl lg:text-4xl font-heading tracking-[-0.04em]">
            Watch a plan hold under pressure.
          </h2>
          <p className="text-sm text-muted-foreground">
            Every run is measured against its declared plan. Deviations are caught at
            the moment they occur — not after the fact.
          </p>
        </motion.div>

        {/* Main grid — two panels animate as units, no per-row stagger */}
        <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
          {/* Feed events */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="bg-background p-5"
          >
            <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em] mb-3">
              action feed · t17_competitor_brief
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {feedEvents.map((ev) => (
                <div key={ev.id} className="flex items-center gap-3">
                  <span
                    className={
                      ev.status === "allowed"
                        ? "text-muted-foreground"
                        : "text-foreground font-medium"
                    }
                  >
                    {ev.status === "allowed" ? "✓" : "✗"}
                  </span>
                  <span
                    className={
                      ev.status === "allowed"
                        ? "text-muted-foreground w-36"
                        : "text-foreground w-36"
                    }
                  >
                    {ev.action}
                  </span>
                  <span className="text-muted-foreground/60 w-14">{ev.label}</span>
                  {ev.status === "blocked" ? (
                    <span className="bg-foreground text-background px-1 text-[10px] font-medium">
                      BLOCKED
                    </span>
                  ) : (
                    <span className="text-muted-foreground/60">allowed</span>
                  )}
                  <span className="text-muted-foreground/50 ml-auto font-mono tabular-nums">
                    {ev.latency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Policy / declared plan */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            className="bg-background p-5"
          >
            <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em] mb-3">
              declared plan · transitions
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {policyRows.map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-muted-foreground w-28 truncate">{row.from}</span>
                  <span className="text-muted-foreground/40">→</span>
                  <span className="text-muted-foreground w-28 truncate">{row.to}</span>
                  <span className="ml-auto">
                    {row.status === "blocked" ? (
                      <span className="bg-foreground text-background px-1 text-[10px] font-medium">
                        BLOCKED
                      </span>
                    ) : (
                      <span className="text-muted-foreground/50">declared</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-background px-6 py-5 flex flex-col gap-1">
              <span className="text-2xl font-heading tracking-[-0.04em] font-mono tabular-nums">
                {m.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
