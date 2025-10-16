import { getPostById, getAllPosts } from "@/app/services/posts.service";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroBlog from "@/components/organisms/HeroBlog";
import RelatedPostsSection from "@/components/organisms/RelatedPostsSection";
import BackgroundColor from "@/components/atoms/BackgroundColor";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostById(params.id);
  if (!post) {
    return { title: "Post não encontrado" };
  }
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.category.slug === post.category.slug && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <HeroBlog post={post} />
      <BackgroundColor className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2" />
      <RelatedPostsSection posts={relatedPosts} />
      <BackgroundColor className="absolute top-1/7 left-1/2 -translate-x-1/7 -translate-y-1/7" />

    </>
  );
}