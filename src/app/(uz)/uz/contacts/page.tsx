import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactsView } from "@/components/design/inner-views";

export default function Page() {
  return <ContactsView  locale="uz" />;
}

export const metadata: Metadata = pageMetadata("uz", "/contacts");
