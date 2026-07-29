import type { Metadata } from "next";
import { ServicesView } from "@/components/design/company-views";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";
import { pageMetadata } from "@/lib/seo";

/** Адрес /services сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  const p = content("uz").servicesPage;
  return (
    <>
      <ServiceJsonLd locale="uz" name={p.h1} description={p.lead} path="/services" />
      <ServicesView locale="uz" />
    </>
  );
}

export const metadata: Metadata = pageMetadata("uz", "/services");
