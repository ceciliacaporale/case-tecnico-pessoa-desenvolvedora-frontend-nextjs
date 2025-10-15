import type { PostsApiResponse, PostApiResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('A variável de ambiente NEXT_PUBLIC_API_BASE_URL não está definida.');
}

interface FetchPostsOptions {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
}

export async function getAllPosts(options: FetchPostsOptions = {}): Promise<PostsApiResponse> {
  const { page = 1, limit = 6, category, tag } = options;

  let url = `${API_BASE_URL}/posts`;

  if (category) {
    url = `${API_BASE_URL}/posts/category/${category}`;
  } else if (tag) {
    url = `${API_BASE_URL}/posts/tags/${tag}`;
  }

  const queryParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const finalUrl = `${url}?${queryParams.toString()}`;

  try {
    const response = await fetch(finalUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    return (await response.json()) as PostsApiResponse;
  } catch (error) {
    console.error('Falha ao buscar postagens:', error);
    throw new Error('Não foi possível carregar as postagens.');
  }
}

export async function getPostById(id: string): Promise<PostApiResponse> {
  const url = `${API_BASE_URL}/posts/id/${id}`;

  try {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    return (await response.json()) as PostApiResponse;
  } catch (error) {
    console.error(`Falha ao buscar postagem com ID ${id}:`, error);
    throw new Error('Não foi possível carregar a postagem.');
  }
}