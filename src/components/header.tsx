"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrandMark } from "@/components/brand-mark";
import { company, type Dict } from "@/content/site";

export function Header({ nav, langSwitch }: Pick<Dict, "nav" | "langSwitch">) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#work", label: nav.work },
    { href: "#services", label: nav.services },
    { href: "#studio", label: nav.studio },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-3 rounded-full bg-mist/85 p-1.5 shadow-[0_10px_30px_-14px_rgb(30_59_47/0.35)] ring-1 ring-pine/8 backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2.5 rounded-full py-0.5 pr-3 pl-0.5">
          <BrandMark className="size-10 shrink-0" />
          <span className="font-display text-[1.15rem] font-semibold tracking-[-0.01em]">{company.name}</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 transition-colors hover:bg-sage/70">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={langSwitch.href}
            hrefLang={langSwitch.href === "/" ? "en" : "sq"}
            aria-label={langSwitch.other}
            className="hidden rounded-full px-4 py-2 ring-1 ring-pine/15 transition-colors hover:bg-sage/70 sm:inline-block"
          >
            {langSwitch.label}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-pine px-5 py-2 font-medium whitespace-nowrap text-paper transition-colors hover:bg-moss md:inline-block"
          >
            {nav.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center gap-2 rounded-full bg-pine py-2 pr-4 pl-3.5 font-medium text-paper md:hidden"
          >
            <span aria-hidden className="relative block size-3.5">
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0.5"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-2.5"}`}
              />
            </span>
            {open ? nav.close : nav.menu}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            style={{ transformOrigin: "top right" }}
            className="mx-auto mt-2 max-w-[76rem] rounded-[2rem] bg-mist p-3 shadow-[0_24px_50px_-24px_rgb(30_59_47/0.45)] ring-1 ring-pine/8 md:hidden"
          >
            <ul>
              {[...links, { href: "#contact", label: nav.contact }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block rounded-[1.25rem] px-4 py-3 text-2xl font-semibold active:bg-sage/70"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={langSwitch.href}
              hrefLang={langSwitch.href === "/" ? "en" : "sq"}
              className="mt-2 block rounded-full px-4 py-3 text-center ring-1 ring-pine/15"
            >
              {langSwitch.other}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
