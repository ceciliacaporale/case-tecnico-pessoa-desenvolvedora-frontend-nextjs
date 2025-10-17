import React from 'react';
import type { FullPost } from '@/app/types';
import PostCard from '../PostCard';

interface PostGridProps {
  posts: FullPost[];
  isLoading: boolean;
}

const PostCardSkeleton = () => (
  <div className="bg-card border border-border rounded-lg shadow-sm animate-pulse">
    <div className="w-full h-48 bg-muted rounded-t-lg"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-muted rounded w-full"></div>
        <div className="h-3 bg-muted rounded w-full"></div>
        <div className="h-3 bg-muted rounded w-5/6"></div>
      </div>
    </div>
  </div>
);


export default function PostGrid({ posts, isLoading }: PostGridProps) {
  if (isLoading) {
    return (
      <section aria-live="polite" aria-busy="true" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-12">
        <h2 className="text-2xl font-heading font-bold text-foreground text-center">
          Nenhum post encontrado
        </h2>
        <p className="text-muted-foreground text-center">
          Tente ajustar seus filtros ou limpar a busca.
        </p>
    </section>

    );
  }

  return (
    <section
    aria-live="polite"
    aria-busy={isLoading ? "true" : "false"}
    className="max-w-[80%] md:max-w-[90%] xl:max-w-[1191px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mx-auto lg:px-0"
  >
    {isLoading
      ? Array.from({ length: 6 }).map((_, index) => <PostCardSkeleton key={index} />)
      : posts.map((post) => <PostCard key={post.id} post={post} />)}
  </section>

  );
}

