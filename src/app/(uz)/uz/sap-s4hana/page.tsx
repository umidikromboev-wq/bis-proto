import type { Metadata } from "next";
import { ProductPageView } from "@/components/design/product-page";
import { productS4 } from "@/content/uz/product-s4";

export const metadata: Metadata = {
  title: `${productS4.title} — Oʻzbekistonda joriy etish · BIS`,
  description: productS4.metaDescription,
};

export default function Page() {
  return <ProductPageView data={productS4} locale="uz" />;
}
