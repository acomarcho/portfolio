// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetBlogListResponse } from "@/lib/constants/blog";
import { readAllBlogs } from "@/lib/api/blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBlogListResponse>
) {
  if (req.method === "GET") {
    try {
      const blogs = await readAllBlogs();
      res.status(200).json({ blogs });
    } catch {
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
