"use client";

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  typingSpeed?: number;
  showCursor?: boolean;
}

export default function TypeWriter({ text, typingSpeed = 100, showCursor = true }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="animate-blink">_</span>}
    </span>
  );
}
