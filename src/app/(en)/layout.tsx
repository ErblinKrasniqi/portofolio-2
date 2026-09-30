import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { dict } from "@/content/site";
import "../globals.css";

export const metadata: Metadata = {
  title: dict.en.htmlTitle,
  description: dict.en.htmlDescription,
  alternates: { languages: { sq: "/sq" } },
};

export default function EnglishLayout({ children }: LayoutProps<"/">) {
  return <RootShell lang="en">{children}</RootShell>;
}
