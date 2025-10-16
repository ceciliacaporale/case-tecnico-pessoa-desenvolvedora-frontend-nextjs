import { Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  className = "",
}: SearchInputProps) {
  return (
    <div
      className={`relative flex items-center w-full lg:w-72 xl:w-80 h-10 rounded-md border border-primary dark:border-primary-dark bg-primary-foreground text-foreground shadow-sm focus-within:ring-2 focus-within:ring-primary/50 transition-all ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Campo de busca"
        className="w-full h-full px-3 pr-10 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-sans font-normal text-[16px] leading-[150%] align-middle"
      />
      <Search className="absolute right-3 w-5 h-5 text-primary dark:text-primary-dark pointer-events-none" />
    </div>
  );
}
