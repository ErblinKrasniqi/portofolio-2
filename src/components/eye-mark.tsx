"use client";

import { useEffect, useRef } from "react";

// The logo: an iris whose pupil follows the visitor's pointer.
// Static on touch screens and when reduced motion is preferred.
export function EyeMark({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const irisRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const iris = irisRef.current;
    if (!svg || !iris) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = svg.getBoundingClientRect();
        const dx = e.clientX - (box.left + box.width / 2);
        const dy = e.clientY - (box.top + box.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(dist / 120, 1) * 5.5;
        iris.style.transform = `translate(${(dx / dist) * reach}px, ${(dy / dist) * reach}px)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="18.5" fill="var(--mist)" stroke="var(--pine)" strokeWidth="2.5" />
      <g ref={irisRef} style={{ transition: "transform 180ms ease-out" }}>
        <circle cx="20" cy="20" r="9.5" fill="var(--moss)" />
        <circle cx="20" cy="20" r="4.6" fill="var(--pine)" />
        <circle cx="22.6" cy="17.4" r="1.7" fill="var(--mist)" />
      </g>
    </svg>
  );
}
