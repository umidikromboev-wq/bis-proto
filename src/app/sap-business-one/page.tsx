import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ProductPageView } from "@/components/product-page";
import { productB1 } from "@/content/product-b1";

export const metadata: Metadata = {
  title: `${productB1.title} — внедрение в Узбекистане · BIS`,
  description: productB1.metaDescription,
};

export default function Page() {
  return (
    <SiteShell>
      <ProductPageView data={productB1} />
    </SiteShell>
  );
}
