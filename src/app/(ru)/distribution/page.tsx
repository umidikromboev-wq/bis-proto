import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";
import { pageMetadata } from "@/lib/seo";

/** Отраслевая страница. Адрес /distribution сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="distribution" locale="ru" />;
}

export const metadata: Metadata = pageMetadata("ru", "/distribution");
