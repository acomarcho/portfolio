import Head from "next/head";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { BlogPost } from "@/lib/constants/blog";
import { readOneBlog } from "@/lib/api/blog";
import { readAllBlogs } from "@/lib/api/blog";
import Navbar, { NavMargin } from "@/components/common/navbar";
import SinglePost from "@/components/blog/single-post";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await readAllBlogs();

  return {
    paths: blogs.map((metadata) => {
      return {
        params: {
          slug: metadata.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  blogPost: BlogPost;
  success: boolean;
}> = async ({ params }) => {
  try {
    const slug = params!.slug as string;
    const blogPost = await readOneBlog(slug);
    return { props: { blogPost, success: true } };
  } catch {
    return {
      props: {
        blogPost: { slug: "", title: "", summary: "", date: "", content: "" },
        success: false,
      },
    };
  }
};

export default function BlogPage({
  blogPost,
  success,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{success ? blogPost.title : "Post not found"}</title>
        <meta name="description" content={blogPost && blogPost.summary} />
      </Head>
      <Navbar />
      <NavMargin />
      <SinglePost blogPost={blogPost} success={success} />
    </>
  );
}
