"use client";

import { useState, useMemo } from "react";
import type { FullPost } from "@/app/types";
import FilterBar from "../FilterBar";
import PostGrid from "../PostGrid";
import Pagination from "../../ui/Pagination";
import Fuse from 'fuse.js';

const POSTS_PER_PAGE = 6;

const fuseOptions = {
  keys: [
    'title',          
    'category.name',
    'tags.name'
  ],
  includeScore: true,
  threshold: 0.3,
};

interface BlogSectionProps {
  initialPosts: FullPost[];
}

export function BlogSection({ initialPosts }: BlogSectionProps) {
  const [allPosts] = useState<FullPost[]>(initialPosts); 
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fuse = useMemo(() => new Fuse(allPosts, fuseOptions), [allPosts]);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (searchTerm.trim() !== "") {
      const results = fuse.search(searchTerm);
      posts = results.map(result => result.item);
    }

    if (activeCategory) {
      posts = posts.filter(post => post.category.slug === activeCategory);
    }

    return posts;
  }, [allPosts, activeCategory, searchTerm, fuse]); 

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (categorySlug: string | null) => {
    setActiveCategory(categorySlug);
    setCurrentPage(1); 
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <section>
      <FilterBar
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <PostGrid posts={paginatedPosts} isLoading={false} /> 
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}