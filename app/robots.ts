import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shieldplumbingllc.com/sitemap.xml",
    host: "https://shieldplumbingllc.com",
  };
}
