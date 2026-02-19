import type { MetadataRoute } from "next";

const baseUrl = "https://mdfoto.sk";

const routes = [
  "/",
  "/fotograf-nitra",
  "/portretovy-fotograf-nitra",
  "/rodinne-fotenie-nitra",
  "/tehotenske-fotenie-nitra",
  "/novorodenci",
  "/rodinky-deti",
  "/tehulky",
  "/o-mne",
  "/cennik",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
