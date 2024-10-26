import Image from 'next/image';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';
import coffeeImg from '@/app/static/assets/coffee.jpeg';
import yp1Img from '@/app/static/assets/yp1.png';
import yp2Img from '@/app/static/assets/yp2.png';
import yp3Img from '@/app/static/assets/yp3.png';
import yp4Img from '@/app/static/assets/yp4.png';
import yp5Img from '@/app/static/assets/yp5.png';
import yp6Img from '@/app/static/assets/yp6.png';
import yp7Img from '@/app/static/assets/yp7.png';

type TextProps = {
  text: {
    presentation: string;
  };
};

export function YellowPlace({ text }: TextProps) {
  const coffeeImages = [yp1Img, yp2Img, yp3Img, yp4Img, yp5Img, yp6Img, yp7Img];

  return (
    <>
      <h1 className="mb-4 mt-6 text-center font-[Jaden] text-xl font-bold md:my-10 md:tracking-[40px]">
        Yellow Place
      </h1>
      <div className="mx-3.5 flex flex-col uppercase md:flex-row">
        <p className="mx-10 mb-2.5 block text-center text-[10px] md:hidden">
          {text.presentation}
        </p>
        <div className="relative flex w-[30vw] overflow-hidden rounded-lg bg-[#BDBBB0]">
          <p className="absolute left-6 top-4 z-10 w-[16rem] text-xs text-white">
            {text.presentation}
          </p>
          <Image
            src={coffeeImg}
            alt="screen"
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="w-full rounded-lg bg-[#a4a29d] md:ml-1.5 md:w-[68vw]">
          <div className="mx-auto rounded-lg">
            <CarouselComponent images={coffeeImages} isWide />
          </div>
        </div>
      </div>
    </>
  );
}
