import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { BlogIndex } from "@/components/blog-views";

export const metadata: Metadata = {
  title: "Блог о внедрении ERP · BIS",
  description: "Материалы о выборе и внедрении ERP: почему проекты проваливаются, SAP или 1С, из чего складывается бюджет внедрения.",
};

export default function Page() {
  return (
    <SiteShell>
      <BlogIndex />
    </SiteShell>
  );
}
