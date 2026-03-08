import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/rezervacia-potvrdenie", "/icon.svg", "/favicon.ico"],
      },
    ],
    sitemap: "https://mdfoto.sk/sitemap.xml",
  };
}
