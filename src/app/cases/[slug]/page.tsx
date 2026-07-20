import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/shell";
import { CaseView } from "@/components/case-views";
import { cases } from "@/content/blocks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) return { title: "Кейс не найден · BIS" };
  return {
    title: `${item.client} — кейс внедрения SAP · BIS`,
    description: item.intro,
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();

  return (
    <SiteShell>
      <CaseView item={item} />
    </SiteShell>
  );
}
