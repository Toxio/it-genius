import Image from 'next/image';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';
import {
  adminImage,
  images,
  paperImage,
  videoClient,
  videoGeneral,
} from './mediaData';

type TextProps = {
  text: {
    presentation: string;
    interface: string;
    admin: string;
  };
};

export function GoodWine({ text }: TextProps) {
  return (
    <>
      <h1 className="mb-4 mt-20 text-center font-[Jaden] text-xl font-bold md:mb-10 md:mt-24 md:tracking-[40px]">
        GoodWine
      </h1>
      <div className="mx-3.5 flex flex-col uppercase md:flex-row">
        <p className="mx-10 mb-4 block text-center text-[10px] md:hidden">
          {text.presentation}
        </p>
        <div className="relative w-[49vw] overflow-hidden rounded-lg bg-[#BDBBB0]">
          <p className="absolute right-6 top-4 z-10 w-[20rem] text-xs">
            {text.presentation}
          </p>
          <Image
            src={paperImage}
            alt="screen"
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="h-fit w-full rounded-lg bg-[#7E7A71] md:ml-1.5 md:w-[49vw]">
          <div className="mx-auto rounded-lg md:w-[40vw]">
            <CarouselComponent images={images} />
          </div>
        </div>
      </div>

      <p className="mx-10 mb-2.5 mt-4 block text-center text-[10px] uppercase md:hidden">
        {text.interface}
      </p>
      <div className="mx-3.5 mt-1.5 flex flex-col md:flex-row">
        <div className="h-fit w-full rounded-lg bg-[#9f9e8e] md:w-[49vw]">
          <video width="880" loop autoPlay muted className="rounded-lg">
            <source src={videoGeneral} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative mt-1.5 h-fit w-full rounded-lg bg-[#c4c3b9] md:ml-1.5 md:mt-0 md:w-[49vw]">
          <p className="absolute z-10 ml-8 mt-4 hidden w-[19rem] text-xs uppercase md:block">
            {text.interface}
          </p>
          <video
            width="880"
            loop
            autoPlay
            muted
            className="rounded-lg border-0"
          >
            <source src={videoClient} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="relative mx-3.5 mt-1.5 uppercase">
        <p className="mx-10 mb-4 mt-2 block text-center text-[10px] text-xs md:hidden">
          {text.admin}
        </p>
        <p className="absolute left-32 top-4 z-10 hidden w-[19rem] text-xs text-white md:block">
          {text.admin}
        </p>
        <Image
          src={adminImage}
          alt="screen"
          className="rounded-lg"
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
}
