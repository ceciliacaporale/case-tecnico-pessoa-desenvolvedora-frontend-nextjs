import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  
  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 7;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    return [...new Set(pageNumbers)];
  };

  const pages = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const baseStyles = `w-[32px] h-[40px] flex items-center justify-center rounded-md font-bold transition-colors duration-200`;

  return (
    <nav aria-label="Paginação" className={cn("flex items-center justify-center gap-4 mt-8", className)}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={cn(baseStyles, 'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed')}
        aria-label="Ir para página anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page, index) => {
        if (page === '...') {
          return <span key={`dots-${index}`} className="flex items-center justify-center w-10 h-10">&#8230;</span>;
        }

        const isActive = page === currentPage;
        const variantStyles = isActive
          ? 'bg-foreground text-primary-foreground cursor-default'
          : 'bg-neutral text-primary-foreground cursor-pointer';
        return (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            disabled={isActive}
            aria-current={isActive ? 'page' : undefined}
            className={cn(baseStyles, variantStyles)}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn(baseStyles, 'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed')}
        aria-label="Ir para próxima página"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}