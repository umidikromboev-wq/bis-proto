import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";
import { pageMetadata } from "@/lib/seo";

/** Отраслевая страница. Адрес /retail-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="retail-trade" locale="ru" />;
}

export const metadata: Metadata = pageMetadata("ru", "/retail-trade");
