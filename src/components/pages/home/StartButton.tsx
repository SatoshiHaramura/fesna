import { useRouter } from 'next/router';

import ArrowRightIcon from '@/components/pages/home/ArrowRightIcon';

const StartButton = () => {
  const router = useRouter();
  const transitToMenusPage = (): void => {
    router.push(`/menus`);
  };

  return (
    <button
      onClick={transitToMenusPage}
      className="group inline-flex h-12 w-40 items-center gap-2 rounded-full border bg-blue-600 px-4 text-white shadow-xl hover:opacity-70"
    >
      はじめてみる
      <ArrowRightIcon />
    </button>
  );
};

export default StartButton;
