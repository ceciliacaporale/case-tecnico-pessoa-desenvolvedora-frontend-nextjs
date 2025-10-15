import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 sm:px-20">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © Copyright {currentYear}. Produzido por Fernanda Mascheti
          </p>
        </div>
    </footer>
  )
}
