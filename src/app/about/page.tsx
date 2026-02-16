import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { LinkedInLink } from '@/app/shared/components/LinkedInLink';
import myPortrait from '@/app/static/assets/myPortrait.jpg';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed left-0 top-0 z-20 w-full bg-white font-[Jaden] text-xs shadow-md">
        <ul className="flex items-center p-4">
          <li>
            <Link href="/" className="ml-1.5 text-gray-700 hover:text-black">
              Back
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center">
        <h1 className="mb-4 mt-20 text-center font-[Jaden] text-xl font-bold md:mb-10 md:mt-24 md:tracking-[40px]">
          Anton Khomenko
        </h1>
        <Image
          src={myPortrait}
          alt={'screen'}
          width={250}
          className="rounded-xl"
        />
        <div className="mt-10 flex flex-col justify-between px-6 md:flex-row md:text-lg">
          <div className="rounded-lg bg-[#dddcd4] py-10 md:w-1/2">
            <div className="m-auto space-y-4 px-4 text-base md:w-[70%] md:px-0">
              <h2 className="mb-4 font-[Jaden] tracking-[10px]">about me</h2>
              <p>
                Hello! Let’s meet. I’m a Senior Front End developer from
                Ukraine, but currently residing in France. I've got two
                educations, the first one is master's degree in System
                Programming, and the second one — in Finance. With 16 years of
                experience as a software developer, including 6 years in CRM
                development and over 10 years specializing in front-end
                technologies, I am passionate about the latest IT advancements.
              </p>
              <p>
                Throughout my career, I have gained extensive experience in
                architecture, design, and development of distributed systems. I
                have a strong background working with startups, including a
                mental health startup in the USA (MiResource), and have served
                as a team lead, adept at adapting to varying company cultures
                and sizes. My expertise spans across various technologies and
                frameworks including JavaScript, React, Next, TypeScript, React
                Native, and many others.
              </p>
              <p>
                I thrive on comprehensive and complex tasks, seeking out unusual
                solutions and staying updated with the latest trends and
                innovations in development. My attention to detail, commitment
                to quality, and originality define the standards for my work. I
                pay a lot of attention to quality and testing, which
                consistently yields excellent results. My strong communication
                and self-organization skills, coupled with an inquisitive
                nature, help me to find the best solutions to any given task.
              </p>
              <p>
                I am excited about the possibility of collaborating on
                innovative projects and pushing the boundaries of what is
                possible in front-end development. Let’s create something
                exceptional together!
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-[#d2d2d2] py-10 md:ml-3 md:mt-0 md:w-1/2">
            <div className="m-auto space-y-4 px-4 text-base md:w-[70%] md:px-0">
              <h2 className="mb-4 font-[Jaden] tracking-[10px]">
                about this site
              </h2>
              <p>
                Welcome to my portfolio! Over the years, I’ve worked on many
                complex, large-scale projects, but this site focuses on a select
                few of my own solutions that I personally designed and built
                from scratch — which is why it holds special meaning for me and
                makes me especially proud.
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
        <div className="my-4 mt-10 flex space-x-8">
          <LinkedInLink text="Linkedin" color="black" />
          <a
            href="mailto:anton.homenko@gmail.com"
            className="flex items-center text-gray-700 hover:text-black"
          >
            <FaEnvelope size={24} />
            <span className="ml-1.5">anton.homenko@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}
