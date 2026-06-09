import type { MetadataRoute } from "next";
import { servicePath, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us/", "/contact-us/", "/privacy-policy/"];
  const serviceRoutes = services.map((service) => servicePath(service));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
