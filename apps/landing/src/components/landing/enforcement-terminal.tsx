"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type LineKind = "command" | "declare" | "allowed" | "blocked" | "blocked-sub" | "complete";

interface TerminalLine {
  kind: LineKind;
  text: string;
  latency?: string;
}

const lines: TerminalLine[] = [
  { kind: "command", text: "$ trajeckt run t17_competitor_brief" },
  { kind: "declare", text: "plan declared    fetch_web_page → write_shared_drive" },
  { kind: "allowed", text: "✓ fetch_web_page", latency: "1.6ms" },
  { kind: "allowed", text: "✓ write_shared_drive", latency: "1.9ms" },
  { kind: "blocked", text: "✗ fetch_web_page", latency: "1.7ms" },
  { kind: "blocked-sub", text: "  └ no valid transition in declared plan" },
  { kind: "blocked", text: "✗ fetch_web_page", latency: "1.8ms" },
  { kind: "complete", text: "run complete · 2 allowed · 2 blocked · plan enforced" },
];

function TerminalLineContent({ line }: { line: TerminalLine }) {
  if (line.kind === "allowed") {
    const [mark, ...rest] = line.text.split(" ");
    const tool = rest.join(" ");
    return (
      <div className="flex items-center gap-4 text-muted-foreground">
        <span className="w-4 shrink-0">{mark}</span>
        <span className="w-36 shrink-0">{tool}</span>
        <span className="w-16 shrink-0">in plan</span>
        <span className="w-16 shrink-0">allowed</span>
        {line.latency && (
          <span className="text-muted-foreground/60 font-mono tabular-nums">{line.latency}</span>
        )}
      </div>
    );
  }

  if (line.kind === "blocked") {
    const [mark, ...rest] = line.text.split(" ");
    const tool = rest.join(" ");
    return (
      <div className="flex items-center gap-4 text-foreground font-medium">
        <span className="w-4 shrink-0">{mark}</span>
        <span className="w-36 shrink-0">{tool}</span>
        <span className="w-16 shrink-0 text-muted-foreground font-normal">off plan</span>
        <span className="shrink-0">
          <span className="bg-foreground text-background px-1 text-[10px] font-medium">
            BLOCKED
          </span>
        </span>
        {line.latency && (
          <span className="text-muted-foreground font-normal font-mono tabular-nums">
            {line.latency}
          </span>
        )}
      </div>
    );
  }

  if (line.kind === "blocked-sub") {
    return <div className="text-muted-foreground/60 pl-4">{line.text}</div>;
  }

  if (line.kind === "complete") {
    return (
      <div className="text-muted-foreground border-t border-border pt-2 mt-1">{line.text}</div>
    );
  }

  if (line.kind === "declare") {
    return <div className="text-muted-foreground">{line.text}</div>;
  }

  return <div className="text-foreground">{line.text}</div>;
}

export function EnforcementTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const showAll = prefersReduced || isInView;

  return (
    <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 py-12">
      <div
        ref={ref}
        className="border border-border bg-background rounded-none overflow-hidden font-mono text-xs"
      >
        {/* Header bar — single ping dot for the page */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground/70" />
            </span>
            <span className="text-muted-foreground text-[11px]">trajeckt · live enforcement</span>
          </div>
          <span className="text-muted-foreground/50 text-[10px] font-mono tabular-nums">
            run-20260604-152135
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 sm:p-5 flex flex-col gap-1.5 min-h-[200px]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={showAll ? { opacity: 1 } : { opacity: 0 }}
              transition={prefersReduced ? {} : { duration: 0.25, delay: i * 0.45 }}
            >
              <TerminalLineContent line={line} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <motion.p
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={showAll ? { opacity: 1 } : { opacity: 0 }}
        transition={
          prefersReduced ? {} : { duration: 0.4, delay: lines.length * 0.45 + 0.2 }
        }
        className="mt-3 text-xs text-muted-foreground font-mono"
      >
        From a real benchmark run. The same tool, allowed in plan and blocked out of it.
      </motion.p>
    </section>
  );
}
