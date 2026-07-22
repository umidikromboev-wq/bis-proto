import type { Metadata } from "next";
import { ProductPageView } from "@/components/design/product-page";
import { productB1 } from "@/content/product-b1";

export const metadata: Metadata = {
  title: `${productB1.title} — внедрение в Узбекистане · BIS`,
  description: productB1.metaDescription,
};

export default function Page() {
  return <ProductPageView data={productB1} />;
}
