import { FC } from 'react';

type Props = {
  judgedAnswers: boolean[];
};

const CorrectAnswerNumber: FC<Props> = ({ judgedAnswers }) => {
  const correctAnswerNumber = judgedAnswers.filter(
    (judgedAnswer) => judgedAnswer
  ).length;

  return (
    <div className="text-center">
      <span className="text-3xl">{correctAnswerNumber}</span>
      <span> / </span>
      <span>{judgedAnswers.length}</span>
    </div>
  );
};

export default CorrectAnswerNumber;
