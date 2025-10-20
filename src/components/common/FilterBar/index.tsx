import React, { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import SearchInput from "@/components/common/SearchInput/SearchInput";
import { Tag } from "@/components/ui/Tag";
import { AVAILABLE_CATEGORIES } from "@/lib/constants";

interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  activeCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export default function FilterBar({
  searchValue,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const visibleCategories = AVAILABLE_CATEGORIES.slice(0, 2);
  const hiddenCategories = AVAILABLE_CATEGORIES.slice(2);

  const handleTagClick = (categorySlug: string) => {
    onCategoryChange(activeCategory === categorySlug ? null : categorySlug);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full py-4">
      <div className="max-w-[80%] md:max-w-[90%] xl:max-w-[1191px] mx-auto px-2 lg:px-0">
        <nav className="flex flex-col md:flex-row justify-between items-center w-full py-4 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
            <h2 className="text-[24px] font-heading font-bold text-foreground">
              Minha postagens
            </h2>
            <SearchInput
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar..."
              className="w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <span className="text-foreground font-bold whitespace-nowrap transition-colors duration-200 hover:text-primary">
              Categorias:
            </span>

            <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
              {visibleCategories.map((category) => (
                <Tag
                  key={category.slug}
                  text={category.name}
                  selected={activeCategory === category.slug}
                  onClick={() => handleTagClick(category.slug)}
                  className="transition-all duration-200 hover:scale-105"
                />
              ))}

              {hiddenCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-[4px] border border-primary bg-foreground transition-transform duration-200 hover:scale-105"
                    aria-label="Mais categorias"
                  >
                    <Plus className="w-5 h-5 text-primary-foreground" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute bg-primary-foreground top-full right-0 mt-2 w-48 border border-primary rounded-md shadow-lg z-10">
                      <ul>
                        {hiddenCategories.map((category) => {
                          const isActive = activeCategory === category.slug;
                          return (
                            <li key={category.slug}>
                              <button
                                onClick={() => handleTagClick(category.slug)}
                                className={`
                                  w-full text-left px-4 py-2 text-sm transition-colors duration-200
                                  ${
                                    isActive
                                      ? "font-bold text-primary"
                                      : "text-primary hover:bg-foreground"
                                  }
                                `}
                              >
                                {category.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}