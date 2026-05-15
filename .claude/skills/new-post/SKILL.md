---
name: new-post
description: Create a new MyHub blog post MDX file with generated filename, frontmatter, and matching heading.
---

# new-post Skill

Create a new blog post in the MyHub project.

## Usage

`/new-post [标题]`

## What it does

1. Takes the provided title and generates a slug from it
2. Creates filename in format: `YYYY-MM-DD-slug.mdx`
3. Creates the file at `content/posts/[filename].mdx`
4. Generates frontmatter with title, date (today's date), and description placeholder
5. Adds an H1 heading matching the title
6. Reports the file path to the user

## Implementation

```typescript
// 1. Generate slug from title:
//    - If title contains Chinese: translate to short English or use pinyin
//    - Lowercase, spaces to hyphens, remove characters not matching `[a-z0-9-]`
//    - Prefer concise English translations for Chinese titles
// 2. Get today's date in YYYY-MM-DD format
// 3. filename = `YYYY-MM-DD-${slug}.mdx`
// 4. Write file with:
//    ---
//    title: [title]
//    date: YYYY-MM-DD
//    description: <!-- 请补充文章简介 -->
//    ---
//
//    # [title]
// 5. Report: `文件已创建: content/posts/[filename].mdx`
```

## Notes

- Slug generation: for Chinese titles, prefer short English translation; fallback to pinyin
- The description field uses `<!-- 请补充文章简介 -->` as placeholder so list page knows content is missing
- The H1 heading matches the title exactly