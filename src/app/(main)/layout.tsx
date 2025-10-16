import '../globals.css'
import { Inter, Chakra_Petch } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '../../components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
})
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-chakra-petch',
})

export const metadata = {
  title: 'Fernanda Mascheti',
  description: 'pensar no que colocar aqui',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${chakraPetch.variable}`}>
      <body className="text-foreground">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow px-8 py-6 sm:px-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}