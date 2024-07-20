import { LinkedInLink } from '@/app/shared/components/LinkedInLink';
import { GoodWine } from '@/app/goodWine';
import { YellowPlace } from '@/app/yellowPlace';

export default function Home() {
  const text = {
    goodwine: {
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
    <main className="min-h-screen flex flex-col items-center ">
      <h1 className="text-xl font-bold text-center my-6 md:my-14 md:tracking-[40px] font-[Jaden]">
        GoodWine
      </h1>
      <GoodWine text={text} />

      <h1 className="text-xl font-bold text-center my-6 md:my-14 md:tracking-[40px] font-[Jaden]">
        Yellow Place
      </h1>
      <YellowPlace text={text} />

      <div className="my-4">
        <LinkedInLink />
      </div>
    </main>
  );
}
