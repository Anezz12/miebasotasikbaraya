'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Gunakan URL relatif dari direktori /public alih-alih impor langsung
const images = [
  {
    src: '/images/bakso/bakso1.jpeg',
    alt: 'Bakso 1',
  },
  {
    src: '/images/bakso/bakso2.jpeg',
    alt: 'Bakso 2',
  },
  {
    src: '/images/bakso/bakso3.jpg',
    alt: 'Bakso 3',
  },
  {
    src: '/images/bakso/bakso4.jpeg',
    alt: 'Bakso 4',
  },
];

export default function ImageSlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg z-0">
      {images.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
            ${
              index === currentIndex
                ? 'opacity-100 z-10 translate-x-0 rotate-0 scale-100'
                : 'opacity-0 -translate-x-4 -rotate-5 scale-110'
            }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
