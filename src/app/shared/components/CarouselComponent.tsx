'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[];
}

export function CarouselComponent({ images }: CarouselProps) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      showStatus={false}
      dynamicHeight={false}
      interval={5000}
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
      {images.map((item, index) => (
        <div key={index}>
          <Image
            src={item}
            alt={'screen'}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
}

//
// import React, { useState } from 'react';
//
// export const CarouselComponent = ({ images }: CarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };
//
//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length,
//     );
//   };
//
//   return (
//     <div className="relative w-1/2 max-h-screen">
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full"
//       >
//         ‹
//       </button>
//       <div className="overflow-hidden">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//             style={{ display: index === currentIndex ? 'block' : 'none' }}
//           >
//             <Image
//               src={image}
//               alt={'screen'}
//               width={600}
//               height={400}
//               className="rounded-lg w-full h-auto max-h-screen"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
//       >
//         ›
//       </button>
//     </div>
//   );
// };
