import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { BlogMetadata } from "@/lib/constants/blog";
import { readAllBlogs } from "@/lib/api/blog";
import Blogs from "@/components/blog";
import Navbar, { NavMargin } from "@/components/common/navbar";

export const getStaticProps: GetStaticProps<{
  blogs: BlogMetadata[];
}> = async () => {
  const blogs = await readAllBlogs();
  return { props: { blogs } };
};

export default function BlogPage({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{"Marcho's Blog"}</title>
        <meta name="description" content="I write about all the things I like!" />
      </Head>
      <Navbar />
      <NavMargin />
      <Blogs blogs={blogs} />
    </>
  );
}
