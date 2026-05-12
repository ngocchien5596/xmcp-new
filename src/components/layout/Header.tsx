'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';

export const NAV_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Về chúng tôi' },
  { href: '/products', label: 'Sản phẩm' },
  { href: '/projects', label: 'Dự án' },
  { href: '/news', label: 'Tin tức' },
  { href: '/careers', label: 'Tuyển dụng' },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={cn(
        'fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 bg-white shadow-sm text-viettel-dark',
        isScrolled && 'py-3 shadow-md'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Col 1: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-lg">
              <Image 
                src="/assets/design/logo.jpg" 
                alt="Xi Măng Cẩm Phả Logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tight text-viettel-dark group-hover:text-viettel-red transition-colors duration-300 leading-none">
                XI MĂNG
              </span>
              <span className="text-sm md:text-base font-bold tracking-widest text-viettel-red leading-none mt-0.5">
                CẨM PHẢ
              </span>
            </div>
          </Link>
        </div>

        {/* Col 2: Navigation Links (Center) */}
        <nav className="hidden md:flex items-center space-x-8 font-medium font-sans">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'nav-link transition-colors duration-300 relative py-2',
                'hover:text-viettel-red',
                pathname === item.href && 'text-viettel-red font-bold'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Col 3: Tools & Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Functionality */}
          <div className="relative flex items-center">
            <div className={cn(
              "flex items-center bg-gray-100 rounded-full transition-all duration-300 ease-in-out overflow-hidden border border-transparent focus-within:border-viettel-red/30 focus-within:bg-white focus-within:shadow-sm",
              isSearchOpen ? "w-64 px-4 py-1.5 opacity-100" : "w-0 px-0 py-0 opacity-0"
            )}>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none font-sans"
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-viettel-dark hover:text-viettel-red transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle search"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 text-sm font-medium font-sans border-l border-gray-200 pl-4 h-6">
            <button className="nav-link hover:text-viettel-red transition-colors">VN</button>
            <span className="opacity-30 font-light">|</span>
            <button className="nav-link hover:text-viettel-red opacity-60 transition-colors">EN</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center nav-link"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-viettel-dark shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 font-sans">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'block font-medium hover:text-viettel-red transition-colors',
                pathname === item.href && 'text-viettel-red'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
