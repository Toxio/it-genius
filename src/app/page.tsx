import Link from 'next/link';
import { GoodWine } from '@/app/goodWine';
import { LinkedInLink } from '@/app/shared/components/LinkedInLink';
import { YellowPlace } from '@/app/yellowPlace';

export default function Home() {
  const text = {
    goodWine: {
      presentation:
        'operational self-service cash desk solution currently used in a renowned retail grocery store in kyiv 🇺🇦',
      interface:
        "the interface is never freezing a customer it tolerates mistakes and trusts by default reflecting the company's beliefs.",
      admin:
        'The system includes an admin panel for consultants to handle all sales tasks. Integrated with a messenger, consultants receive notifications when needed.',
    },
    yellowPlace: {
      presentation:
        'self-service app for a coffee shop with a menu. The app is designed to be user-friendly and easy to navigate.',
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed left-0 top-0 z-20 w-full bg-white font-[Jaden] text-xs shadow-md">
        <ul className="flex items-center justify-between p-4">
          <div className="ml-1.5 flex space-x-4">
            <li>
              <a href="#goodwine" className="text-gray-700 hover:text-black">
                GoodWine
              </a>
            </li>
            <li>
              <a href="#yellowplace" className="text-gray-700 hover:text-black">
                Yellow Place
              </a>
            </li>
          </div>
          <div className="mr-1.5">
            <li>
              <Link href="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <div id="goodwine">
        <GoodWine text={text.goodWine} />
      </div>

      <div id="yellowplace">
        <YellowPlace text={text.yellowPlace} />
      </div>

      <div className="my-4">
        <LinkedInLink text="Connect with me on LinkedIn" />
      </div>
    </main>
  );
}
