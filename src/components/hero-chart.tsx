import type { CSSProperties, ReactNode } from "react";
import type { Dict } from "@/content/site";

// One row of the eye chart: the acuity mark on the left, the line centred.
function Row({ mark, i, className, children }: { mark: string; i: number; className: string; children: ReactNode }) {
  return (
    <span className="grid grid-cols-[2.25rem_1fr_2.25rem] items-center gap-1 sm:grid-cols-[4rem_1fr_4rem]">
      <span aria-hidden className="font-body self-center text-[0.7rem] font-medium text-pine-soft/70 tabular-nums sm:text-xs">
        {mark}
      </span>
      <span className={`focus-in block text-center text-balance ${className}`} style={{ "--i": i } as CSSProperties}>
        {children}
      </span>
      <span aria-hidden />
    </span>
  );
}

export function HeroChart({ hero }: Pick<Dict, "hero">) {
  return (
    <section id="top" className="px-3 pt-[5.5rem] sm:px-6 sm:pt-28">
      {/* The lightbox the chart hangs on. */}
      <div className="mx-auto max-w-[76rem] rounded-[2.25rem] bg-mist px-1 py-12 shadow-[inset_0_0_0_1px_rgb(30_59_47/0.06),0_50px_90px_-50px_rgb(70_111_85/0.55)] sm:rounded-panel sm:px-4 sm:py-20">
        <div className="font-display">
          <Row mark="6/60" i={0} className="text-[clamp(7rem,24vw,12.5rem)] leading-[0.9] font-bold text-moss">
            <span aria-hidden>E</span>
          </Row>

          <h1 className="mt-5 flex flex-col gap-3 font-semibold tracking-[0.01em] sm:mt-8 sm:gap-5">
            <Row mark="6/36" i={1} className="text-[clamp(2.5rem,8.4vw,5.75rem)] leading-[1]">
              {hero.lines[0]}
            </Row>
            <Row mark="6/24" i={2} className="text-[clamp(1.6rem,4.6vw,3.4rem)] leading-[1.1]">
              {hero.lines[1]}
            </Row>
            <Row mark="6/18" i={3} className="text-[clamp(1.35rem,3.3vw,2.4rem)] leading-[1.15] font-medium">
              {hero.lines[2]}
            </Row>
          </h1>

          <p className="mt-6 flex flex-col gap-3 font-normal sm:mt-9 sm:gap-4">
            <Row mark="6/12" i={4} className="text-[clamp(1.1rem,2.1vw,1.5rem)] leading-snug">
              {hero.sub[0]}
            </Row>
            <Row mark="6/9" i={5} className="font-body text-[clamp(0.98rem,1.5vw,1.15rem)] leading-snug text-pine-soft">
              {hero.sub[1]}
            </Row>
          </p>

          <p className="mt-6 sm:mt-8">
            <Row mark="6/6" i={6} className="font-body text-[0.9rem] leading-snug">
              <a
                href="#contact"
                className="rounded-md underline decoration-marigold decoration-[3px] underline-offset-[5px] transition-colors hover:text-moss"
              >
                {hero.tiny}
              </a>
            </Row>
          </p>
        </div>
      </div>
    </section>
  );
}
