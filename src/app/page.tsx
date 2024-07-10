import Image from 'next/image';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselComponent } from '@/app/shared/components/CarouselComponent';

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
      <h1 className="text-xl font-bold text-center my-14 tracking-[40px] font-[Jaden]">
        Anton Khomenko
      </h1>

      <div className="flex mx-2">
        <div className="bg-[#BDBBB0] rounded-lg w-[49vw] relative overflow-hidden">
          <p className="absolute right-0 top-4 z-10 w-[19rem] text-xs">
            SELF SERVICE CASH DESK INTERFACE FOR THE RENOWN RETAIL GROCERY STORE
            IN KYIV 🇺🇦
          </p>
          <Image
            src="https://framerusercontent.com/images/xKEkFSWstXLWyVcQ1MccSwEy53g.jpg"
            alt="screen"
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="bg-[#7E7A71] ml-1.5 rounded-lg w-[49vw] h-fit">
          <div className="mx-auto w-[40vw] rounded-lg">
            <CarouselComponent images={images} />
          </div>
        </div>
      </div>

      <div className="flex mt-1.5 mx-2">
        <div className="bg-[#9f9e8e] rounded-lg w-[49vw] h-fit mx-auto">
          <video width="880" loop autoPlay className="rounded-lg">
            <source src={videoGeneral} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-[#c4c3b9] ml-1.5 rounded-lg w-[49vw] h-fit mx-auto relative">
          <p className="absolute left-8 top-4 z-10 w-[19rem] text-xs">
            THE INTERFACE IS NEVER FREEZING A CUSTOMER IT TOLERATES MISTAKES AND
            TRUSTS BY DEFAULT REFLECTING THE COMPANY'S BELIEFS.
          </p>
          <video width="880" loop autoPlay className="rounded-lg border-0">
            <source src={videoClient} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
