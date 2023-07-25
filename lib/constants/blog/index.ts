export type BlogMetadata = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export type GetBlogListResponse = {
  blogs: BlogMetadata[];
};
