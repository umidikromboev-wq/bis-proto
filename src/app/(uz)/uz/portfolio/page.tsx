import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CasesList } from "@/components/design/inner-views";

export default function Page() {
  return <CasesList  locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/portfolio");
