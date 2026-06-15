import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./detail-overrides.css";
import "./polish-overrides.css";

export const metadata: Metadata = {
  title: "vondrart - brand studio",
  description: "Brand & Marketing Studio - Brno."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="preload" href="/fonts/NewBlack-800.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NewBlack-400.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/final-polish.css?v=20260615b" />
        <link rel="stylesheet" href="/original-project-overlays.css?v=20260615g" />
        <link rel="stylesheet" href="/original-project-overlays-local.css?v=20260615g" />
      </head>
      <body>
        {children}
        <Script src="/site-interactions.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
