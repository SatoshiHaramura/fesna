import { FC } from 'react';

type Props = {
  choice: string;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: undefined | boolean;
  index: number;
  correctChoiceIndex: number;
};

const commonStyle =
  'h-20 w-80 rounded-full border py-2 px-8 text-left text-xl border-2';
const styles = {
  unanswered: `${commonStyle} bg-slate-100 bg-opacity-40 border-slate-300 text-gray-800`,
  correct: `${commonStyle} bg-lime-100 border-lime-400 text-gray-800`,
  incorrect: `${commonStyle} bg-slate-50 bg-opacity-80 border-slate-200 text-gray-400`,
};

const getStyleKey = (
  judgedAnswer: undefined | boolean,
  index: number,
  correctChoiceIndex: number
) => {
  return judgedAnswer === undefined
    ? 'unanswered'
    : index === correctChoiceIndex
    ? 'correct'
    : 'incorrect';
};

const ChoiceButton: FC<Props> = ({
  choice,
  handleClickChoiceButton,
  judgedAnswer,
  index,
  correctChoiceIndex,
}) => {
  const styleKey = getStyleKey(judgedAnswer, index, correctChoiceIndex);
  const style = styles[styleKey];

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
