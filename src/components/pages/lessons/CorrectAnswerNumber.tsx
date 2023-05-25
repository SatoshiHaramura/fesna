import { FC } from 'react';

type Props = {
  judgedAnswers: boolean[];
  numberOfQuestions: number;
};

const CorrectAnswerNumber: FC<Props> = ({
  judgedAnswers,
  numberOfQuestions,
}) => {
  const correctAnswerNumber = judgedAnswers.filter(
    (judgedAnswer) => judgedAnswer
  ).length;

  return (
    <div className="text-center">
      <span className="text-3xl" data-testid="correct-answer-number">
        {correctAnswerNumber}
      </span>
      <span> / </span>
      <span data-testid="number-of-questions">{numberOfQuestions}</span>
    </div>
  );
};

export default CorrectAnswerNumber;
