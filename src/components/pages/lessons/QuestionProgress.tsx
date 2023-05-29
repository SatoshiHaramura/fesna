import { FC } from 'react';

type Props = {
  numberOfQuestions: number;
  currentQuestionNumber: number;
};

const QuestionProgress: FC<Props> = ({
  numberOfQuestions,
  currentQuestionNumber,
}) => {
  return (
    <div data-testid="question-progress">
      <span data-testid="current-question-number">{currentQuestionNumber}</span>
      <span>/</span>
      <span data-testid="number-of-questions">{numberOfQuestions}</span>
    </div>
  );
};

export default QuestionProgress;
