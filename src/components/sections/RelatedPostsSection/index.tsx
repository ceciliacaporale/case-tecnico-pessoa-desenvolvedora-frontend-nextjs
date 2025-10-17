import type { FullPost } from "@/app/types"; 
import PostCard from "@/components/common/PostCard";

interface RelatedPostsSectionProps {
  posts: FullPost[];
}

export default function RelatedPostsSection({ posts }: RelatedPostsSectionProps) {
  if (posts.length === 0) {
    return null;
  }
  
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-[80%] md:max-w-[90%] xl:max-w-[1191px] text-center md:text-left">
        <h2 className="text-[24px] font-heading mb-[28px] font-bold">
          Postagens relacionadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}