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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{"Marcho's Blog"}</title>
      </Head>
      <Navbar />
      <NavMargin />
      <p>{JSON.stringify(blogPost)}</p>
    </>
  );
}
