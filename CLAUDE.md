# MyHub Project

## 1. 项目概述

MyHub 是一个个人网站，包含首页、关于我、博客列表、博客详情、项目展示五个页面。博客内容用 MDX 编写，支持组件嵌入。最终部署到 Vercel。

## 2. 技术栈

- **框架**: Next.js 14.2.35
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3.4.1
- **代码检查**: ESLint 8
- **React**: 18
- **路径别名**: `@/*` -> `./src/*`

## 3. 项目结构

```
myhub/
├── src/
│   └── app/
│       ├── fonts/           # 本地字体文件
│       ├── globals.css      # 全局样式
│       ├── layout.tsx       # 根布局
│       ├── page.tsx         # 首页
│       └── favicon.ico
├── public/
│   └── images/              # 图片资源 (需手动创建)
├── content/
│   └── posts/               # 博客 MDX 文件 (需手动创建)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .eslintrc.json
└── package.json
```

## 4. 常用命令

```bash
npm run dev    # 启动开发服务器 (http://localhost:3000)
npm run build  # 生产构建
npm run start  # 启动生产服务器
npm run lint   # 运行 ESLint 检查
```

## 5. 代码规范

1. 组件文件用 PascalCase (BlogCard.tsx)
2. hooks 用 use 开头 (useBlogPosts.ts)
3. 页面放在 src/app/ 目录下，遵循 App Router 约定
4. 博客文章放在 content/posts/ 目录，文件名格式: `YYYY-MM-DD-slug.mdx`
5. 样式统一用 Tailwind，禁止 inline style 和 CSS Modules；`globals.css` 仅限放 `@tailwind` 指令和 CSS 变量，不可添加其他样式
6. 图片放在 public/images/（需手动创建目录），用 next/image 组件引用；引用 public 目录图片时使用相对路径，如 `src="/images/xxx.jpg"`
7. 布局文件统一用 layout.tsx，嵌套布局按目录层级组织

## 6. 重要约束

**违反前必须告知我：**

- 禁止修改 next.config.mjs（任何配置改动需要我确认）
- 禁止引入除 Tailwind 之外的 UI 库（Ant Design、MUI 等）
- 禁止引入状态管理库（Redux、Zustand、Jotai 等），本项目简单到不需要这些
- 禁止硬编码任何密钥或 API 地址，统一用 .env.local
- 博客文章的 frontmatter 必须包含 title、date、description 三个字段

## 7. 业务背景

- 这是个人作品集性质的网站，访问者主要是招聘方、合作方
- SEO 很重要（希望能搜到这个网站）
- 响应式设计是必需的（桌面和移动端都要好看）
- 博客文章按时间倒序展示，最新的在最前面
