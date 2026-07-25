import { CaseView } from "@/components/design/inner-views";
import { cases } from "@/content/blocks";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseView slug={slug} />;
}
