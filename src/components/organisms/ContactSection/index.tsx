import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-primary" />,
    label: 'fernandamascheti@gmail.com',
    href: 'mailto:fernandamascheti@gmail.com',
  },
  {
    icon: <Linkedin className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-primary" />,
    label: '/Fernanda Mascheti',
    href: 'https://www.linkedin.com/in/fernanda-mascheti/',
  },
  {
    icon: <Github className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-primary" />,
    label: '/fernandamascheti',
    href: 'https://github.com/fernandamascheti',
  },
];

export const ContactSection = () => {
  return (
    <section className="sm:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-2 font-heading text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-primary">
              Vamos conversar?
            </p>
            <h2 className="font-heading text-[30px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-foreground">
              Entre em contato
            </h2>
          </div>

          <ul className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="transition-transform duration-200 transform hover:-translate-y-1 hover:scale-110">
                    {link.icon}
                  </span>
                  <span
                    className={`${
                      link.label.includes('@') ? '' : 'underline'
                    } text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
