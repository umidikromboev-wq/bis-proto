import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/shell";
import { PostView } from "@/components/blog-views";
import { getPost, posts } from "@/content/blog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Статья не найдена · BIS" };
  return { title: `${post.title} · Блог BIS`, description: post.excerpt };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <PostView post={post} />
    </SiteShell>
  );
}
