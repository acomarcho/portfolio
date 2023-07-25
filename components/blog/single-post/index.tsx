import { BlogPost } from "@/lib/constants/blog";
import { convertISOStringToEnUS } from "@/lib/utils/date";

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
      <h1 className="heading font-bold">{blogPost.title}</h1>
      <p className="date">{convertISOStringToEnUS(blogPost.date)}</p>
    </div>
  );
}
