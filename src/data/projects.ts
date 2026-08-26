export type Project = {
  logoHeight?: number;
  logoWidth?: number;
  cardImageHeight?: number;
  cardImageWidth?: number;
  id: string;
  overlayId: string;
  name: string;
  displayName: string;
  year: string;
  category: string;
  description: string;
  intro: string[];
  services: string[];
  logo: string;
  hero: string;
  cardImage: string;
  palette: string[];
  gallery: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  result: string;
};

export const projects: Project[] = [
  {
    id: "dopamine-tour",
    overlayId: "dopamine-vondrart-overlay",
    name: "Dopamine Tour",
    displayName: "Dopamine Tour",
    year: "2026",
    category: "Branding · Social Media",
    description: "city tour for fast minds",
    intro: [
      "Dopamine Tour ukazuje Prahu jinak než klasická prohlídka. Vizuální systém převádí energii, zvědavost a malé momenty odměny do současné city experience značky.",
      "Logo není dekorace navíc. Je to jednoduchý symbol toho, na čem Dopamine Tour stojí: objev, očekávání a pocit, že chceš jít dál."
    ],
    services: ["Brand Identity", "Logo System", "Visual System", "Social Media", "Web Design"],
    logo: "/images/dopamine-tour-logo.png",
    logoWidth: 817,
    logoHeight: 817,
    hero: "/images/dopamine-radnice.webp",
    cardImage: "/images/dopamine-tour-cover.webp",
    cardImageWidth: 1400,
    cardImageHeight: 984,
    palette: ["#fefaeb", "#73c9e6", "#5c5aa4", "#e84a94", "#0e101f"],
    gallery: [
      {
        src: "/images/dopamine-radnice.webp",
        alt: "Dopamine Tour Prague panorama",
        caption: "Prague visual"
      },
      {
        src: "/images/dopamine-prague.webp",
        alt: "Dopamine Tour Prague visual",
        caption: "Prague visual"
      },
      {
        src: "/images/dopamine-tower.webp",
        alt: "Dopamine Tour tower visual",
        caption: "Urban visual"
      },
      {
        src: "/images/dopamine-tour-moment.webp",
        alt: "Dopamine Tour moment",
        caption: "Tour moment"
      },
      {
        src: "/images/dopamine-five-senses.webp",
        alt: "Dopamine Tour five senses visual",
        caption: "Social system"
      },
      {
        src: "/images/dopamine-sight.webp",
        alt: "Dopamine Tour sight visual",
        caption: "Sight"
      },
      {
        src: "/images/dopamine-book-your-hit.webp",
        alt: "Book your dopamine hit visual",
        caption: "Campaign CTA"
      }
    ],
    result:
      "Výrazná identita pro turistický produkt, který působí víc jako současná městská experience značka než sightseeing."
  },
  {
    id: "syndikat-legal",
    overlayId: "syndikat-vondrart-overlay",
    name: "syndikat.legal",
    displayName: "syndikat.legal",
    year: "2026",
    category: "Branding · Social Media",
    description: "advokátní kancelář",
    intro: [
      "syndikat.legal propojuje právníky s různou specializací do jedné srozumitelné značky. Identita stojí na důvěře, odbornosti a jasné rozpoznatelnosti.",
      "Namísto paragrafů a konzervativní teatrálnosti pracuje značka s typografií, kontrastní zelenou paletou a přesnými brand aplikacemi."
    ],
    services: ["Brand Identity", "Logo System", "Visual System", "Social Media", "Brand Applications"],
    logo: "/images/syndikat-legal-logo.png",
    logoWidth: 437,
    logoHeight: 143,
    hero: "/images/syndikat-legal-desky.webp",
    cardImage: "/images/syndikat-legal-desky.webp",
    cardImageWidth: 1400,
    cardImageHeight: 919,
    palette: ["#072924", "#b9dcc6", "#eef5f1"],
    gallery: [
      {
        src: "/images/syndikat-legal-logo-light.webp",
        alt: "syndikat.legal logo on light green background",
        caption: "Logo na světlém podkladu"
      },
      {
        src: "/images/syndikat-legal-logo-dark.webp",
        alt: "syndikat.legal logo on dark background",
        caption: "Logo na tmavém podkladu"
      },
      {
        src: "/images/syndikat-legal-instagram.webp",
        alt: "syndikat.legal Instagram visual",
        caption: "Social visual"
      },
      {
        src: "/images/syndikat-legal-poradenstvi.webp",
        alt: "syndikat.legal advisory visual",
        caption: "Regulované trhy"
      }
    ],
    result:
      "Právní identita, která je seriózní, současná a okamžitě rozpoznatelná bez starých oborových symbolů."
  },
  {
    id: "dvorek",
    overlayId: "dvorek-vondrart-overlay",
    name: "Dvorek",
    displayName: "Dvorek",
    year: "2026",
    category: "Branding · Illustration",
    description: "lokální café & bistro brand",
    intro: [
      "Dvorek je lokální café & bistro značka postavená na jednoduchosti, výrazné barvě a lidském vizuálním jazyku.",
      "Systém funguje od loga přes menu až po drobné ilustrace. Výsledkem je značka, která působí přístupně a zůstává snadno zapamatovatelná."
    ],
    services: ["Brand Identity", "Illustration", "Social Media"],
    logo: "/images/dvorek-logo.png",
    logoWidth: 1496,
    logoHeight: 421,
    hero: "/images/dvorek-brand.webp",
    cardImage: "/images/dvorek-card.webp",
    cardImageWidth: 960,
    cardImageHeight: 720,
    palette: ["#d2360f", "#fff4df", "#1d1d1b"],
    gallery: [
      {
        src: "/images/dvorek-kettle.png",
        alt: "Dvorek kettle illustration",
        caption: "Ilustrační systém"
      },
      {
        src: "/images/dvorek-character.png",
        alt: "Dvorek character with mug",
        caption: "Postava s hrnkem"
      },
      {
        src: "/images/dvorek-latte.png",
        alt: "Dvorek latte illustration",
        caption: "Latte"
      },
      {
        src: "/images/dvorek-loyalty-card.webp",
        alt: "Dvorek loyalty card",
        caption: "Věrnostní karta"
      },
      {
        src: "/images/dvorek-cup-pattern.png",
        alt: "Dvorek cup pattern",
        caption: "Pattern"
      }
    ],
    result:
      "Hravá a výrazná identita pro lokální podnik bez sterilního minimalismu, s vlastním rukopisem."
  },
  {
    id: "cafe-olbracht",
    overlayId: "olbracht-vondrart-overlay",
    name: "Café Olbracht",
    displayName: "Café Olbracht",
    year: "2024",
    category: "Branding · Illustration",
    description: "kavárna",
    intro: [
      "Pro Café Olbracht vznikla identita, která drží charakter lokální kavárny a funguje v každodenním provozu.",
      "Systém stojí na jemné paletě, výrazném symbolu inspirovaném kávovým zrnem a typografii, která je čistá, ale ne sterilní."
    ],
    services: ["Brand Identity", "Illustration", "Social Media"],
    logo: "/images/cafe-olbracht-logo.png",
    logoWidth: 264,
    logoHeight: 324,
    hero: "/images/cafe-olbracht-main.webp",
    cardImage: "/images/cafe-olbracht-card.webp",
    cardImageWidth: 960,
    cardImageHeight: 720,
    palette: ["#fdf1d3", "#6a5652", "#cfdfbc", "#181818"],
    gallery: [
      {
        src: "/images/cafe-olbracht-aprons.webp",
        alt: "Café Olbracht aprons",
        caption: "Zástěry"
      },
      {
        src: "/images/cafe-olbracht-cup.webp",
        alt: "Café Olbracht cup",
        caption: "Kelímek"
      },
      {
        src: "/images/cafe-olbracht-interior.webp",
        alt: "Café Olbracht interior",
        caption: "Provoz"
      },
      {
        src: "/images/cafe-olbracht-service.webp",
        alt: "Café Olbracht service",
        caption: "Detail provozu"
      }
    ],
    result:
      "Lokální kavárna s vlastním rytmem a identitou připravenou pro výlohu, kelímky, provoz i sociální sítě."
  },
  {
    id: "cotyploty",
    overlayId: "cotyploty-vondrart-overlay",
    name: "Co ty ploty",
    displayName: "Co ty ploty",
    year: "2025",
    category: "Branding · Campaigns",
    description: "montáž plotů",
    intro: [
      "Co ty ploty potřebovaly rychle a jasně vstoupit do online prostoru. Identita proto stojí na kontrastu, jednoduchém logu a okamžitě čitelné službě.",
      "Komunikace má být pochopitelná během pár vteřin: zaměření, montáž a plot na klíč bez zbytečných komplikací."
    ],
    services: ["Brand Identity", "Logo System", "Color System", "Campaigns"],
    logo: "/images/co-ty-ploty-logo.png",
    logoWidth: 836,
    logoHeight: 458,
    hero: "/images/co-ty-ploty-banner.webp",
    cardImage: "/images/co-ty-ploty-symbol-logo.png",
    cardImageWidth: 836,
    cardImageHeight: 458,
    palette: ["#f0ede4", "#004643"],
    gallery: [
      {
        src: "/images/co-ty-ploty-horizontal-logo.png",
        alt: "Co ty ploty horizontal logo",
        caption: "Horizontální logo"
      },
      {
        src: "/images/co-ty-ploty-symbol.png",
        alt: "Co ty ploty symbol",
        caption: "Symbol"
      },
      {
        src: "/images/co-ty-ploty-banner.webp",
        alt: "Co ty ploty advertising banner",
        caption: "Reklamní banner"
      }
    ],
    result:
      "Jednoduchá výkonnostní identita pro službu, která má být jasná hned na první pohled."
  }
];

export const services = [
  "Brand Identity",
  "Vizuální identita",
  "Tone of Voice",
  "Brand Strategy",
  "Social Media",
  "Packaging",
  "Fotografie",
  "Brand Concept"
];
