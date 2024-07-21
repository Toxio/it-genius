import { FaLinkedin } from 'react-icons/fa';

type LinkedInLinkProps = {
  text?: string;
  color?: 'blue' | 'black';
};

export function LinkedInLink({ text, color = 'blue' }: LinkedInLinkProps) {
  const linkColorClass =
    color === 'black'
      ? 'text-gray-700 hover:text-black'
      : 'text-blue-700 hover:text-blue-800';

  return (
    <a
      href="https://www.linkedin.com/in/anton-khomenko-front-dev/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkColorClass} flex items-center`}
    >
      <FaLinkedin size={24} />
      <span className="ml-1">{text}</span>
    </a>
  );
}
