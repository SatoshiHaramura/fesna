import { FC } from 'react';

type Props = {
  handleClickNextLessonButton: () => void;
};

const NextLessonButton: FC<Props> = ({ handleClickNextLessonButton }) => {
  return (
    <button
      onClick={handleClickNextLessonButton}
      className="m-1 w-36 rounded-r-full border border-gray-300 bg-gray-100 py-2 px-1 text-xl text-gray-800 hover:bg-opacity-10"
    >
      次のレッスン
    </button>
  );
};

export default NextLessonButton;
