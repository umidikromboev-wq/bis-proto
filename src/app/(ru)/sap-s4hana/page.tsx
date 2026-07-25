import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productS4 } from "@/content/product-s4";

export default function Page() {
  return (
    <>
      <ServiceJsonLd locale="ru" name={productS4.title} description={productS4.metaDescription} path="/sap-s4hana" />
      <FaqJsonLd items={productS4.faq} />
      <ProductPageView data={productS4} />
    </>
  );
}

export const metadata: Metadata = pageMetadata("ru", "/sap-s4hana");
