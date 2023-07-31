import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { BlogMetadata } from "@/lib/constants/blog";
import { readAllBlogs } from "@/lib/api/blog";
import Portfolio from "@/components/portfolio";
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
        <title>{"Marcho's Portfolio"}</title>
        <meta
          name="description"
          content="Marcho's works: from professional to self projects."
        />
      </Head>
      <Navbar />
      <NavMargin />
      <Portfolio />
    </>
  );
}
