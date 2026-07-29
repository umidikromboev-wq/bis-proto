import type { Metadata } from "next";
import { ServicesView } from "@/components/design/company-views";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";
import { pageMetadata } from "@/lib/seo";

/** Адрес /services сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  const p = content("ru").servicesPage;
  return (
    <>
      <ServiceJsonLd locale="ru" name={p.h1} description={p.lead} path="/services" />
      <ServicesView locale="ru" />
    </>
  );
}

export const metadata: Metadata = pageMetadata("ru", "/services");
