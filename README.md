[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-7C3AED?style=for-the-badge)](https://github.com/anthropics/claude-code)

# MyHub

MyHub 是一个基于 Next.js 14 构建的个人网站项目，包含首页、关于页、博客列表、博客详情等内容，用来展示个人经历、思考与持续输出。

这个项目的一个核心亮点是：**它不仅是一个作品集网站，也是一个完整的 Claude Code 协作实践样例**。除了业务代码本身，仓库还包含 `CLAUDE.md`、Skills、Hooks、工作流配置等内容，方便其他使用 Claude Code 的开发者 clone 后直接复用。

## 项目介绍

### 这是什么

MyHub 是一个面向招聘方、合作方和技术同行的个人站点，目标是把个人介绍、项目展示和博客写作统一到一个简洁、可持续维护的网站里。

### 为什么做

- 用一个真实可运行的项目沉淀个人品牌与技术表达
- 通过博客持续输出，提升内容可发现性与 SEO 表现
- 把 Claude Code 真正融入开发流程，而不是只把它当成一个聊天工具

### 亮点

- **Built with Claude Code**：项目开发、内容生成、工作流配置都围绕 Claude Code 协作展开
- **MDX 博客系统**：文章使用 MDX 编写，内容与组件能力可以自然结合
- **Next.js 14 App Router**：使用现代路由与渲染方案构建站点
- **Tailwind CSS**：保持样式开发简单、一致、响应式
- **Vercel 部署**：适合个人站点的快速发布与持续部署体验
- **Claude Code 可复用配置**：仓库自带 `CLAUDE.md`、Skills、Hooks、Subagents 使用约定

## 技术栈

- **Next.js 14**：站点框架与 App Router
- **Tailwind CSS**：页面样式与响应式布局
- **MDX**：博客内容编写与组件嵌入
- **Vercel**：部署与自动发布平台

补充依赖：

- **TypeScript**：类型安全
- **gray-matter**：解析文章 frontmatter
- **next-mdx-remote**：处理 MDX 内容

## 本地开发

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd myhub
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

启动后访问：

```text
http://localhost:3000
```

### 4. 常用命令

```bash
npm run dev    # 启动本地开发
npm run build  # 生产构建
npm run start  # 启动生产环境服务
npm run lint   # 运行 ESLint
```

## 项目结构

```text
myhub/
├── .claude/                 # Claude Code 配置、skills、hooks 等
├── .github/workflows/       # GitHub Actions 工作流
├── content/posts/           # 博客 MDX 文件
├── public/                  # 静态资源
├── src/app/                 # Next.js App Router 页面与布局
├── CLAUDE.md                # 项目级 Claude Code 指南
├── package.json             # 项目脚本与依赖
└── README.md                # 项目说明文档
```

目录说明：

- `src/app/`：页面、布局、路由入口
- `content/posts/`：博客文章内容，文件名按日期加 slug 命名
- `public/`：图片等静态资源
- `.github/workflows/`：CI、AI review 等自动化流程
- `.claude/`：Claude Code 的可复用配置目录
- `CLAUDE.md`：告诉 Claude Code 这个项目的约束、技术栈和协作方式

## Claude Code 配置说明

这是本项目非常重要的一部分。如果你也在使用 Claude Code，那么 clone 这个仓库后，很多协作能力都可以直接沿用。

### 1. `CLAUDE.md` 是什么

`CLAUDE.md` 是项目级说明文件，用来告诉 Claude Code：

- 这个项目是做什么的
- 使用了哪些技术栈
- 目录结构如何组织
- 哪些约束不能随意违反
- 代码和内容应该遵循什么规则

在这个项目里，`CLAUDE.md` 明确了例如：

- 使用 Next.js 14 + Tailwind
- 博客文章必须有 `title`、`date`、`description`
- 不允许随意修改 `next.config.mjs`
- 不引入额外 UI 库和状态管理库

这类信息非常适合放进 `CLAUDE.md`，因为它们会直接影响 Claude Code 的行为。

### 2. Skills 是什么

Skills 可以理解为“项目内可复用的专用命令能力”。

本项目的 `.claude/skills/` 下已经包含一些示例，例如：

- `new-post`：创建新的博客文章
- `review-post`：审查博客文章质量
- `deploy`：部署前检查
- `weekly-report`：基于 GitHub 活动生成周报

它们的意义是：把高频、重复、带上下文的任务封装起来，让 Claude Code 能更稳定地执行。

如果你 clone 这个仓库并安装使用 Claude Code，这些 Skills 也能一起被复用。

### 3. Hooks 是什么

Hooks 是 Claude Code 在特定时机自动执行的脚本，常用于把团队习惯固化下来。

本项目的 `.claude/hooks/` 中包含示例脚本，例如：

- `pre-write-check.sh`
- `post-format.sh`

你可以把 Hooks 理解为：

- 写入文件前做检查
- 写入后做格式化
- 在关键动作前后执行一些自动化逻辑

这让 Claude Code 不只是“会写”，而是“按这个仓库的规则写”。

### 4. Subagents 是什么

Subagents 是 Claude Code 用来拆分复杂任务的辅助代理机制。

例如在一个较复杂的任务里，主代理可以把不同子任务交给不同类型的子代理：

- 负责快速搜索代码的代理
- 负责规划实现方案的代理
- 负责内容审查的代理
- 负责 Claude Code / API 相关指导的代理

它的价值在于：

- 减少主上下文压力
- 让搜索、规划、执行分工更清晰
- 在复杂任务里更高效地并行处理信息

对于 clone 这个仓库的 Claude Code 用户来说，这意味着你不只是在复用代码，也是在复用一套已经成型的 AI 协作方式。

### 5. 为什么这个仓库适合 Claude Code 用户复用

如果你想把 Claude Code 真正用于项目开发，而不是偶尔问几个问题，这个仓库提供了一个很好的起点：

- 有明确的 `CLAUDE.md` 项目约束
- 有可直接运行的 Skills
- 有可继续扩展的 Hooks
- 有 GitHub Actions 自动化示例
- 有围绕内容生产和项目维护的真实使用场景

换句话说，**你 clone 下来的不只是一个个人网站，而是一套“Claude Code 驱动项目协作”的样板工程**。

## 部署说明

本项目部署在 **Vercel**。

推荐部署方式：

1. 将仓库导入 Vercel
2. 设置主分支为 `main`
3. 之后每次 push 到 `main`，Vercel 会自动触发部署

如果项目需要环境变量，可以在 Vercel 项目设置中配置。

## License

This project is licensed under the MIT License.
