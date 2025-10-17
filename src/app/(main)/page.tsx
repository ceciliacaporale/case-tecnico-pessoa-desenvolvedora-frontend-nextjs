import { HeroSection } from "../../components/organisms/HeroSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { BlogSection } from "../../components/organisms/BlogSection";
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
