import React from "react";

interface CardTagProps {
  text: string;
  className?: string;
}

export const CardTag: React.FC<CardTagProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`
        absolute
        w-[130px] h-[30px]
        top-[190px] left-[227px]
        flex items-center justify-center
        text-[14px] leading-[100%] tracking-[0%] text-center
        font-heading font-thin
        bg-primary text-primary-foreground
        dark:bg-primary-dark dark:text-primary-foreground
        ${className}
      `}
    >
      {text}
    </span>
  );
};
