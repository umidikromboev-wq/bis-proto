import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BlogList } from "@/components/design/inner-views";

export default function Page() {
  return <BlogList />;
}

export const metadata: Metadata = pageMetadata("ru", "/blog");
