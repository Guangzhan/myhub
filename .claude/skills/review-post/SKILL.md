---
name: review-post
description: Review a MyHub blog post MDX file and produce a structured quality report with scoring.
---

# review-post Skill

Review a blog post and provide a quality report with scoring.

## Usage

`/review-post [文章文件名或完整路径]`

## Parameters

- `文章文件路径`: 可以只给文件名（如 `2026-05-13-claude-code-guide.mdx`），会自动在 `content/posts/` 目录查找；也可以给完整路径

## What it does

1. Reads the MDX file from `content/posts/` or uses the provided path
2. Analyzes the post across 5 dimensions
3. Outputs a structured quality report

## Review Dimensions

### 1. 标题 (Title)
- Length: should be 10-60 characters
- Attractiveness: does it make readers want to click?
- SEO keywords: does it contain searchable terms?

### 2. Frontmatter Completeness
- `title`: must exist and not be empty
- `date`: must exist in YYYY-MM-DD format
- `description`: must exist and not be the placeholder `<!-- 请补充文章简介 -->`

### 3. 正文结构 (Content Structure)
- Has reasonable H2/H3 headings to split content into sections
- Paragraph length: paragraphs should not be too long (max ~150 words)
- Has a clear introduction and conclusion

### 4. 错别字和基本语法 (Spelling & Grammar)
- Check for common Chinese typos
- Check for obvious grammatical errors
- Note: not a full grammar checker, just basic checks

### 5. 链接有效性 (Link Validity)
- Check format only (not whether they're accessible)
- Valid URL format: `[text](https://...)` or `[text](/path)`
- Email links: `mailto:` format
- Internal links should use relative paths or `@/` alias

## Output Format

```markdown
## 博客审查报告: [文件名]

### 严重问题 (Must Fix)
- ...

### 一般问题 (Suggested Fix)
- ...

### 做得好的地方 (Strengths)
- ...

### 总体评分: X/10

---

## 详细评分

| 维度 | 得分 | 说明 |
|------|------|------|
| 标题 | X/10 | ... |
| Frontmatter | X/10 | ... |
| 正文结构 | X/10 | ... |
| 错别字/语法 | X/10 | ... |
| 链接格式 | X/10 | ... |
```

## Important Constraints

- **只读工具**: 此 Skill 只能读取文件，不能修改任何内容
- 禁止使用 Edit/Write 等写入工具
- 如需修改文章，请告知用户手动修改或提供新的 Skill

## Implementation

```typescript
// 1. Resolve file path:
//    - If path contains / or \, use as-is
//    - Otherwise, treat as filename and prepend `content/posts/`
// 2. Read file content
// 3. Parse frontmatter (title, date, description)
// 4. Analyze content against each dimension
// 5. Output structured report
```

## Notes

- 评分标准: 8-10 = 优秀, 6-7 = 良好, 4-5 = 一般, <4 = 需大幅改进
- 每个维度至少给出一条具体反馈
- "做得好的地方" 必须至少写 1 条，即使整体评分不高
- 链接检查只验证格式，不尝试访问 URL