import type { NextApiRequest, NextApiResponse } from "next";
import { GetOneBlogPostResponse } from "@/lib/constants/blog";
import { readOneBlog } from "@/lib/api/blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetOneBlogPostResponse>
) {
  if (req.method === "GET") {
    try {
      const { slug } = req.query;
      const blogPost = await readOneBlog(slug as string);
      res.status(200).json({ ...blogPost });
    } catch {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
  }
}
