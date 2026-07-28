import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/adventure",
    "/habitat",
    "/living-classrooms",
    "/projects",
    "/how-we-care",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `https://avasanature.com${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
