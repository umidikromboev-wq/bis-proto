import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/content/locale";
import { SEO_KEYS } from "@/content/seo";
import { cases } from "@/content/blocks";
import { posts } from "@/content/blog";
import { SITE_URL, languageAlternates } from "@/lib/seo";

/**
 * Карта сайта для обеих языковых версий.
 *
 * У каждой записи указаны languages: так поиск понимает, что русская и
 * узбекская страницы — одна и та же страница на двух языках, а не дубли.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...SEO_KEYS,
    ...cases.map((c) => `/cases/${c.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];

  const priority = (path: string) => (path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8);

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: SITE_URL + localePath(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: priority(path),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
