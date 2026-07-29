import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CareersView } from "@/components/design/extra-views";

export default function Page() {
  return <CareersView />;
}

export const metadata: Metadata = pageMetadata("ru", "/vacancy");
