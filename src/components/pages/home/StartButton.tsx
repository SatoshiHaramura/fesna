import { FC } from 'react';

import ArrowRightIcon from '@/components/pages/home/ArrowRightIcon';

type Props = {
  onClick: () => void;
};

const StartButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex h-12 w-40 items-center gap-2 rounded-full border bg-blue-600 px-4 text-white shadow-xl hover:opacity-70"
    >
      はじめてみる
      <ArrowRightIcon />
    </button>
  );
};

export default StartButton;
