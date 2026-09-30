import type { ReactNode } from "react";
import { Fraunces, Nunito } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Lang } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const rounded = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rounded",
  display: "swap",
});

export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${fraunces.variable} ${rounded.variable} antialiased`}>
      <body className="min-h-dvh">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
