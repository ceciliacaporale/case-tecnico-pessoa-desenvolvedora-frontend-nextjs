import { cache } from "react";
import type { PostsApiResponse, FullPost, SinglePostApiResponse, Pagination, PostMeta } from "@/app/types"; 

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
  throw new Error("Variável de ambiente NEXT_PUBLIC_API_BASE_URL não definida.");
}

async function fetchApi<T>(endpoint: string): Promise<T | null> {
  const url = `${API_URL}/api/posts${endpoint}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 },
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.warn(`API retornou status ${res.status} para ${url}`);
      return null;
    }
    return res.json() as Promise<T>;
  } catch (error) {
    console.warn("Erro ao buscar posts (usando fallback):", error);
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
  if (!firstPage?.pagination?.totalPages) {
    console.warn(" Não foi possível buscar primeira página, usando fallback vazio");
    return [];
  }

  const totalPages = firstPage.pagination.totalPages;
  let allPosts = firstPage.posts;

  if (totalPages > 1) {
    const pagePromises: Promise<PostsApiResponse>[] = [];
    for (let page = 2; page <= totalPages; page++) {
      pagePromises.push(getPosts(page, 9));
    }
    
    const results = await Promise.allSettled(pagePromises);
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value?.posts) {
        allPosts = [...allPosts, ...result.value.posts];
      } else if (result.status === 'rejected') {
        console.warn(` Falha ao buscar página ${index + 2}, continuando...`);
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