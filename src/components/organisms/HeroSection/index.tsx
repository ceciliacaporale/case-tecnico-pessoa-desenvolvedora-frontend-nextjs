import Image from 'next/image'
import BackgroundColor from '@/components/atoms/BackgroundColor';
import TypeWriter from '@/components/animations/TypeWriter';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center mt-[26px]">
      <BackgroundColor />

      <div>
        <Image
          src="/avatar.webp"
          alt="Foto da Fernanda"
          width={224}
          height={224}
          priority
          className="w-[224px] h-[224px] mx-auto rounded-full border-[2px] border-primary dark:border-primary-dark object-cover"
        />
      </div>

      <p className="mt-4 font-heading font-bold text-[16px] text-primary">
        <TypeWriter text="Olá, meu nome é Fernanda" typingSpeed={60} />
     </p>

    <h1 className="max-w-3xl mt-4 font-heading text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-foreground">
        Eu ensino{' '}
        <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
            Programação
        </span>
    </h1>

      <p className="mb-26 mt-4 max-w-xl font-inter text-[14px] sm:text-[16px] md:text-[18px] text-muted-foreground">
        Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional
        para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento
        computacional usando HTML, CSS e JavaScript. Veja os projetos que já
        desenvolvi!
      </p>

       <div className="w-[80%] mb-12 lg:w-[686px] h-[28px] mx-auto flex animate-fade-up">
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
