import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath, type Locale } from "@/content/locale";
import { seo, type SeoKey } from "@/content/seo";

/**
 * Сборка метаданных страницы: канонический адрес, языковые версии, соцсети.
 *
 * Один источник на весь сайт — иначе hreflang и canonical неизбежно разъезжаются
 * между страницами, а это ровно те ошибки, которые поиск наказывает молча.
 */

/**
 * Адрес сайта. Задаётся переменной окружения — при переезде на рабочий домен
 * меняется в одном месте, а не в двадцати файлах.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bis-proto.vercel.app"
).replace(/\/$/, "");

/**
 * Демо-домен закрыт от индексации, чтобы не конкурировать в выдаче с рабочим
 * сайтом клиента. На собственном домене индексация включается сама — правка
 * переменной окружения, а не кода.
 */
export const IS_INDEXABLE = !SITE_URL.includes("vercel.app");

const OG_LOCALE: Record<Locale, string> = { ru: "ru_RU", uz: "uz_UZ" };

export function absoluteUrl(locale: Locale, path: string): string {
  return SITE_URL + localePath(locale, path);
}

/** Языковые версии страницы: hreflang для каждой локали плюс x-default. */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l] = absoluteUrl(l, path);
  map["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
  return map;
}

type Options = {
  /** Заголовок и описание, если они не из справочника (статьи, кейсы). */
  title?: string;
  description?: string;
  /** Тип для соцсетей: у статей блога — article. */
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata(locale: Locale, path: string, options: Options = {}): Metadata {
  const table = seo(locale);
  const entry = table[path as SeoKey];
  const title = options.title ?? entry?.title ?? table["/"].title;
  const description = options.description ?? entry?.description ?? table["/"].description;
  const url = absoluteUrl(locale, path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    robots: IS_INDEXABLE
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: options.type ?? "website",
      url,
      title,
      description,
      siteName: "BIS",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      ...(options.publishedTime ? { publishedTime: options.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
