import type { Metadata } from "next";
import { AboutView } from "@/components/design/company-views";
import { pageMetadata } from "@/lib/seo";

/** Адрес /aboutus сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  return <AboutView locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/aboutus");
