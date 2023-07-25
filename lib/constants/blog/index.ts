export type BlogMetadata = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export type GetBlogListResponse = {
  blogs: BlogMetadata[];
};

export type BlogPost = BlogMetadata & {
  content: string;
};

export type GetOneBlogPostResponse = BlogPost;
