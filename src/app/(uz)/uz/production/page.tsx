import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";
import { pageMetadata } from "@/lib/seo";

/** Отраслевая страница. Адрес /production сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="production" locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/production");
