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
      <span className="text-3xl">{correctAnswerNumber}</span>
      <span> / </span>
      <span>{numberOfQuestions}</span>
    </div>
  );
};

export default CorrectAnswerNumber;
