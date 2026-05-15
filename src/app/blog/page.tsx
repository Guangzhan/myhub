import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "博客 - MyHub",
  description: "记录项目、技术实践和产品思考。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-emerald-950/30 lg:p-12">
          <p className="text-sm font-medium text-emerald-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            博客文章
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            这里收集项目复盘、技术笔记和持续学习中的想法。
          </p>
        </section>

        <section className="grid gap-5">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[28px] border border-white/8 bg-white/5 p-6 transition-colors hover:border-emerald-300/35 hover:bg-white/8"
              >
                <article className="flex flex-col gap-3">
                  <time className="text-sm text-emerald-300" dateTime={post.date}>
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-emerald-100">
                    {post.title}
                  </h2>
                  <p className="max-w-3xl text-sm leading-6 text-slate-300">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))
          ) : (
            <div className="rounded-[28px] border border-white/8 bg-white/5 p-8 text-slate-300">
              暂时还没有文章。
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
