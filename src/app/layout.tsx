import "./globals.scss";
import { Inter } from "next/font/google";
import GoogleAnalytics from '@/pages/Analytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-LX9QRPGD20" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
