import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 sm:px-20">
      <div className="text-center">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] text-muted-foreground">
          © Copyright {currentYear}. Produzido por Fernanda Mascheti
        </p>
      </div>
    </footer>
  )
}
