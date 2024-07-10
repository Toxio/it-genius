import Image from 'next/image';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';
import { LinkedInLink } from '@/app/shared/components/LinkedInLink';

export default function Home() {
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
    <main className="min-h-screen flex flex-col items-center ">
      <h1 className="text-xl font-bold text-center my-6 md:my-14 md:tracking-[40px] font-[Jaden]">
        Anton Khomenko
      </h1>
      <div className="flex flex-col md:flex-row mx-2">
        <p className="text-xs uppercase block md:hidden mb-4 text-center">
          operational self-service cash desk solution currently used in a
          renowned retail grocery store in kyiv 🇺🇦
        </p>
        <div className="bg-[#BDBBB0] rounded-lg w-[49vw] relative overflow-hidden">
          <p className="absolute right-6 top-4 z-10 w-[20rem] text-xs uppercase">
            operational self-service cash desk solution currently used in a
            renowned retail grocery store in kyiv 🇺🇦
          </p>
          <Image
            src="https://framerusercontent.com/images/xKEkFSWstXLWyVcQ1MccSwEy53g.jpg"
            alt="screen"
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="bg-[#7E7A71] md:ml-1.5 rounded-lg w-full md:w-[49vw] h-fit">
          <div className="mx-auto md:w-[40vw] rounded-lg">
            <CarouselComponent images={images} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-1.5 mx-2">
        <div className="bg-[#9f9e8e] rounded-lg w-full md:w-[49vw] h-fit mx-auto">
          <video width="880" loop autoPlay className="rounded-lg">
            <source src={videoGeneral} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-[#c4c3b9] md:ml-1.5 rounded-lg w-full md:w-[49vw] h-fit mx-auto relative mt-1.5 md:mt-0">
          <p className="md:absolute z-10 w-[19rem] text-[10px] md:text-xs ml-8 mt-4">
            THE INTERFACE IS NEVER FREEZING A CUSTOMER IT TOLERATES MISTAKES AND
            TRUSTS BY DEFAULT REFLECTING THE COMPANY'S BELIEFS.
          </p>
          <video width="880" loop autoPlay className="rounded-lg border-0">
            <source src={videoClient} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="my-4">
        <LinkedInLink />
      </div>
    </main>
  );
}
