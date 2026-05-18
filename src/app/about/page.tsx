export const metadata = {
  title: "关于我 - MyHub",
  description: "了解 MyHub 博客作者的技术方向、写作主题和近期关注。",
};

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Git",
];

const experiences = [
  {
    title: "全栈开发工程师",
    period: "2022 - 至今",
    description: "参与企业级 Web 应用开发，主要负责前端架构设计和后端 API 开发。使用 Next.js、TypeScript 和 PostgreSQL 构建高性能应用。",
  },
  {
    title: "技术贡献者",
    period: "2020 - 2022",
    description: "在开源社区贡献代码，参与多个前端工具链项目。专注于开发体验优化和性能调优。",
  },
  {
    title: "实习开发",
    period: "2019 - 2020",
    description: "在初创公司实习，负责后台管理系统开发和内部工具搭建。这是职业旅程的起点。",
  },
];

const contacts = [
  {
    name: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com",
  },
  {
    name: "邮箱",
    value: "yourname@example.com",
    href: "mailto:yourname@example.com",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com",
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
              LY
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">林一鸣</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                一个热爱折腾的全栈开发者，相信好的工具能放大好想法。平时写代码、偶尔写博客，持续探索 Web 开发的边界。
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full bg-white/8 px-4 py-2">全栈开发</span>
                <span className="rounded-full bg-white/8 px-4 py-2">开源贡献</span>
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
          <h2 className="text-2xl font-semibold text-white">工作经历</h2>
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

        <section className="rounded-[28px] border border-white/8 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">联系方式</h2>
          <div className="mt-6 space-y-4">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 p-4 transition-colors hover:border-emerald-400/30 hover:bg-white/8"
              >
                <span className="text-sm font-medium text-slate-400">{contact.name}</span>
                <span className="text-base text-slate-200">{contact.value}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}