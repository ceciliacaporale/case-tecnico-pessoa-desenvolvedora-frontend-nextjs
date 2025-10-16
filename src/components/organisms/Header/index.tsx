'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { LogoIcon } from '@/components/atoms/LogoIcon';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/blog', label: 'Blog' },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex w-full items-center justify-between px-4 py-4 sm:px-8 md:px-16 lg:px-20 md:mt-6 lg:mt-6 relative z-50 bg-background'>
      <div className='flex items-center gap-3'>
        <Link href='/' className='flex items-center gap-3'>
          <LogoIcon />
          <span className='font-heading text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase text-foreground'>
            Fernanda Mascheti
          </span>
        </Link>
      </div>

      <nav className='hidden md:flex items-center gap-8'>
        <ul className='flex items-center gap-8 sm:gap-10 md:gap-12'>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === link.href 
                : pathname.startsWith(link.href);

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-heading text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold transition-colors ${
                    isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>

      <div className='md:hidden flex items-center gap-4'>
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='focus:outline-none'
          aria-label='Menu'
        >
          {isOpen ? <X className='w-6 h-6 text-foreground' /> : <Menu className='w-6 h-6 text-foreground' />}
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-background shadow-md md:hidden animate-fade-in'>
          <ul className='flex flex-col items-center gap-6 py-6'>
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-[20px] font-bold transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};