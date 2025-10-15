import React from 'react';

interface BackgroundColorProps {
  className?: string;
}

export default function BackgroundColor({ className }: BackgroundColorProps) {
  return (
    <div
      className={`absolute top-[-20rem] -translate-x-1/2 left-1/2 w-[95vw] h-[95vw] lg:w-[1000px] xl:w-[1200px] lg:h-[1367px] -z-10 ${className}`}
      style={{
        backgroundImage: 'url(/bg-colors.webp)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
