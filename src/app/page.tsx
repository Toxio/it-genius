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

  return (
    <main className="min-h-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold text-center my-14">Anton Khomenko</h1>

      <div className="flex">
        <div className="bg-[#BDBBB0] rounded-lg w-[50vw] relative overflow-hidden">
          <p className="absolute right-7 top-7 z-10 w-96">
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
        <div className="bg-[#7E7A71] ml-1 rounded-lg w-[50vw] h-fit">
          <div className="mx-auto w-[40vw] rounded-lg">
            <CarouselComponent images={images} />
          </div>
        </div>
      </div>
    </main>
  );
}
