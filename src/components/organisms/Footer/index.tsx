import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-[90%] text-center mx-auto lg:w-full h-24 flex items-center justify-center mt-10 md:mt-0">
        <p className="text-secondary text-muted-foreground font-[16px]">
          © Copyright {currentYear}. Produzido por Fernanda Mascheti
        </p>
    </footer>
  )
}