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
  const correctStyle = `bg-lime-100 border-lime-400`;
  const incorrectStyle = 'bg-gray-50';

  if (judgedAnswer === undefined) {
    addedStyle.push(unansweredStyle);
  } else if (index === correctChoiceIndex) {
    addedStyle.push(correctStyle);
  } else if (index !== correctChoiceIndex) {
    addedStyle.push(incorrectStyle);
  }

  const style = `${addedStyle} h-20 w-80 rounded-full border border-gray-200 py-2 px-5 text-left text-xl text-gray-800`;

  return (
    <button
      value={choice}
      onClick={handleClickChoiceButton}
      className={style}
      disabled={judgedAnswer !== undefined}
      data-testid="choice-button"
    >
      {choice}
    </button>
  );
};

export default ChoiceButton;
