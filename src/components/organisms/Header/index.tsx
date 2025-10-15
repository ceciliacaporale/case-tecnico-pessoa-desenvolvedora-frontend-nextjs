import React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/components/atoms/LogoIcon';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/blog', label: 'Blog' },
];

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-8 py-6 sm:px-20">
      <div className="flex items-center gap-3">
        <LogoIcon />
        <span className="font-heading text-[24px] font-bold uppercase text-foreground">
          Fernanda Mascheti
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-heading text-[24px] font-bold text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};