import { FC } from 'react';

type Props = {
  handleClickSameLessonButton: () => void;
};

const SameLessonButton: FC<Props> = ({ handleClickSameLessonButton }) => {
  return (
    <button
      onClick={handleClickSameLessonButton}
      className="m-1 w-40 rounded-l-full border border-gray-300 bg-gray-100 py-2 px-1 font-sans text-xl font-thin text-gray-800 hover:bg-opacity-10"
    >
      もう1度
    </button>
  );
};

export default SameLessonButton;
