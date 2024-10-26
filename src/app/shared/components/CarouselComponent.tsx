'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Key } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[] | StaticImport[];
  isWide?: boolean;
}

export function CarouselComponent({ images, isWide }: CarouselProps) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      showStatus={false}
      dynamicHeight={false}
      interval={3000}
      infiniteLoop
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute left-4 top-1/2 z-10 w-10 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 font-bold text-white"
          >
            ‹
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute right-4 top-1/2 z-10 w-10 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 font-bold text-white"
          >
            ›
          </button>
        )
      }
    >
      {images.map((item: string | StaticImport, index: Key) => (
        <div
          key={index}
          className={`${isWide ? 'm-auto w-[75%] md:w-full' : ''}`}
        >
          <Image
            src={item}
            alt={'screen'}
            width={1720}
            height={1080}
            className="rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
}
