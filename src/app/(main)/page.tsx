import { HeroSection } from "../../components/sections/HeroSection";
import { ContactSection } from "../../components/sections/ContactSection";
import { BlogSection } from "../../components/sections/BlogSection";
import { getAllPosts } from "../services/posts.service";
import { FullPost } from "../types";

export default async function Home() {
  const allPosts: FullPost[] = await getAllPosts();

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
