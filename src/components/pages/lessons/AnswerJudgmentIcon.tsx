import { FC } from 'react';
import CorrectAnswerMark from '@/components/pages/lessons/CorrectAnswerMark';
import IncorrectIcon from '@/components/pages/lessons/IncorrectIcon';

type Props = {
  isAnswerCorrect: boolean;
};

const AnswerJudgmentIcon: FC<Props> = ({ isAnswerCorrect }) => {
  return (
    <div data-testid="answer-judgment-icon">
      {isAnswerCorrect ? <CorrectAnswerMark /> : <IncorrectIcon />}
    </div>
  );
};

export default AnswerJudgmentIcon;
