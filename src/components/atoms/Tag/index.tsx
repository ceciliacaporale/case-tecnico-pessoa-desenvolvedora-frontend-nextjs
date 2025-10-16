import React from "react";

interface TagProps {
  text: string;
  variant?: "contained" | "outline";
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  variant = "contained",
  className = "",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    w-[41px] h-[40px]
    pt-2 pb-2 pl-3 pr-3
    rounded-[4px]
    text-[16px] leading-[150%] tracking-[0%] text-center font-sans font-bold
  `;

  const variantStyles =
    variant === "contained"
      ? `
        bg-primary text-primary-foreground
        border border-primary
        dark:bg-primary-dark dark:text-primary-foreground
      `
      : `
        bg-transparent text-primary
        border border-primary
        dark:text-primary dark:border-primary
      `;

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </span>
  );
};
