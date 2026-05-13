'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Small delay to ensure state update and DOM reconciliation are complete
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Simple pagination logic for now (showing all pages)
  // For many pages, we would implement ellipsis logic (e.g. 1 ... 4 5 6 ... 20)
  
  return (
    <div className={cn("flex justify-center items-center space-x-2", className)}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-all duration-300",
          currentPage === 1 
            ? "opacity-50 cursor-not-allowed text-gray-300" 
            : "text-viettel-dark hover:border-viettel-red hover:text-viettel-red hover:shadow-lg hover:shadow-red-500/10"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-300",
              currentPage === page
                ? "bg-viettel-red text-white shadow-lg shadow-red-500/20"
                : "text-viettel-dark border border-gray-200 hover:border-viettel-red hover:text-viettel-red"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-all duration-300",
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed text-gray-300"
            : "text-viettel-dark hover:border-viettel-red hover:text-viettel-red hover:shadow-lg hover:shadow-red-500/10"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
