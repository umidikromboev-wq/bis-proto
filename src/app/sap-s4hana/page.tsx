import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ProductPageView } from "@/components/product-page";
import { productS4 } from "@/content/product-s4";

export const metadata: Metadata = {
  title: `${productS4.title} — внедрение для холдингов · BIS`,
  description: productS4.metaDescription,
};

export default function Page() {
  return (
    <SiteShell>
      <ProductPageView data={productS4} />
    </SiteShell>
  );
}
