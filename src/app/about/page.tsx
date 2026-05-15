export const metadata = {
  title: "关于我 - MyHub",
  description: "了解 MyHub 博客作者的技术方向、写作主题和近期关注。",
};

const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Python", "Git", "内容写作"];

const experiences = [
  {
    title: "项目实践",
    period: "持续更新",
    description: "围绕个人站点、前端工程和内容系统做小步迭代，把过程整理成可复用的经验。",
  },
  {
    title: "技术学习",
    period: "长期投入",
    description: "关注 Web 开发、工具链、AI 辅助编程和产品体验，在真实项目里验证想法。",
  },
  {
    title: "写作复盘",
    period: "每周整理",
    description: "把踩坑、方案选择和阶段性收获写下来，让博客成为自己的第二工作台。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-[28px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-emerald-950/30 lg:p-12">
          <p className="text-sm font-medium text-emerald-300">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">关于我</h1>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-300 text-3xl font-semibold text-slate-950">
              MH
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">MyHub 的作者</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                我把这里当作个人知识库和项目日志，主要记录前端开发、博客搭建、问题排查和学习过程。相比一次性写成完美答案，我更喜欢把真实路径保存下来，方便以后回看和继续迭代。
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full bg-white/8 px-4 py-2">前端开发</span>
                <span className="rounded-full bg-white/8 px-4 py-2">技术写作</span>
                <span className="rounded-full bg-white/8 px-4 py-2">AI 辅助编程</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-white/8 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">常用技能</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-white/8 px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-white/8 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">近期关注</h2>
          <div className="mt-6 space-y-6">
            {experiences.map((item) => (
              <div key={item.title} className="relative border-l-2 border-emerald-400/30 pl-6 last:border-l-transparent">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-slate-400">{item.period}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
