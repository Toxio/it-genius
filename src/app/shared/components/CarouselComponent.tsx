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
            className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full z-10 font-bold w-10 "
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
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full z-10 font-bold w-10"
          >
            ›
          </button>
        )
      }
    >
      {images.map((item: string | StaticImport, index: Key) => (
        <div
          key={index}
          className={`${isWide ? 'w-[75%] md:w-full m-auto' : ''}`}
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
