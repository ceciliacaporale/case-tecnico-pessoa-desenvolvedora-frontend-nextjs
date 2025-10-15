import { Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const contactLinks = [
  {
    icon: Mail,
    label: 'fernandamascheti@gmail.com',
    href: 'mailto:fernandamascheti@gmail.com',
    underline: false,
  },
  {
    icon: Linkedin,
    label: '/Fernanda Mascheti',
    href: 'https://www.linkedin.com/in/fernanda-mascheti/',
    underline: true,
  },
  {
    icon: Github,
    label: '/fernandamascheti',
    href: 'https://github.com/fernandamascheti',
    underline: true,
  },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-8 py-16 sm:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-[16px] font-heading text-primary">Vamos conversar?</p>
            <h2 className="font-heading text-[60px] font-bold text-foreground">
              Entre em contato
            </h2>
          </div>

          <ul className="flex flex-col gap-4">
            {contactLinks.map(({ icon: Icon, label, href, underline }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <span
                    className={
                      underline ? 'underline decoration-muted-foreground' : 'no-underline'
                    }
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © Copyright {currentYear}. Produzido por Fernanda Mascheti
          </p>
        </div>
      </div>
    </footer>
  )
}
