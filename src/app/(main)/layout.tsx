import '../globals.css'
import { Inter, Chakra_Petch } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '../../components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-chakra-petch',
});

export const metadata = {
  title: 'Fernanda Mascheti',
  description: 'Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${chakraPetch.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}