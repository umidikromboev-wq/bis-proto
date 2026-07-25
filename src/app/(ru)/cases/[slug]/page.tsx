import type { Metadata } from "next";
import { CaseView } from "@/components/design/inner-views";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";
import { pageMetadata } from "@/lib/seo";

const LOCALE = "ru" as const;

export function generateStaticParams() {
  return content(LOCALE).blocks.cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = content(LOCALE).blocks.cases.find((c) => c.slug === slug);
  if (!item) return pageMetadata(LOCALE, "/cases");
  return pageMetadata(LOCALE, `/cases/${slug}`, {
    title: `${item.client} — кейс внедрения SAP`,
    description: item.intro,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = content(LOCALE).blocks.cases.find((c) => c.slug === slug);
  const crumbs = content(LOCALE).blocks;
  return (
    <>
      {item ? (
        <BreadcrumbJsonLd
          locale={LOCALE}
          items={[
            { name: crumbs.nav[0].label, path: "/" },
            { name: crumbs.casesMeta.h2, path: "/cases" },
            { name: item.client, path: `/cases/${slug}` },
          ]}
        />
      ) : null}
      <CaseView slug={slug} locale={LOCALE} />
    </>
  );
}
