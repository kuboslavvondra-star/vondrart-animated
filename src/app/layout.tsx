import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./detail-overrides.css";
import "./polish-overrides.css";

export const metadata: Metadata = {
  title: "vondrart — brand studio",
  description: "Brand & Marketing Studio — Brno."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        {children}
        <Script src="/site-interactions.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
