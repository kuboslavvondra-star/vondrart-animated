import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./detail-overrides.css";
import "./polish-overrides.css";
import "./scroll-fx.css";
import { ScrollFX } from "@/components/ScrollFX";

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
        <link rel="stylesheet" href="/final-polish.css?v=20260622c" />
        <link rel="stylesheet" href="/original-project-overlays.css?v=20260616c" />
        <link rel="stylesheet" href="/original-project-overlays-local.css?v=20260615g" />
      </head>
      <body>
        <div className="intro-curtain" aria-hidden="true">
          <div className="intro-orb" />
          <span className="intro-brand">
            <span>vondrart</span>
            <em>.studio</em>
          </span>
        </div>
        <ScrollFX />
        {children}
        <Script src="/site-interactions.js?v=20260615l" strategy="afterInteractive" />
      </body>
    </html>
  );
}
