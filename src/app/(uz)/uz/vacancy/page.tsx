import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CareersView } from "@/components/design/extra-views";

export default function Page() {
  return <CareersView  locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/vacancy");
