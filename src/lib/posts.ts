import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const postFilePattern = /^(\d{4}-\d{2}-\d{2})-(.+)\.mdx$/;

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
};

export type Post = PostSummary & {
  content: string;
};

function assertStringField(
  data: Record<string, unknown>,
  field: keyof PostFrontmatter,
  fileName: string,
) {
  if (typeof data[field] !== "string" || data[field].trim() === "") {
    throw new Error(`Post ${fileName} must include a non-empty ${field} frontmatter field.`);
  }
}

function readDateField(data: Record<string, unknown>, fileName: string) {
  const value = data.date;

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  assertStringField(data, "date", fileName);
  return value as string;
}

function parsePostFileName(fileName: string) {
  const match = fileName.match(postFilePattern);

  if (!match) {
    throw new Error(`Post file ${fileName} must match YYYY-MM-DD-slug.mdx.`);
  }

  return {
    date: match[1],
    slug: match[2],
  };
}

function parsePostFile(fileName: string): Post {
  const { date: fileDate, slug } = parsePostFileName(fileName);
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Record<string, unknown>;

  assertStringField(frontmatter, "title", fileName);
  assertStringField(frontmatter, "description", fileName);

  const postDate = readDateField(frontmatter, fileName);

  if (Number.isNaN(Date.parse(postDate))) {
    throw new Error(`Post ${fileName} has an invalid date frontmatter value.`);
  }

  if (!postDate.startsWith(fileDate)) {
    throw new Error(`Post ${fileName} date must match its filename date prefix.`);
  }

  return {
    slug,
    title: frontmatter.title as string,
    date: postDate,
    description: frontmatter.description as string,
    content,
  };
}

export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(parsePostFile)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
    }));
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileName = fs
    .readdirSync(postsDirectory)
    .find((name) => name.endsWith(".mdx") && parsePostFileName(name).slug === slug);

  if (!fileName) {
    return null;
  }

  return parsePostFile(fileName);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
