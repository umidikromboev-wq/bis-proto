import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { WorkingCapitalCalculator } from "@/components/design/calculator/working-capital";
import "@/components/design/page-hero.css";

export default function Page() {
  return (
    <div className="d-wrap" style={{ paddingBlock: "calc(var(--nav-h) + 2rem) var(--section-y)" }}>
      <WorkingCapitalCalculator  locale="uz" />
    </div>
  );
}

export const metadata: Metadata = pageMetadata("uz", "/simulator");
