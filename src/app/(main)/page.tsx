"use client";

import { HeroSection } from "@/components/organisms/HeroSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export default function Home() { 
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <HeroSection />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
