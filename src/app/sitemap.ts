import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const now = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
  ];
}
