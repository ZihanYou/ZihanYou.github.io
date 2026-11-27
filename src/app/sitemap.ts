import { profile } from "@/lib/content";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/research/", "/publications/", "/experience/", "/engineering/", "/awards/", "/cv/"];
  return paths.map((path) => ({
    url: `${profile.siteUrl}${path}`,
    lastModified: "2026-11-27",
  }));
}
