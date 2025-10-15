import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: 'fernandamascheti@gmail.com',
    href: 'mailto:fernandamascheti@gmail.com',
  },
  {
    icon: <Linkedin className="h-5 w-5 text-primary" />,
    label: '/Fernanda Mascheti',
    href: 'https://www.linkedin.com/in/fernanda-mascheti/',
  },
  {
    icon: <Github className="h-5 w-5 text-primary" />,
    label: '/fernandamascheti',
    href: 'https://github.com/fernandamascheti',
  },
];

export const ContactSection = () => {
  return (
    <section className= "bg-background sm:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-2 font-heading text-primary">Vamos conversar?</p>
            <h2 className="font-heading text-5xl font-bold text-foreground">
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
                  {link.icon}
                  <span className="underline">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};