import React from "react";

interface TagProps {
  text: string;
  variant?: "contained" | "outline";
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  variant = "contained",
  selected = false,
  onClick,
  className = "",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    min-w-[80px] h-[40px]
    px-4 py-2
    rounded-[4px]
    text-[16px] leading-[150%] font-sans font-bold
    transition-colors duration-200
    md:text-[14px] md:px-3 md:py-1.5
    sm:text-[12px] sm:px-2 sm:py-1
  `;

  const interactiveStyles = onClick ? "cursor-pointer" : "";

  const variantStyles =
    variant === "contained"
      ? selected
        ? `
          bg-[#126d82] text-primary-foreground
          border border-primary
          dark:bg-primary-darker dark:text-primary-foreground
        `
        : `
          bg-primary text-primary-foreground
          border border-primary
          dark:bg-primary-dark dark:text-primary-foreground
        `
      : `
        bg-transparent text-primary
        border border-primary
        hover:bg-primary/10
        dark:text-primary dark:border-primary dark:hover:bg-primary/20
      `;

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`${baseStyles} ${interactiveStyles} ${variantStyles} ${className}`}
    >
      {text}
    </button>
  );
};
