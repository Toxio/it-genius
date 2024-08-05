import Image from 'next/image';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';

type TextProps = {
  text: {
    goodwine: {
      presentation: string;
      interface: string;
      admin: string;
    };
  };
};

export function GoodWine({ text }: TextProps) {
  const images = [
    'https://framerusercontent.com/images/OJ6zrMzuB4HRZe1FDsotmybieo.jpg',
    'https://framerusercontent.com/images/uFixGuWDGRnf39s5eL9F9zqxDhw.jpg',
    'https://framerusercontent.com/images/Kbf4hsbDqGE5BSgzAp3K2W0TTo8.jpg',
    'https://framerusercontent.com/images/ezl04ZMUJoal4godUSHKZ0CaU.jpg',
    'https://framerusercontent.com/images/JoCvpvvWEgFWX0ofLO9ybQNTro.jpg',
    'https://framerusercontent.com/images/tQ0y2i7UTaeRRipxD05QBNdGbk0.jpg',
    'https://framerusercontent.com/images/ha2adl3YsEeo2l4p5mwlefUlQ.jpg',
  ];

  const videoGeneral =
    'https://framerusercontent.com/modules/assets/ii6RudED44MnbrkgnOTc0z8lYI~nykuybEd5pzdJ7UXrKgnaWTAdSTOOvTchZsKg-y6z6M.mp4';
  const videoClient =
    'https://framerusercontent.com/modules/assets/KD1vEuYEd9HNbkEj7xrBglO8~ZpDQuaOVEjntYALjIWa9T1BH_Cv_bEKQbhBDxBI6rQ0.mp4';

  return (
    <>
      <h1 className="text-xl font-bold text-center mt-20 mb-4 md:mb-10 md:mt-24 md:tracking-[40px] font-[Jaden]">
        GoodWine
      </h1>
      <div className="flex flex-col md:flex-row mx-2 uppercase">
        <p className="text-[10px] block md:hidden mb-4 text-center mx-10">
          {text.goodwine.presentation}
        </p>
        <div className="bg-[#BDBBB0] rounded-lg w-[49vw] relative overflow-hidden mx-auto">
          <p className="absolute right-6 top-4 z-10 w-[20rem] text-xs">
            {text.goodwine.presentation}
          </p>
          <Image
            src="https://framerusercontent.com/images/xKEkFSWstXLWyVcQ1MccSwEy53g.jpg"
            alt="screen"
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="bg-[#7E7A71] md:ml-1.5 rounded-lg w-full md:w-[49vw] h-fit mx-auto">
          <div className="mx-auto md:w-[40vw] rounded-lg">
            <CarouselComponent images={images} />
          </div>
        </div>
      </div>

      <p className="text-[10px] mt-4 mb-2.5 mx-10 text-center block md:hidden uppercase">
        {text.goodwine.interface}
      </p>
      <div className="flex flex-col md:flex-row mt-1.5 mx-2">
        <div className="bg-[#9f9e8e] rounded-lg w-full md:w-[49vw] h-fit mx-auto">
          <video width="880" loop autoPlay className="rounded-lg">
            <source src={videoGeneral} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-[#c4c3b9] md:ml-1.5 rounded-lg w-full md:w-[49vw] h-fit mx-auto relative mt-1.5 md:mt-0">
          <p className="absolute z-10 w-[19rem] text-xs ml-8 mt-4 md:block hidden uppercase">
            {text.goodwine.interface}
          </p>
          <video width="880" loop autoPlay className="rounded-lg border-0">
            <source src={videoClient} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="relative mt-1.5 mx-2 md:mx-3.5 uppercase">
        <p className="text-xs  block md:hidden mb-4 text-center mt-2 text-[10px] mx-10">
          {text.goodwine.admin}
        </p>
        <p className="absolute z-10 w-[19rem] text-xs left-32 top-4 hidden md:block text-white">
          {text.goodwine.admin}
        </p>
        <Image
          src="https://framerusercontent.com/images/IxErUeJdcexGvc99Ga6uelTsUr8.png"
          alt="screen"
          className="rounded-lg"
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
}
