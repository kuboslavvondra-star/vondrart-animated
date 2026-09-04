import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./detail-overrides.css";
import "./polish-overrides.css";
import "./scroll-fx.css";
import { ScrollFX } from "@/components/ScrollFX";

const SITE_URL = "https://vondrart.studio";
const TITLE = "vondrart studio — Branding a vizuální identita | Brno";
const DESCRIPTION =
  "Brand & marketing studio z Brna. Navrhujeme vizuální identity, loga a brand strategie pro značky jako Bonghemia, Dopamine Tour nebo syndikat.legal — od strategie po každý detail komunikace.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "vondrart studio",
    locale: "cs_CZ",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "vondrart studio — creative, smart. Brand & marketing studio z Brna."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#f4f1eb"
};

/* Lokální SEO — Google tak pochopí, že jde o brand studio se sídlem v Brně. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "vondrart studio",
  description: DESCRIPTION,
  url: SITE_URL,
  email: "vondrart@gmail.com",
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brno",
    addressCountry: "CZ"
  },
  areaServed: [
    { "@type": "City", name: "Brno" },
    { "@type": "Country", name: "Česko" }
  ],
  knowsAbout: [
    "tvorba vizuální identity",
    "brand identity design",
    "tvorba loga pro firmu",
    "brand strategie a positioning",
    "copywriting a tone of voice"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="stylesheet" href="/final-polish.css?v=20260904a" />
        <link rel="stylesheet" href="/original-project-overlays.css?v=20260904a" />
        <link rel="stylesheet" href="/original-project-overlays-local.css?v=20260904a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <div className="intro-curtain" aria-hidden="true">
          <div className="intro-orb" />
          {/* Logotyp ve firemním písmu (vektor) — nahrazuje dřívější HTML text. */}
          <img className="intro-brand" src="/images/landing.svg" alt="" width={761} height={260} />
        </div>
        <ScrollFX />
        {children}
        <Script src="/site-interactions.js?v=20260623b" strategy="afterInteractive" />
      </body>
    </html>
  );
}
