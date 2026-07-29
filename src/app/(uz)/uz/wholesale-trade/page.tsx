import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";
import { pageMetadata } from "@/lib/seo";

/** Отраслевая страница. Адрес /wholesale-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="wholesale-trade" locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/wholesale-trade");
