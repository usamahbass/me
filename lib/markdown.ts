import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CoretanItem, CoretanMeta, EksperimenItem, EksperimenMeta } from "@/types";

const coretanDirectory = path.join(process.cwd(), "contents/coretan");
const eksperimenDirectory = path.join(process.cwd(), "contents/eksperimen");

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 180;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes}`;
}

export function getAllCoretan(): CoretanMeta[] {
  if (!fs.existsSync(coretanDirectory)) return [];

  const fileNames = fs.readdirSync(coretanDirectory);
  const allCoretan = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(coretanDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        title: data.title || "",
        slug: data.slug || fileName.replace(/\.md$/, ""),
        date: data.date || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        thumbnail: data.thumbnail || "",
        edit: data.edit || "",
        spoiler: data.spoiler || "",
        readingTime: calculateReadingTime(content),
      } as CoretanMeta;
    });

  return allCoretan;
}

export function getCoretanBySlug(slug: string): CoretanItem | null {
  try {
    const fullPath = path.join(coretanDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "",
      slug: data.slug || slug,
      date: data.date || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      thumbnail: data.thumbnail || "",
      edit: data.edit || "",
      spoiler: data.spoiler || "",
      readingTime: calculateReadingTime(content),
      content,
    };
  } catch {
    return null;
  }
}

export function getRelatedCoretan(currentSlug: string, tags: string[], limit = 2): CoretanMeta[] {
  const all = getAllCoretan();
  return all
    .filter((item) => item.slug !== currentSlug)
    .filter((item) => item.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const all = getAllCoretan();
  const tagsSet = new Set<string>();
  all.forEach((item) => {
    item.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
}

export function getAllEksperimen(): EksperimenMeta[] {
  if (!fs.existsSync(eksperimenDirectory)) return [];

  const fileNames = fs.readdirSync(eksperimenDirectory);
  const allEksperimen = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(eksperimenDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title || "",
        slug: data.slug || fileName.replace(/\.md$/, ""),
        date: data.date || "",
        demo: data.demo || null,
        source_code: data.source_code || null,
        thumbnail: data.thumbnail || "",
        spoiler: data.spoiler || "",
        tech: data.tech || [],
      } as EksperimenMeta;
    });

  return allEksperimen;
}

export function getEksperimenBySlug(slug: string): EksperimenItem | null {
  try {
    const fullPath = path.join(eksperimenDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "",
      slug: data.slug || slug,
      date: data.date || "",
      demo: data.demo || null,
      source_code: data.source_code || null,
      thumbnail: data.thumbnail || "",
      spoiler: data.spoiler || "",
      tech: data.tech || [],
      content,
    };
  } catch {
    return null;
  }
}
