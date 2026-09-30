"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { BookingScreen, DayScreen, FileScreen } from "@/components/app-screens";
import type { Dict, Lang } from "@/content/site";

const order = ["booking", "day", "file"] as const;
type Tab = (typeof order)[number];

export function AppShowcase({
  tabs,
  tabsLabel,
  screens,
  lang,
}: {
  tabs: Dict["caseStudy"]["tabs"];
  tabsLabel: string;
  screens: Dict["screens"];
  lang: Lang;
}) {
  const [active, setActive] = useState<Tab>("booking");
  const id = useId();
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({ booking: null, day: null, file: null });

  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = order[(order.indexOf(active) + step + order.length) % order.length];
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const panels: Record<Tab, ReactNode> = {
    booking: <BookingScreen s={screens} />,
    day: <DayScreen s={screens} />,
    file: <FileScreen s={screens} />,
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={tabsLabel}
        onKeyDown={onKeyDown}
        className="flex w-full gap-1 rounded-full bg-paper/10 p-1.5 sm:inline-flex sm:w-auto"
      >
        {order.map((t) => (
          <button
            key={t}
            ref={(el) => {
              tabRefs.current[t] = el;
            }}
            role="tab"
            type="button"
            id={`${id}-tab-${t}`}
            aria-selected={active === t}
            aria-controls={`${id}-panel-${t}`}
            tabIndex={active === t ? 0 : -1}
            onClick={() => setActive(t)}
            className={`relative min-w-0 flex-1 rounded-full px-2.5 py-2 text-sm leading-tight font-medium transition-colors sm:flex-none sm:px-5 sm:text-base sm:whitespace-nowrap ${
              active === t ? "text-pine" : "text-paper/80 hover:text-paper"
            }`}
          >
            {active === t && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full bg-marigold"
                transition={{ type: "spring", stiffness: 480, damping: 36 }}
              />
            )}
            <span className="relative">{tabs[t]}</span>
          </button>
        ))}
      </div>

      {/* The app window. All screens share one grid cell so switching never changes its height. */}
      <div className="mt-5 overflow-hidden rounded-[1.75rem] bg-paper text-pine shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)]">
        <div className="flex items-center justify-between gap-3 border-b border-pine/10 px-5 py-3">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span aria-hidden className="size-3 rounded-full bg-moss ring-[3px] ring-sage" />
            {screens.appName}
          </span>
          <span aria-hidden className="flex gap-1 text-xs font-medium">
            {(["sq", "it", "en"] as const).map((code) => (
              <span key={code} className={`rounded-full px-2 py-0.5 ${code === lang ? "bg-sage" : "text-pine-soft"}`}>
                {code.toUpperCase()}
              </span>
            ))}
          </span>
        </div>
        <div className="@container grid">
          {order.map((t) => (
            <div
              key={t}
              role="tabpanel"
              id={`${id}-panel-${t}`}
              aria-labelledby={`${id}-tab-${t}`}
              inert={active !== t}
              className={`[grid-area:1/1] transition-[opacity,transform,visibility] duration-300 ease-out ${
                active === t ? "visible opacity-100" : "invisible translate-y-2 opacity-0"
              }`}
            >
              {panels[t]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
