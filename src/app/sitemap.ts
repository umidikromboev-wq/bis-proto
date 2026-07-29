import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath } from "@/content/locale";
import { SEO_KEYS } from "@/content/seo";
import { cases } from "@/content/blocks";
import { posts } from "@/content/blog";
import { SITE_URL, languageAlternates, translatePath } from "@/lib/seo";

/**
 * Карта сайта для обеих языковых версий.
 *
 * У каждой записи указаны languages: так поиск понимает, что русская и
 * узбекская страницы — одна и та же страница на двух языках, а не дубли.
 *
 * Пути перечисляются в русском варианте, а адрес для второго языка получается
 * через translatePath: у перенесённых статей узбекский слаг свой, и простая
 * подстановка префикса /uz к русскому слагу дала бы несуществующие адреса.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...SEO_KEYS,
    ...cases.map((c) => `/portfolio/${c.slug}`),
    ...posts.map((p) => `/post/${p.slug}`),
  ];

  const priority = (path: string) => (path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8);

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: SITE_URL + localePath(locale, translatePath(DEFAULT_LOCALE, locale, path)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: priority(path),
      alternates: { languages: languageAlternates(path, DEFAULT_LOCALE) },
    })),
  );
}
