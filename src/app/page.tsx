import Image from "next/image";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

const categories = [
  { name: "项目复盘", description: "记录从需求、实现到上线后的思考。" },
  { name: "技术笔记", description: "整理框架、工具和工程化实践。" },
  { name: "学习札记", description: "沉淀读书、课程和日常探索。" },
  { name: "产品观察", description: "收集界面、体验和信息架构灵感。" },
];

const carouselItems = [
  {
    title: "搭建 MyHub 博客",
    subtitle: "从静态页面到内容驱动站点",
    image: "/images/myhub-logo.svg",
  },
  {
    title: "页面加载问题复盘",
    subtitle: "一次围绕 TSX、编码和导航状态的排查",
    image: "/images/monitor.svg",
  },
  {
    title: "个人站点的信息架构",
    subtitle: "让首页、关于页和博客拥有清晰路径",
    image: "/images/tasks.svg",
  },
];

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0];
  const featuredPosts = posts.slice(0, 3);
  const sidePosts = posts.slice(1, 5);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[28px] border border-emerald-400/20 bg-slate-900 shadow-2xl shadow-emerald-950/25">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(14,165,233,0.12),rgba(15,23,42,0.92))]" />
              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="space-y-5">
                  <p className="text-sm font-medium text-emerald-300">个人博客 · 技术记录 · 项目复盘</p>
                  <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    在 MyHub 记录代码、产品与持续学习的现场。
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    这里整理项目搭建过程、技术问题复盘和个人成长笔记，让每一次尝试都能被看见、被复用。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={latestPost ? `/blog/${latestPost.slug}` : "/blog"}
                    className="rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-200"
                  >
                    阅读最新文章
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-100 transition-colors hover:bg-white/8"
                  >
                    关于我
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/8 bg-white/[0.03] p-4 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0">
              {carouselItems.map((item, index) => (
                <article
                  key={item.title}
                  className="grid min-h-28 grid-cols-[88px_1fr] gap-4 rounded-2xl border border-white/8 bg-slate-950/55 p-3"
                >
                  <div className="flex items-center justify-center rounded-xl bg-white/8 p-3">
                    <Image src={item.image} alt="" width={90} height={70} className="h-auto max-h-16 w-auto" />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center gap-1">
                    <span className="text-xs text-emerald-300">精选 {index + 1}</span>
                    <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                    <p className="text-xs leading-5 text-slate-400">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-emerald-300">Latest Posts</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">最新文章</h2>
              </div>
              <Link href="/blog" className="text-sm text-slate-300 transition-colors hover:text-white">
                查看全部
              </Link>
            </div>

            {featuredPosts.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-3">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-[24px] border border-white/8 bg-white/5 p-5 transition-colors hover:border-emerald-300/35 hover:bg-white/8"
                  >
                    <article className="flex h-full flex-col gap-4">
                      <time className="text-sm text-emerald-300" dateTime={post.date}>
                        {formatPostDate(post.date)}
                      </time>
                      <h3 className="text-lg font-semibold leading-7 text-white group-hover:text-emerald-100">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-6 text-slate-300">{post.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[24px] border border-white/8 bg-white/5 p-8 text-slate-300">
                暂时还没有文章。
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category.name} className="rounded-[22px] border border-white/8 bg-slate-900/70 p-5">
                  <h3 className="text-base font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[24px] border border-white/8 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">站点简介</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                MyHub 是我的个人内容中心，用来保存技术实践、项目过程和阶段性复盘。
              </p>
            </section>

            <section className="rounded-[24px] border border-white/8 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">近期更新</h2>
              <div className="mt-4 space-y-4">
                {sidePosts.length > 0 ? (
                  sidePosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b border-white/8 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm font-medium leading-6 text-slate-100">{post.title}</p>
                      <time className="mt-1 block text-xs text-slate-500" dateTime={post.date}>
                        {formatPostDate(post.date)}
                      </time>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">更多内容正在整理中。</p>
                )}
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
