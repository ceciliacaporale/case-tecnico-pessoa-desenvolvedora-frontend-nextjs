import React from "react";

interface TagProps {
  text: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        w-[41px] h-[40px]
        pt-2 pb-2 pl-3 pr-3
        rounded-[4px] border border-primary
        text-[16px] leading-[150%] tracking-[0%] text-center font-sans font-bold
        bg-primary text-primary-foreground
        dark:bg-primary-dark dark:text-primary-foreground
        ${className}
      `}
    >
      {text}
    </span>
  );
};
