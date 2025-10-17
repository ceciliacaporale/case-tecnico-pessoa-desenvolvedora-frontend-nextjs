import { getPostById, getPostsByCategory } from "@/app/services/posts.service";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroBlog from "@/components/sections/HeroBlog";
import RelatedPostsSection from "@/components/sections/RelatedPostsSection";
import BackgroundColor from "@/components/ui/BackgroundColor";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const post = await getPostById(id);

  if (!post) {
    return { title: "Post não encontrado" };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function PostPage(props: PostPageProps) {
  const { id } = await props.params;
  const post = await getPostById(id);

  if (!post) notFound();

  const relatedPosts = (await getPostsByCategory(post.category.slug))
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="relative overflow-x-hidden">
      <BackgroundColor className="hidden md:block md:mt-[30px]" />
      <HeroBlog post={post} />
      <RelatedPostsSection posts={relatedPosts} />
    </main>
  );
}