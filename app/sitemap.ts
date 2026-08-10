import type { MetadataRoute } from "next";

const baseUrl = "https://shieldplumbingllc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/water-heater-replacement", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/plumbing-repairs-fixture-installation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/remodel-plumbing-rough-ins", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/service-area", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/washougal-plumber", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/camas-plumber", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/vancouver-plumber", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/skamania-county-plumber", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
