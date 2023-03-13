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
  const unansweredStyle =
    'bg-slate-100 bg-opacity-40 border-slate-300 text-gray-800';
  const correctStyle = `bg-lime-100 border-lime-400 text-gray-800`;
  const incorrectStyle =
    'bg-slate-50 bg-opacity-80 border-slate-200 text-gray-400';

  if (judgedAnswer === undefined) {
    addedStyle.push(unansweredStyle);
  } else if (index === correctChoiceIndex) {
    addedStyle.push(correctStyle);
  } else if (index !== correctChoiceIndex) {
    addedStyle.push(incorrectStyle);
  }

  const style = `${addedStyle} h-20 w-80 rounded-full border py-2 px-8 text-left text-xl border-2`;

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
