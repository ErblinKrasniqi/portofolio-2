"use client";

import { useEffect, useRef } from "react";

// The studio mark: a rounded tile with a marigold dot that drifts toward the visitor's pointer.
// Static on touch screens and when reduced motion is preferred.
export function BrandMark({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const dot = dotRef.current;
    if (!svg || !dot) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = svg.getBoundingClientRect();
        const dx = e.clientX - (box.left + box.width / 2);
        const dy = e.clientY - (box.top + box.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(dist / 160, 1) * 6;
        dot.style.transform = `translate(${(dx / dist) * reach}px, ${(dy / dist) * reach}px)`;
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
      <rect x="1" y="1" width="38" height="38" rx="13" fill="var(--pine)" />
      <circle
        ref={dotRef}
        cx="20"
        cy="20"
        r="7"
        fill="var(--marigold)"
        style={{ transition: "transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)" }}
      />
    </svg>
  );
}
