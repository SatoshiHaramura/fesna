import { FC } from 'react';

type Props = {
  handleClickNextLessonButton: () => void;
};

const NextLessonButton: FC<Props> = ({ handleClickNextLessonButton }) => {
  return (
    <button
      onClick={handleClickNextLessonButton}
      className="m-1 w-36 rounded-full border border-cyan-500 bg-cyan-500 bg-opacity-5 py-2 px-1 text-xl text-gray-800 hover:bg-opacity-30"
    >
      次のレッスン
    </button>
  );
};

export default NextLessonButton;
