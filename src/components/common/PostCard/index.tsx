"use client";
import Image from "next/image";
import type { FullPost } from "@/app/types";
import { CardTag } from "../../ui/CardTag";
import Link from "next/link";

interface CardProps {
  post: FullPost;
}

export default function PostCard({ post }: CardProps) {
  const cleanImg = post.imageUrl ? post.imageUrl.split("?")[0] : "";

  return (
    <div
        className="
        relative
        w-full
        max-w-[381px] 
        h-auto 
        bg-primary-foreground
        rounded-[4px]
        p-6
        border
        border-primary
        group
        transition-transform
        duration-300
        hover:shadow-[0_4px_44px_0_rgba(28,167,200,0.3)]
        "
      >
        <div className="w-full h-[196px] relative mb-4">
          {cleanImg && (
          <Link href={`/blog/${post.id}`} className="block w-full h-full">
            <Image
              src={cleanImg}
              alt={`Imagem de capa do post: ${post.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-auto rounded-[4px] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          )}
          <CardTag text={post.category.name} />
        </div>

        <h1 className="text-foreground font-bold text-[20px] font-heading line-clamp-2 mb-2">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-[16px] line-clamp-4">
          {post.content}
        </p>
        <a 
          href={`/blog/${post.id}`} 
          className="text-primary text-[16px] font-bold hover:underline inline-block mt-4"
        >
          Ler mais
        </a>
      </div>
  );
}

