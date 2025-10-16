import { cache } from "react";
import type { PostsApiResponse, FullPost, SinglePostApiResponse, Pagination, PostMeta } from "@/app/types"; 

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
  throw new Error("Variável de ambiente NEXT_PUBLIC_API_BASE_URL não definida.");
}

async function fetchApi<T>(endpoint: string): Promise<T | null> {
  const url = `${API_URL}/api/posts${endpoint}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`Falha ao buscar dados de ${url}. Status: ${res.status}`);
    }
    return res.json() as Promise<T>;
  } catch (error) {
    console.error("Erro no serviço de posts:", error);
    return null;
  }
}

const defaultPagination: Pagination = {
  currentPage: 1,
  totalPages: 1,
  totalPosts: 0,
  postsPerPage: 6,
  hasNextPage: false,
  hasPreviousPage: false,
};

const defaultMeta: PostMeta = {
    generatedAt: new Date().toISOString(),
    seed: 'fallback-data',
};


export const getPostsByCategory = cache(async (categorySlug: string): Promise<FullPost[]> => {
  const data = await fetchApi<PostsApiResponse>(`/category/${categorySlug}`);
  return data?.posts || [];
});

export const getPosts = cache(
  async (page: number = 1, limit: number = 9): Promise<PostsApiResponse> => {
    const data = await fetchApi<PostsApiResponse>(`?page=${page}&limit=${limit}`);
    
    return data || { 
      posts: [], 
      pagination: defaultPagination, 
      meta: defaultMeta 
    };
  }
);

export const getAllPosts = cache(async (): Promise<FullPost[]> => {
  const firstPage = await getPosts(1, 9);
  if (!firstPage?.pagination?.totalPages) return [];

  const totalPages = firstPage.pagination.totalPages;
  let allPosts = firstPage.posts;

  if (totalPages > 1) {
    const pagePromises: Promise<PostsApiResponse>[] = [];
    for (let page = 2; page <= totalPages; page++) {
      pagePromises.push(getPosts(page, 9));
    }
    const subsequentPages = await Promise.all(pagePromises);
    subsequentPages.forEach(pageResponse => {
      if (pageResponse?.posts) {
        allPosts = [...allPosts, ...pageResponse.posts];
      }
    });
  }

  return allPosts;
});

export const getPostById = cache(async (id: string): Promise<FullPost | null> => {
  const data = await fetchApi<SinglePostApiResponse>(`/id/${id}`);
  return data?.post || null;
});

export const getLatestPost = cache(async (): Promise<FullPost | null> => {
  const data = await getPosts(1, 9);
  
  if (!data?.posts || data.posts.length === 0) {
    return null;
  }

  const sortedPosts = data.posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return sortedPosts[0];
});