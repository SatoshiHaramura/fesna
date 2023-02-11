import { FC } from 'react';

type Props = {
  numberOfQuestions: number;
  currentQuestionNumber: number;
};

const CurrentQuestionNumber: FC<Props> = ({
  numberOfQuestions,
  currentQuestionNumber,
}) => {
  return (
    <div>
      <span data-testid="current-question-number">{currentQuestionNumber}</span>
      /{numberOfQuestions}
    </div>
  );
};

export default CurrentQuestionNumber;
