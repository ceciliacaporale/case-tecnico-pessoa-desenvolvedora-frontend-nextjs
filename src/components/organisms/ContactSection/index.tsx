import { Mail, Linkedin, Github } from 'lucide-react';
import React from 'react';

const contactLinks = [
  { id: 1, icon: Mail, label: 'fernandamascheti@gmail.com', href: 'mailto:fernandamascheti@gmail.com' },
  { id: 2, icon: Linkedin, label: '/Fernanda Mascheti', href: 'https://www.linkedin.com/in/fernanda-mascheti/' },
  { id: 3, icon: Github, label: '/fernandamascheti', href: 'https://github.com/fernandamascheti' },
];

interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, href }) => (
  <li className="group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition"
    >
      <span className="transition-transform duration-200 transform group-hover:-translate-y-1 group-hover:scale-110">
        <Icon className="h-6 w-6 sm:h-6 md:h-7 lg:h-8 text-primary" />
      </span>
      <span
        className={`${
          label.includes('@') ? '' : 'underline'
        } text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]`}
      >
        {label}
      </span>
    </a>
  </li>
);

export const ContactSection = () => (
  <section className="max-w-[80%] md:max-w-[90%] xl:max-w-[1191px] mx-auto mt-8 lg:mt-26 flex flex-col md:flex-row place-items-center">
    <div className="mb-10">
      <p className="font-heading font-bold text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-primary">
        Vamos conversar?
      </p>
      <h2 className="font-heading text-[30px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-foreground">
        Entre em contato
      </h2>
    </div>

    <ul className="md:ml-auto lg:w-[260px] lg:h-[96px] md:mr-5 lg:mr-[145px] flex flex-col justify-center gap-[12px]">
      {contactLinks.map((link) => (
        <ContactItem key={link.id} {...link} />
      ))}
    </ul>
  </section>
);
