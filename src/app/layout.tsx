import "./globals.scss";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/pages/Analytics";
import Head from "next/head";

import CookieBanner from "@/pages/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-LX9QRPGD20" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
