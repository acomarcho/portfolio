import { BlogMetadata } from "@/lib/constants/blog";
import Link from "next/link";
import { convertISOStringToEnUS } from "@/lib/utils/date";
import { Fade } from "react-awesome-reveal";

export default function Blogs({ blogs }: { blogs: BlogMetadata[] }) {
  return (
    <div className="wrapper min-h-[calc(100vh-4rem)]">
      <Fade>
        <div className="relative w-fit">
          <div className="absolute w-full bg-primary h-[0.5rem] bottom-[0.5rem]" />
          <h1 className="relative heading font-bold">{"Marcho's Blog"}</h1>
        </div>
        <p className="paragraph italic">
          Stories and other blog posts: Where imagination meets connection.
        </p>
        <div className="flex flex-col gap-[1rem] mt-[1rem]">
          <Fade>
            {blogs.map((blog) => {
              return (
                <div
                  className="p-[1rem] bg-lightgray drop-shadow-lg"
                  key={blog.slug}
                >
                  <p className="date">{convertISOStringToEnUS(blog.date)}</p>
                  <h1 className="heading font-bold mt-[0.5rem]">
                    {blog.title}
                  </h1>
                  <p className="paragraph mt-[0.5rem]">{blog.summary}</p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="button-primary hover mt-[0.5rem]"
                  >
                    Read post
                  </Link>
                </div>
              );
            })}
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
