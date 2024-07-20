import yp1Img from '@/app/static/assets/yp1.png';
import yp2Img from '@/app/static/assets/yp2.png';
import yp3Img from '@/app/static/assets/yp3.png';
import yp4Img from '@/app/static/assets/yp4.png';
import yp5Img from '@/app/static/assets/yp5.png';
import yp6Img from '@/app/static/assets/yp6.png';
import yp7Img from '@/app/static/assets/yp7.png';
import Image from 'next/image';
import coffeeImg from '@/app/static/assets/coffee.jpeg';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';

type TextProps = {
  text: {
    yellowPlace: {
      presentation: string;
    };
  };
};

export function YellowPlace({ text }: TextProps) {
  const coffeeImages = [yp1Img, yp2Img, yp3Img, yp4Img, yp5Img, yp6Img, yp7Img];

  return (
    <div className="flex flex-col md:flex-row mx-2 uppercase">
      <p className="text-[10px] mb-2.5 mx-10 text-center block md:hidden">
        {text.yellowPlace.presentation}
      </p>
      <div className="bg-[#BDBBB0] flex rounded-lg w-[30vw] relative overflow-hidden">
        <p className="absolute left-6 top-4 z-10 w-[16rem] text-xs text-white">
          {text.yellowPlace.presentation}
        </p>
        <Image
          src={coffeeImg}
          alt="screen"
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="bg-[#a4a29d] rounded-lg w-full md:w-[68vw] md:ml-1.5">
        <div className="mx-auto rounded-lg">
          <CarouselComponent images={coffeeImages} isWide />
        </div>
      </div>
    </div>
  );
}
