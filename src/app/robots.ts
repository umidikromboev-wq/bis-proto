import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/seo";

/**
 * Пока сайт живёт на демо-домене, он закрыт целиком: витрина для согласования
 * не должна попадать в выдачу и конкурировать с рабочим сайтом клиента.
 * На собственном домене правило переключается само.
 */
export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
