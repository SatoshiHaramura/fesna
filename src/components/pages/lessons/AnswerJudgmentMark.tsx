import { FC } from 'react';
import CorrectAnswerMark from '@/components/pages/lessons/CorrectAnswerMark';
import IncorrectAnswerMark from '@/components/pages/lessons/IncorrectAnswerMark';

type Props = {
  isAnswerCorrect: boolean;
};

const AnswerJudgmentMark: FC<Props> = ({ isAnswerCorrect }) => {
  return (
    <div data-testid="answer-judgment-mark">
      {isAnswerCorrect ? <CorrectAnswerMark /> : <IncorrectAnswerMark />}
    </div>
  );
};

export default AnswerJudgmentMark;
