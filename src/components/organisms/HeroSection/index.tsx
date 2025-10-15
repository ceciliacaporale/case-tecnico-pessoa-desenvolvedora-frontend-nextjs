import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>

      {/* decidir se coloca rounded-full bg-gradient-to-r from-purple-400 to-primary p-1 com animacao :) */}

      <div className="">
        <Image
          src="/avatar.png"
          alt="Foto da Fernanda"
          width={224}
          height={224}
          priority
          className="h-56 w-56 rounded-full border-4 border-background object-cover"
        />
      </div>

      <p className="mt-4 font-heading text-[16px] text-primary">
        Olá, meu nome é Fernanda
        <span className="animate-blink font-sans text-primary">_</span>
      </p>

      <h1 className="max-w-3xl mt-4 font-heading text-[60px] font-bold text-foreground">
        Eu ensino{' '}
        <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
          Programação
        </span>
      </h1>

      <p className="mb-24 max-w-xl font-inter text-[16px] text-muted-foreground">
        Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional
        para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento
        computacional usando HTML, CSS e JavaScript. Veja os projetos que já
        desenvolvi!
      </p>

      <div className="w-[80%] mb-10 lg:w-[686px] h-[28px] mx-auto flex animate-fade-up">
        <div>
          <div className="w-[28px] h-[1px] bg-primary"></div>
          <div className="w-[1px] h-full bg-primary"></div>
        </div>

        <div className="flex justify-center w-[28px] border-primary border-t-[1px] ml-auto">
          <div className="justify-center w-[1px] h-full bg-primary"></div>
        </div>

        <div className="flex ml-auto">
          <div className="w-[28px] h-[1px] bg-primary"></div>
          <div className="w-[1px] h-full bg-primary"></div>
        </div>
      </div>
    </section>
  )
}
