import { FC } from 'react';

type Props = {
  choice: string;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: undefined | boolean;
  index: number;
  correctChoiceIndex: number;
};

const ChoiceButton: FC<Props> = ({
  choice,
  handleClickChoiceButton,
  judgedAnswer,
  index,
  correctChoiceIndex,
}) => {
  const addedStyle: string[] = [];
  const unansweredStyle = 'bg-gray-50 hover:bg-opacity-10';
  const correctStyle = `bg-lime-100`;
  const incorrectStyle = 'bg-gray-50';

  if (judgedAnswer === undefined) {
    addedStyle.push(unansweredStyle);
  } else if (index === correctChoiceIndex) {
    addedStyle.push(correctStyle);
  } else if (index !== correctChoiceIndex) {
    addedStyle.push(incorrectStyle);
  }

  const style = `${addedStyle} m-1.5 h-20 w-80 rounded-full border border-gray-200 py-2 px-5 text-left font-sans text-xl font-thin text-gray-800`;

  return (
    <div>
      <button
        value={choice}
        onClick={handleClickChoiceButton}
        className={style}
      >
        {choice}
      </button>
    </div>
  );
};

export default ChoiceButton;