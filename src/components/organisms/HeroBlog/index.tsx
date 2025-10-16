import Image from "next/image";
import type { FullPost } from "@/app/types";
import { Tag } from "@/components/atoms/Tag";

interface HeroBlogProps {
  post: FullPost;
}

export default function HeroBlog({ post }: HeroBlogProps) {
  const cleanImg = post.imageUrl.split("?")[0];

  return (
    <div className="relative overflow-hidden">        
      <article className="container mx-auto py-8 md:py-16">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="w-full md:w-3/5 flex flex-col order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-left">
                {post.title}
              </h1>
              <div className="mb-6">
                <span className="font-semibold text-foreground text-lg">
                  Categoria:
                </span>
                <div className="mt-2">
                  <Tag text={post.category.name} />
                </div>
              </div>
              <div>
                <span className="font-semibold text-foreground text-lg">
                  Tags:
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {post.tags.map(tag => (
                    <Tag variant="outline" key={tag.slug} text={tag.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 order-1 md:order-2">
              <div className="relative w-full aspect-[608/358] overflow-hidden shadow-lg">
                <Image
                  src={cleanImg}
                  alt={`Capa do post: ${post.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-foreground text-lg">
            <p>{post.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
}