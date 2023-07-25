import { BlogPost } from "@/lib/constants/blog";
import { convertISOStringToEnUS } from "@/lib/utils/date";
import MarkdownRenderer from "./markdown-renderer";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function SinglePost({
  blogPost,
  success,
}: {
  blogPost: BlogPost;
  success: boolean;
}) {
  if (!success) {
    return (
      <div className="wrapper min-h-[calc(100vh-4rem)]">
        <h1 className="heading font-bold">Oops! Blog post not found!</h1>
      </div>
    );
  }

  return (
    <div className="wrapper min-h-[calc(100vh-4rem)]">
      <Fade>
        <h1 className="heading font-bold">{blogPost.title}</h1>
        <p className="date">{convertISOStringToEnUS(blogPost.date)}</p>
        <div className="bg-lightgray p-[1rem] mt-[1rem] drop-shadow-xl">
          <MarkdownRenderer>{blogPost.content}</MarkdownRenderer>
        </div>
        <Link href="/blog" className="button-primary mt-[1rem] mx-auto !w-full">
          Read more blog posts
        </Link>
      </Fade>
    </div>
  );
}
