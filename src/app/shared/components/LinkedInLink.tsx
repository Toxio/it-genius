import { FaLinkedin } from 'react-icons/fa';

export function LinkedInLink() {
  return (
    <a
      href="https://www.linkedin.com/in/anton-khomenko-front-dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:text-blue-800 flex items-center"
    >
      <FaLinkedin size={24} />
      <span className="ml-1">Connect with me on LinkedIn</span>
    </a>
  );
}
