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
      {currentQuestionNumber}/{numberOfQuestions}
    </div>
  );
};

export default CurrentQuestionNumber;
