import { FC } from 'react';
import CorrectIcon from '@/components/pages/lessons/CorrectIcon';
import IncorrectIcon from '@/components/pages/lessons/IncorrectIcon';

type Props = {
  isAnswerCorrect: boolean;
};

const AnswerJudgmentIcon: FC<Props> = ({ isAnswerCorrect }) => {
  return (
    <div data-testid="answer-judgment-icon">
      {isAnswerCorrect ? <CorrectIcon /> : <IncorrectIcon />}
    </div>
  );
};

export default AnswerJudgmentIcon;
