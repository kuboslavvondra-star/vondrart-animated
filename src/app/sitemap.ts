import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Jednostránkový web → jedna URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vondrart.studio/",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
