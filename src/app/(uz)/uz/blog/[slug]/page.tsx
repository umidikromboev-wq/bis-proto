import type { Metadata } from "next";
import { PostView } from "@/components/design/inner-views";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";
import { pageMetadata } from "@/lib/seo";

const LOCALE = "uz" as const;

export function generateStaticParams() {
  return content(LOCALE).blog.posts.map((p) => ({ slug: p.slug }));
}

/** Заголовок и описание берутся из самой статьи — отдельного справочника им не нужно. */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = content(LOCALE).blog.getPost(slug);
  if (!post) return pageMetadata(LOCALE, "/blog");
  return pageMetadata(LOCALE, `/blog/${slug}`, {
    title: post.title,
    description: post.excerpt,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = content(LOCALE).blog.getPost(slug);
  return (
    <>
      {post ? (
        <ArticleJsonLd
          locale={LOCALE}
          title={post.title}
          description={post.excerpt}
          slug={post.slug}
          date={post.date}
          author={post.author}
        />
      ) : null}
      <PostView slug={slug} locale={LOCALE} />
    </>
  );
}
