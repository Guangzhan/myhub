#!/usr/bin/env node

/**
 * new-post skill
 * Creates a new blog post with given title
 *
 * Usage: node new-post.js "文章标题"
 */

const fs = require('fs');
const path = require('path');

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w一-龥-]/g, '');
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function createPost(title) {
  const slug = generateSlug(title);
  const date = formatDate(new Date());
  const filename = `${date}-${slug}.mdx`;
  const filepath = path.join('content', 'posts', filename);

  const content = `---
title: ${title}
date: ${date}
description:
---

# ${title}
`;

  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`文件已创建: content/posts/${filename}`);
}

const title = process.argv[2];
if (!title) {
  console.error('请提供文章标题: node new-post.js "标题"');
  process.exit(1);
}

createPost(title);