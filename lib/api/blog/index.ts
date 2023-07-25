import fs from "fs";
import asyncFs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";
import { BlogMetadata } from "@/lib/constants/blog";

export const readAllBlogs = async () => {
  // Crawl markdown files
  const markdownFiles: string[] = [];

  const crawlFolderForMarkdownFiles = (folderPath: string) => {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      if (fs.lstatSync(filePath).isDirectory()) {
        crawlFolderForMarkdownFiles(filePath);
      } else {
        if (path.extname(file).toLowerCase() === ".md") {
          markdownFiles.push(filePath);
        }
      }
    }
  };

  crawlFolderForMarkdownFiles(path.resolve("./public", "blog"));

  // Read the actual markdown file
  const blogs: BlogMetadata[] = await Promise.all(
    markdownFiles.map(async (path) => {
      const fileContent = await asyncFs.readFile(path, "utf-8");

      const parsedContent = grayMatter(fileContent);
      return {
        slug: parsedContent.data.slug,
        title: parsedContent.data.title,
        summary: parsedContent.data.summary,
        date: parsedContent.data.date.toISOString(),
      };
    })
  );
  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
};
