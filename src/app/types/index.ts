export interface PostCategory {
  slug: string;
  name: string;
  description: string;
}

export interface PostTag {
  slug: string;
  name: string;
}

export interface FullPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: PostCategory;
  tags: PostTag[];
  imageUrl: string;
}

export interface PostMeta {
  generatedAt: string;
  seed: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PostsApiResponse {
  posts: FullPost[];
  pagination: Pagination;
  meta: PostMeta;
}

export interface SinglePostApiResponse {
  post: FullPost;
  meta: {
    generatedAt: string;
    seed: string;
  };
}