import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { AcademyView } from "@/components/design/extra-views";

export default function Page() {
  return <AcademyView  locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/academy");
