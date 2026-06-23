export type Project = {
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
    id: "bonghemia",
    overlayId: "bonghemia-vondrart-overlay",
    name: "Bonghemia",
    displayName: "Bonghemia",
    year: "since 2018",
    category: "Branding · Creative Direction",
    description: "cannabis 420 life-style brand",
    intro: [
      "Bonghemia vznikla ze slov bong a Bohemia. Od začátku jsme ji stavěli jako značku, která propojuje komunitu, kvalitu, edukaci, přírodní původ produktů, udržitelnost a pohodový lifestyle přístup.",
      "Nešlo jen o obchod. Šlo o vlastní jazyk, kulturu a směr, který se propisuje do identity, produktové grafiky, fotografií, merche i sociálních sítí."
    ],
    services: [
      "Brand Strategy",
      "Creative Direction",
      "Copywriting",
      "Product Graphics",
      "Photography",
      "Social Media"
    ],
    logo: "/images/bonghemia-logo.png",
    hero: "/images/bonghemia-lifestyle-visual.webp",
    cardImage: "/images/bonghemia-bongo.webp",
    palette: ["#131410", "#4e755f", "#fbb040", "#f2efe5"],
    gallery: [
      {
        src: "/images/bonghemia-kratom-packaging.webp",
        alt: "Bonghemia kratom packaging",
        caption: "Produktová grafika"
      },
      {
        src: "/images/bonghemia-product-kit.webp",
        alt: "Bonghemia product kit",
        caption: "Product kit"
      },
      {
        src: "/images/bonghemia-joint-us-merch.webp",
        alt: "Bonghemia Joint Us merch",
        caption: "JOINT US merch"
      },
      {
        src: "/images/bonghemia-grow-lifestyle.webp",
        alt: "Bonghemia grow lifestyle",
        caption: "Lifestyle fotografie"
      },
      {
        src: "/images/bonghemia-cbd-oil-packaging.webp",
        alt: "Bonghemia CBD oil packaging",
        caption: "Packaging"
      },
      {
        src: "/images/bonghemia-beztravi.webp",
        alt: "Bonghemia Bojujeme proti beztráví",
        caption: "Komunitní komunikace"
      }
    ],
    result:
      "Dlouhodobě vedený brand systém s vlastním jazykem, komunitním přesahem a jasnou vizuální energií."
  },
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
    hero: "/images/dopamine-radnice.webp",
    cardImage: "/images/dopamine-tour-cover.webp",
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
    hero: "/images/syndikat-legal-desky.webp",
    cardImage: "/images/syndikat-legal-desky.webp",
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
    hero: "/images/dvorek-brand.webp",
    cardImage: "/images/dvorek-card.webp",
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
    id: "houby-space",
    overlayId: "houby-vondrart-overlay",
    name: "houby.space",
    displayName: "houby.space",
    year: "2025",
    category: "Branding · Campaigns",
    description: "psychedelic lifestyle brand",
    intro: [
      "houby.space nestaví na sterilním wellness vzhledu. Místo toho vytváří barevný svět mezi přírodou, snem a digitální halucinací.",
      "Cílem bylo propojit produktovou důvěryhodnost s kulturním přesahem, aby značka fungovala jako produkt, merch label i komunita."
    ],
    services: ["Brand Identity", "Product Design", "Photography", "Collage", "Campaigns", "Social Media"],
    logo: "/images/houby-space-logo-v2.svg",
    hero: "/images/houby-space-lifestyle.webp",
    cardImage: "/images/houby-space-lifestyle.webp",
    palette: ["#4a6c5d", "#febc30", "#f4ecc4", "#f48dad"],
    gallery: [
      {
        src: "/images/houby-space-cloud.webp",
        alt: "houby.space cloud visual",
        caption: "Cloud visual"
      },
      {
        src: "/images/houby-space-hoodie.webp",
        alt: "houby.space hoodie visual",
        caption: "Merch visual"
      },
      {
        src: "/images/houby-space-city.webp",
        alt: "houby.space city visual",
        caption: "City visual"
      },
      {
        src: "/images/houby-space-packaging.webp",
        alt: "houby.space packaging redesign",
        caption: "Packaging"
      },
      {
        src: "/images/houby-space-shirt.webp",
        alt: "houby.space t-shirt",
        caption: "T-shirt"
      },
      {
        src: "/images/houby-space-bottle.webp",
        alt: "houby.space product bottle",
        caption: "Product"
      }
    ],
    result:
      "Výrazný lifestyle svět propojující produkt, merch a komunikaci do jedné psychedelické značkové zkušenosti."
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
    hero: "/images/cafe-olbracht-main.webp",
    cardImage: "/images/cafe-olbracht-card.webp",
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
    hero: "/images/co-ty-ploty-banner.webp",
    cardImage: "/images/co-ty-ploty-symbol-logo.png",
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
