"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Dict } from "@/content/site";

export function WorkList({ work }: Pick<Dict, "work">) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  const reduce = useReducedMotion();

  return (
    <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-3">
      {work.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.name}
            className={`rounded-[1.75rem] transition-colors duration-300 ${isOpen ? "bg-mist" : "bg-mist/60 hover:bg-mist"}`}
          >
            <h4>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[1.75rem] px-5 py-5 text-left sm:px-8 sm:py-6"
              >
                <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="font-display text-[clamp(1.35rem,2.8vw,2rem)] leading-tight font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm text-pine-soft">
                    {item.kind}, {item.year}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`grid size-11 place-items-center rounded-full transition-[background-color,transform] duration-300 ${isOpen ? "rotate-45 bg-marigold" : "bg-sage"}`}
                >
                  <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M10 3.5v13M3.5 10h13" />
                  </svg>
                </span>
                <span className="sr-only">{isOpen ? work.close : work.open}</span>
              </button>
            </h4>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-${i}`}
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ height: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.2 } }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 px-5 pb-6 sm:px-8 sm:pb-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10">
                    {/* PLACEHOLDER until project screenshots arrive. */}
                    <div className="grid aspect-[16/10] place-items-center rounded-[1.25rem] bg-sage/70 text-sm text-pine-soft">
                      <span className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <rect x="3" y="4" width="18" height="16" rx="4" />
                          <circle cx="9" cy="10" r="1.8" />
                          <path d="m21 16-4.5-4.5L8 20" />
                        </svg>
                        {work.placeholder}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg leading-relaxed">{item.summary}</p>
                      <p className="mt-5 text-sm font-medium text-pine-soft">{work.builtLabel}</p>
                      <ul className="mt-2 grid gap-1.5">
                        {item.built.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span aria-hidden className="mt-[0.6em] size-2 shrink-0 rounded-full bg-moss" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm font-medium text-pine-soft">{work.stackLabel}</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {item.stack.map((s) => (
                          <li key={s} className="rounded-full bg-paper px-3 py-1 text-sm ring-1 ring-pine/10">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
