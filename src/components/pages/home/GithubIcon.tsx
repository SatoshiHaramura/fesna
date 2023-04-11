import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const GithubIcon = () => {
  return (
    <Link href="https://github.com/SatoshiHaramura/stock-word">
      <FaGithub className="text-xl text-gray-500 hover:text-gray-900" />
    </Link>
  );
};

export default GithubIcon;
