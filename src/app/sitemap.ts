import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/adventure",
    "/adventure/eagles-flight-zipline",
    "/habitat",
    "/habitat/tree-tents",
    "/habitat/domes",
    "/habitat/tipis",
    "/living-classrooms",
    "/living-classrooms/school-programs",
    "/living-classrooms/corporate-programs",
    "/projects",
    "/how-we-care",
    "/guides",
    "/guides/longest-zipline-wayanad-eagles-flight",
    "/guides/best-glamping-stays-wayanad",
    "/guides/things-to-do-in-wayanad-first-timers-guide",
    "/guides/outdoor-learning-camps-schools-kerala",
    "/guides/planning-corporate-offsite-wayanad",
    "/guides/best-time-to-visit-wayanad-adventure",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `https://avasaexperiences.com${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/guides/") ? "monthly" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/guides/") ? 0.6 : 0.8,
  }));
}
