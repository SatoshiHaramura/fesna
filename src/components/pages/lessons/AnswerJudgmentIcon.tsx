import { FC } from 'react';
import CorrectAnswerMark from '@/components/pages/lessons/CorrectAnswerMark';
import IncorrectAnswerMark from '@/components/pages/lessons/IncorrectAnswerMark';

type Props = {
  isAnswerCorrect: boolean;
};

const AnswerJudgmentIcon: FC<Props> = ({ isAnswerCorrect }) => {
  return (
    <div data-testid="answer-judgment-icon">
      {isAnswerCorrect ? <CorrectAnswerMark /> : <IncorrectAnswerMark />}
    </div>
  );
};

export default AnswerJudgmentIcon;
