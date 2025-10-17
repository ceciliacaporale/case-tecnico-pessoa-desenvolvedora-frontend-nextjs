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
      <article className="mx-auto max-w-[80%] md:max-w-[90%] xl:max-w-[1191px] py-6 sm:py-10 md:py-16">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-14 md:mb-16">
            <div className="w-full md:w-3/6 flex flex-col order-2 md:order-1 text-center sm:text-left">
              <h1 className="font-heading text-[35px] md:text-[48px] font-bold mb-3 leading-[100.5%] text-left">
                {post.title}
              </h1>

              <div className="mb-4 mt-7 flex place-items-center gap-x-5 justify-center xl:justify-start xl:place-items-start xl:flex-col text-center xl:text-left">
                <span className="block font-semibold text-foreground text-base sm:text-lg mb-2">
                  Categoria:
                </span>
                <div className="flex justify-center sm:justify-start">
                  <Tag text={post.category.name} />
                </div>
              </div>

              <div className="mb-4 mt-7 flex place-items-center gap-x-5 justify-center xl:justify-start xl:place-items-start xl:flex-col text-center xl:text-left">
                <span className="block font-semibold text-foreground text-base sm:text-lg mb-2">
                  Tags:
                </span>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                  {post.tags.map(tag => (
                    <Tag variant="outline" key={tag.slug} text={tag.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/4 order-1 md:order-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[608/358] overflow-hidden">
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

          <div className="text-muted-foreground text-[16px] leading-relaxed text-justify">
            <p>{post.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
}