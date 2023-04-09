import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const GithubIcon = () => {
  return (
    <Link href="https://github.com/SatoshiHaramura/stock-word">
      <FaGithub className="text-xl" />
    </Link>
  );
};

export default GithubIcon;
