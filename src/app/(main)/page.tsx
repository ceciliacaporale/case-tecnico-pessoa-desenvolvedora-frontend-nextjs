import { HeroSection } from "../../components/organisms/HeroSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { BlogSection } from "../../components/organisms/BlogSection";
import { getPosts, getAllPosts } from "../services/posts.service";
import { FullPost } from "../types";

export default async function Home() {
  const initialData = await getPosts(1, 6);
  const allPosts: FullPost[] = await getAllPosts();
console.log(">>>>>>>:", initialData);
  return (
    <div className="min-h-screen">
      <main className="container mx-auto">
        <HeroSection />
        
       <BlogSection initialPosts={allPosts} />
        
      </main>
      <ContactSection />
    </div>
  );
}
