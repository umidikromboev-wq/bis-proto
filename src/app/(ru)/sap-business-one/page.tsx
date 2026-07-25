import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productB1 } from "@/content/product-b1";

export default function Page() {
  return (
    <>
      <ServiceJsonLd locale="ru" name={productB1.title} description={productB1.metaDescription} path="/sap-business-one" />
      <FaqJsonLd items={productB1.faq} />
      <ProductPageView data={productB1} />
    </>
  );
}

export const metadata: Metadata = pageMetadata("ru", "/sap-business-one");
