"use client";
import React, { useEffect, useState } from 'react';

export default function TitleRole() {
  const titleRole: string = "Frontend Developer";
  const [displayedText, setDisplayedText] = useState<string>("");
  const [letterStart, setLetterStart] = useState<number>(0);
  const [letterEnd, setLetterEnd] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText(titleRole.slice(letterStart, letterEnd));

      if (letterEnd < titleRole.length) {
        setLetterEnd(letterEnd + 1);
      } else {
        setLetterStart(0);
        setLetterEnd(1);
      }
    }, 175);

    return () => clearInterval(intervalId);
  }, [letterStart, letterEnd, titleRole]);

  return (
    <h2 className='text-2xl'>{displayedText}</h2>
  );
}
