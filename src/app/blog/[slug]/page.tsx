import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "文章未找到 - MyHub",
    };
  }

  return {
    title: `${post.title} - MyHub`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <article className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-emerald-950/30 lg:p-12">
          <Link
            href="/blog"
            className="text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-100"
          >
            返回博客列表
          </Link>
          <time className="mt-8 block text-sm text-slate-400" dateTime={post.date}>
            {formatPostDate(post.date)}
          </time>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            {post.description}
          </p>
        </header>

        <div className="prose prose-invert prose-emerald max-w-none rounded-[28px] border border-white/8 bg-white/5 p-8 prose-headings:text-white prose-p:text-slate-300 prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-200 prose-pre:border prose-pre:border-white/8 prose-pre:bg-slate-950 lg:p-10">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
