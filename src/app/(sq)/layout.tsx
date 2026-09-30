import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { dict } from "@/content/site";
import "../globals.css";

export const metadata: Metadata = {
  title: dict.sq.htmlTitle,
  description: dict.sq.htmlDescription,
  alternates: { languages: { en: "/" } },
};

export default function AlbanianLayout({ children }: LayoutProps<"/">) {
  return <RootShell lang="sq">{children}</RootShell>;
}
