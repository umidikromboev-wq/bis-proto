import { content } from "@/content";
import { localePath, type Locale } from "@/content/locale";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

/**
 * Структурированные данные для поиска.
 *
 * Выводятся как <script type="application/ld+json">. Содержимое собирается из
 * того же контента, что и страница, — так разметка не расходится с текстом,
 * а это первое, за что поиск снимает доверие к разметке.
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Значения берутся из собственного контента, не из пользовательского
      // ввода; JSON.stringify экранирует кавычки.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Организация и сайт — на всех страницах. */
export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const { contacts } = content(locale).blocks;
  const office = content(locale).contactsPage.office;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "BIS",
            alternateName: "Business Intelligence Solutions",
            url: SITE_URL,
            logo: `${SITE_URL}/design/bis-logo.png`,
            telephone: contacts.phone,
            email: contacts.email,
            foundingDate: "2019",
            address: {
              "@type": "PostalAddress",
              streetAddress: office.address,
              addressLocality: "Toshkent",
              addressCountry: "UZ",
            },
            sameAs: [contacts.telegram],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "BIS",
            inLanguage: locale,
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

/** Услуга — на продуктовых страницах. */
export function ServiceJsonLd({
  locale,
  name,
  description,
  path,
}: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType: "ERP implementation",
        url: absoluteUrl(locale, path),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Uzbekistan" },
      }}
    />
  );
}

/** Вопросы и ответы — только там, где они реально есть на странице. */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      }}
    />
  );
}

/** Хлебные крошки — повторяют то, что показано на странице. */
export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: SITE_URL + localePath(locale, item.path),
        })),
      }}
    />
  );
}

/** Статья блога. */
export function ArticleJsonLd({
  locale,
  title,
  description,
  slug,
  date,
  author,
}: {
  locale: Locale;
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        inLanguage: locale,
        author: { "@type": "Person", name: author },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: absoluteUrl(locale, `/blog/${slug}`),
      }}
    />
  );
}
