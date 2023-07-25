// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import asyncFs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";

type Blog = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

type GetBlogListResponse = {
  blogs: Blog[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBlogListResponse>
) {
  if (req.method === "GET") {
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
    const blogs: Blog[] = await Promise.all(
      markdownFiles.map(async (path) => {
        const fileContent = await asyncFs.readFile(path, "utf-8");

        const parsedContent = grayMatter(fileContent);
        return {
          slug: parsedContent.data.slug,
          title: parsedContent.data.title,
          summary: parsedContent.data.summary,
          date: parsedContent.data.date,
        };
      })
    );
    blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    res.status(200).json({ blogs });
  } else {
    res.status(405).end();
  }
}
