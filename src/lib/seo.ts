import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath, type Locale } from "@/content/locale";
import { postSlugIn } from "@/content/post-slugs";
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

/**
 * Картинка для соцсетей по умолчанию — своя на каждый язык.
 *
 * Через файловую конвенцию opengraph-image её ставить нельзя: страницы задают
 * собственный openGraph через pageMetadata, и он перекрывает картинку
 * родительского сегмента — в итоге ссылка на любую внутреннюю страницу
 * расшаривалась бы без превью. Поэтому подставляем здесь, для всех разом.
 */
const OG_IMAGE: Record<Locale, string> = {
  ru: "/og/bis-ru.png",
  uz: "/og/bis-uz.png",
};

export function absoluteUrl(locale: Locale, path: string): string {
  return SITE_URL + localePath(locale, path);
}

/**
 * Тот же адрес на другом языке.
 *
 * У большинства страниц путь общий и меняется только префикс. Исключение —
 * статьи: их слаги в двух языках разные, поэтому подставляются по карте.
 */
export function translatePath(from: Locale, to: Locale, path: string): string {
  const post = path.match(/^\/post\/([^/]+)$/);
  return post ? `/post/${postSlugIn(from, to, post[1])}` : path;
}

/**
 * Языковые версии страницы: hreflang для каждой локали плюс x-default.
 *
 * `path` — путь страницы на её собственном языке, `from` — этот язык. Без него
 * узбекская статья получила бы русский слаг в атрибуте hreflang.
 */
export function languageAlternates(path: string, from: Locale = DEFAULT_LOCALE): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l] = absoluteUrl(l, translatePath(from, l, path));
  map["x-default"] = absoluteUrl(DEFAULT_LOCALE, translatePath(from, DEFAULT_LOCALE, path));
  return map;
}

type Options = {
  /** Заголовок и описание, если они не из справочника (статьи, кейсы). */
  title?: string;
  description?: string;
  /** Тип для соцсетей: у статей блога — article. */
  type?: "website" | "article";
  publishedTime?: string;
  /** Картинка для соцсетей: путь в public, например /design/blog/foo.webp */
  image?: string;
};

export function pageMetadata(locale: Locale, path: string, options: Options = {}): Metadata {
  const table = seo(locale);
  const entry = table[path as SeoKey];
  const title = options.title ?? entry?.title ?? table["/"].title;
  const description = options.description ?? entry?.description ?? table["/"].description;
  const url = absoluteUrl(locale, path);
  const image = options.image ?? OG_IMAGE[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    // Ключевые слова заводятся в справочнике и только там, где согласованы:
    // выдумывать их на каждую страницу смысла нет, а расхождение с текстом
    // страницы поиск считает спамом.
    ...(entry?.keywords ? { keywords: entry.keywords } : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(path, locale),
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
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
