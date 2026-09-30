"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { stages, type Dict, type Stage } from "@/content/site";

// Fixed design size of the composition; it is scaled down to fit narrower screens.
const W = 1120;
const H = 700;

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="size-5 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="var(--marigold)" />
      <path d="m6 10.2 2.6 2.6L14 7.6" fill="none" stroke="var(--pine)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusPill({ stage, label }: { stage: Stage; label: string }) {
  const tone = stage === "live" ? "bg-moss text-paper" : stage === "design" ? "bg-marigold-soft" : "bg-sage";
  return (
    <span className={`flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-medium transition-colors duration-300 ${tone}`}>
      <span className={`size-2 rounded-full ${stage === "live" ? "live-dot bg-marigold" : "bg-pine/35"}`} />
      {label}
    </span>
  );
}

export function StageDemo({ hero, demo }: Pick<Dict, "hero" | "demo">) {
  const [stage, setStage] = useState<Stage>("sketch");
  const touched = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const { site, app } = demo;

  // Scale the composition to the width it has.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const ro = new ResizeObserver(([entry]) => {
      box.style.setProperty("--s", String(Math.min(entry.contentRect.width / W, 1)));
    });
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  // Play sketch → design → live once, the first time the demo is in view.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const go = (s: Stage, delay: number) =>
      timers.push(window.setTimeout(() => !touched.current && setStage(s), delay));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) return go("live", 0);
        go("design", 900);
        go("live", 2100);
      },
      { threshold: 0.35 },
    );
    io.observe(box);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const choose = (s: Stage) => {
    touched.current = true;
    setStage(s);
  };

  return (
    <div className="rounded-[2.25rem] bg-sage/60 p-3 sm:rounded-panel sm:p-8 lg:p-10">
      <div className="flex flex-col gap-3 p-1 sm:flex-row sm:items-center sm:justify-between sm:p-0">
        <div role="group" aria-label={hero.stagesLabel} className="flex w-full gap-1 rounded-full bg-paper p-1.5 sm:w-auto">
          {stages.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={stage === s}
              onClick={() => choose(s)}
              className="relative flex-1 rounded-full px-5 py-2 font-medium sm:flex-none sm:px-6"
            >
              {stage === s && (
                <motion.span
                  layoutId="stage-pill"
                  className="absolute inset-0 rounded-full bg-pine"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className={`relative transition-colors duration-200 ${stage === s ? "text-paper" : "text-pine"}`}>
                {hero.stages[s]}
              </span>
            </button>
          ))}
        </div>
        <p className="px-2 text-pine-soft sm:max-w-[32ch] sm:px-0 sm:text-right">{hero.stageNote}</p>
      </div>

      <div
        ref={boxRef}
        role="img"
        aria-label={hero.demoLabel}
        className="relative mt-5 [--s:0.3] sm:mt-8 sm:[--s:0.6] lg:[--s:1]"
        style={{ height: `calc(${H}px * var(--s))` }}
      >
        <div
          aria-hidden
          data-stage={stage}
          className="stage absolute top-0 left-0 origin-top-left"
          style={{ width: W, height: H, transform: "scale(var(--s))" }}
        >
          {/* A website: the clinic's home page */}
          <div className="tilt-l absolute top-0 left-0 h-[620px] w-[900px] overflow-hidden rounded-[30px] bg-mist shadow-[0_40px_80px_-40px_rgb(30_59_47/0.45)]">
            <div className="flex h-12 items-center justify-between border-b border-pine/10 px-5">
              <span className="flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-[13px] text-pine-soft">
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <rect x="3" y="7" width="10" height="7" rx="2.5" />
                  <path d="M5.5 7V5.5a2.5 2.5 0 0 1 5 0V7" />
                </svg>
                {site.url}
              </span>
              <StatusPill stage={stage} label={hero.stages[stage]} />
            </div>

            <div className="px-10 pt-7 text-pine">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="skb size-8 rounded-[11px] bg-moss" />
                  <span className="font-display text-[20px] font-semibold">
                    <span className="sk">{site.brand}</span>
                  </span>
                </span>
                <span className="flex items-center gap-7 text-[15px]">
                  {site.links.map((l) => (
                    <span key={l} className="sk">
                      {l}
                    </span>
                  ))}
                  <span className="skb rounded-full bg-pine px-5 py-2.5 font-medium text-paper">
                    <span className="sk">{site.cta}</span>
                  </span>
                </span>
              </div>

              <div className="mt-9 grid grid-cols-[1.1fr_1fr] items-center gap-10">
                <div>
                  <p className="font-display text-[46px] leading-[1.08] font-semibold">
                    <span className="sk">{site.title}</span>
                  </p>
                  <p className="mt-4 text-[17px] leading-relaxed text-pine-soft">
                    <span className="sk">{site.text}</span>
                  </p>
                  <span className="skb mt-7 inline-block rounded-full bg-marigold px-6 py-3 font-medium">
                    <span className="sk">{site.button}</span>
                  </span>
                </div>
                <div className="skb relative grid h-[250px] place-items-center overflow-hidden rounded-[28px] bg-moss">
                  <span className="ski absolute -top-10 -right-10 size-40 rounded-full bg-sage/25" />
                  <span className="ski absolute bottom-8 left-10 size-6 rounded-full bg-marigold" />
                  <svg viewBox="0 0 100 110" className="ski relative h-[130px]" aria-hidden>
                    <path
                      d="M30 12C17 12 9 21 9 35c0 11 5 20 8 31 3 10 4 32 11 32 6 0 7-12 9-21 1-5 3-8 7-8h12c4 0 6 3 7 8 2 9 3 21 9 21 7 0 8-22 11-32 3-11 8-20 8-31 0-14-8-23-21-23-7 0-10 4-20 4S37 12 30 12Z"
                      fill="var(--paper)"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4">
                {site.items.map((i) => (
                  <div key={i.name} className="skb rounded-[22px] bg-paper px-5 py-4">
                    <p className="text-[15px] text-pine-soft">
                      <span className="sk">{i.name}</span>
                    </p>
                    <p className="font-display mt-1 text-[26px] font-semibold">
                      <span className="sk">{i.price}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="live-only absolute bottom-5 left-10 flex items-center gap-2.5 rounded-full bg-pine py-2.5 pr-5 pl-3 text-[14px] font-medium text-paper shadow-[0_16px_30px_-12px_rgb(30_59_47/0.6)]">
              <Check />
              {site.toast}
            </div>
          </div>

          {/* A web app on a phone: ordering from a restaurant table */}
          <div className="tilt-r absolute top-[110px] left-[820px] h-[590px] w-[300px] rounded-[46px] bg-pine p-[9px] shadow-[0_40px_70px_-30px_rgb(30_59_47/0.65)]">
            <div className="relative h-full overflow-hidden rounded-[37px] bg-paper px-5 pt-4 text-pine">
              <div className="flex items-center justify-between text-[12px] font-bold">
                <span>9:41</span>
                <span className="absolute top-2.5 left-1/2 h-[20px] w-[76px] -translate-x-1/2 rounded-full bg-pine" />
                <span className="h-2.5 w-5 rounded-[4px] border-2 border-pine" />
              </div>
              <p className="font-display mt-7 text-[28px] leading-tight font-semibold">
                <span className="sk">{app.title}</span>
              </p>
              <p className="mt-0.5 text-[14px] text-pine-soft">
                <span className="sk">{app.subtitle}</span>
              </p>
              <ul className="mt-5 grid gap-2.5">
                {app.items.map((it) => (
                  <li key={it.name} className="skb flex items-center justify-between gap-2 rounded-[20px] bg-mist p-3.5">
                    <span className="min-w-0">
                      <span className="block text-[14px] font-medium">
                        <span className="sk">{it.name}</span>
                      </span>
                      <span className="block text-[13px] text-pine-soft">
                        <span className="sk">{it.price}</span>
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 text-[15px] font-bold">
                      <span className="skb grid size-7 place-items-center rounded-full bg-sage">
                        <span className="ski">−</span>
                      </span>
                      <span className="w-4 text-center">
                        <span className="sk">{it.qty}</span>
                      </span>
                      <span className="skb grid size-7 place-items-center rounded-full bg-marigold">
                        <span className="ski">+</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-pine-soft">
                    <span className="sk">{app.total}</span>
                  </span>
                  <span className="font-display text-[24px] font-semibold">
                    <span className="sk">{app.totalValue}</span>
                  </span>
                </div>
                <div className="skb mt-3 rounded-full bg-pine py-3.5 text-center text-[15px] font-medium text-paper">
                  <span className="sk">{app.send}</span>
                </div>
              </div>
              <div className="live-only live-late absolute inset-x-3 bottom-[128px] flex items-center gap-2 rounded-full bg-moss py-2.5 pr-4 pl-2.5 text-[13px] font-medium text-paper shadow-[0_14px_26px_-12px_rgb(30_59_47/0.7)]">
                <Check />
                {app.toast}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
