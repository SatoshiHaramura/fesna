import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

const TwitterIcon = () => {
  return (
    <Link href="https://twitter.com/s_haramura">
      <FaTwitter className="text-xl text-gray-500 hover:text-sky-500" />
    </Link>
  );
};

export default TwitterIcon;
