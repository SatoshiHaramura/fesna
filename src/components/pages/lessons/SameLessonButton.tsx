import { FC } from 'react';

type Props = {
  handleClickSameLessonButton: () => void;
};

const SameLessonButton: FC<Props> = ({ handleClickSameLessonButton }) => {
  return (
    <button
      onClick={handleClickSameLessonButton}
      className="m-1 w-36 rounded-full border border-cyan-500 bg-cyan-500 bg-opacity-5 py-2 px-1 text-xl text-gray-800 hover:bg-opacity-30"
    >
      もう1度
    </button>
  );
};

export default SameLessonButton;
