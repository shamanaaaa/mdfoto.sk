import type { MetadataRoute } from "next";

const baseUrl = "https://mdfoto.sk";

const routes: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  lastModified: string;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: "2025-12-01" },
  { path: "/fotograf-nitra", changeFrequency: "monthly", priority: 0.9, lastModified: "2025-12-01" },
  { path: "/novorodenecke-fotenie-nitra", changeFrequency: "monthly", priority: 0.9, lastModified: "2025-12-01" },
  { path: "/rodinne-fotenie-nitra", changeFrequency: "monthly", priority: 0.9, lastModified: "2025-12-01" },
  { path: "/tehotenske-fotenie-nitra", changeFrequency: "monthly", priority: 0.9, lastModified: "2025-12-01" },
  { path: "/portretovy-fotograf-nitra", changeFrequency: "monthly", priority: 0.8, lastModified: "2025-12-01" },
  { path: "/novorodenci", changeFrequency: "monthly", priority: 0.8, lastModified: "2025-12-01" },
  { path: "/rodinky-deti", changeFrequency: "monthly", priority: 0.8, lastModified: "2025-12-01" },
  { path: "/tehulky", changeFrequency: "monthly", priority: 0.8, lastModified: "2025-12-01" },
  { path: "/o-mne", changeFrequency: "monthly", priority: 0.7, lastModified: "2025-12-01" },
  { path: "/cennik", changeFrequency: "monthly", priority: 0.8, lastModified: "2025-12-01" },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7, lastModified: "2025-12-01" },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-03-07" },
  { path: "/ochrana-sukromia", changeFrequency: "yearly", priority: 0.3, lastModified: "2025-12-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
