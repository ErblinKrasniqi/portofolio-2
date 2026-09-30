import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

// Typefaces are chosen during the design pass (see CLAUDE.md) and loaded here via next/font.

export const metadata: Metadata = {
  title: "Erblin Krasniqi",
  description: "Full-stack web development studio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
