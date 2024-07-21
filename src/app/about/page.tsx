import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { LinkedInLink } from '@/app/shared/components/LinkedInLink';
import myPortrait from '@/app/static/assets/myPortrait.jpg';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20 font-[Jaden] text-xs">
        <ul className="flex items-center p-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-black ml-1.5">
              Back
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex  flex-col items-center">
        <h1 className="text-xl font-bold text-center mt-20 mb-4 md:mb-10 md:mt-24 md:tracking-[40px] font-[Jaden]">
          Anton Khomenko
        </h1>
        <Image
          src={myPortrait}
          alt={'screen'}
          width={250}
          className="rounded-xl"
        />
        <div className="px-6 md:text-lg mt-10 flex flex-col md:flex-row justify-between">
          <div className="bg-[#dddcd4] rounded-lg py-10 md:w-1/2">
            <div className="m-auto px-4 md:px-0 md:w-[70%] space-y-4 text-base">
              <h2 className="font-[Jaden] tracking-[10px] mb-4">about me</h2>
              <p className="">
                Hello! Let’s meet. I’m a Senior Front End developer from
                Ukraine, but currently residing in France. I've got two
                educations, the first one is master's degree in System
                Programming, and the second one — in Finance. With over 9 years
                of rich development experience, I am passionate about the latest
                IT advancements.
              </p>
              <p className="">
                Throughout my career, I have gained extensive experience in
                architecture, design, and development of distributed systems. I
                have a strong background working with startups, including a
                mental health startup in the USA (MiResource), and have served
                as a team lead, adept at adapting to varying company cultures
                and sizes. My expertise spans across various technologies and
                frameworks including JavaScript, React, TypeScript, Next, and
                many others.
              </p>
              <p className="">
                I thrive on comprehensive and complex tasks, seeking out unusual
                solutions and staying updated with the latest trends and
                innovations in development. My attention to detail, commitment
                to quality, and originality define the standards for my work. I
                pay a lot of attention to quality and testing, which
                consistently yields excellent results. My strong communication
                and self-organization skills, coupled with an inquisitive
                nature, help me to find the best solutions to any given task.
              </p>
              <p className="">
                I am excited about the possibility of collaborating on
                innovative projects and pushing the boundaries of what is
                possible in front-end development. Let’s create something
                exceptional together!
              </p>
            </div>
          </div>
          <div className="md:ml-3 mt-6 md:mt-0 md:w-1/2 bg-[#d2d2d2] rounded-lg py-10">
            <div className="m-auto px-4 md:px-0 md:w-[70%] space-y-4 text-base">
              <h2 className="font-[Jaden] tracking-[10px] mb-4">
                about this site
              </h2>
              <p>
                Welcome to my portfolio! This site is built to showcase my best
                projects and highlight the innovative solutions I've developed.
              </p>
              <p>
                One of my most notable achievements is the self-checkout system
                I created for a wine and eco-products shop, GoodWine. This
                project, developed from scratch, has been so successful that
                some small stores have entirely replaced traditional cashier
                desks with my self-checkout systems, supported by a consultant.
                The system is integrated with a messenger, allowing consultants
                to receive notifications as needed, and includes an admin panel
                that enables consultants to manage all sales-related tasks
                efficiently.
              </p>
              <p>
                This self-service cash desk solution is currently used in a
                prominent retail grocery store in Kyiv. The interface is
                designed to be reliable, user-friendly, and efficient,
                reflecting the company's dedication to high-quality customer
                service. It delivers a modern shopping experience that enhances
                both customer satisfaction and operational productivity.
              </p>
              <p>
                Another cool project is Yellow Place, a self-service app crafted
                for a trendy coffee shop in Kyiv. This app not only boasts a
                user-friendly menu interface but also includes a comprehensive
                admin panel to efficiently handle all behind-the-scenes tasks.
                It's designed to make both customer interactions and
                administrative management smooth and effortless.
              </p>
              <p>
                Explore my portfolio to see more of my work and the cutting-edge
                solutions I've brought to life.
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 space-x-8 mt-10">
          <LinkedInLink text="Linkedin" color="black" />
          <a
            href="mailto:anton.homenko@gmail.com"
            className="text-gray-700 hover:text-black flex items-center"
          >
            <FaEnvelope size={24} />
            <span className="ml-1.5">anton.homenko@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}
