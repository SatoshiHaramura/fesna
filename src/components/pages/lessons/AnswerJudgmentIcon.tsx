import { FC } from 'react';
import CorrectIcon from '@/components/pages/lessons/CorrectIcon';
import IncorrectIcon from '@/components/pages/lessons/IncorrectIcon';

type Props = {
  judgedAnswer: boolean;
};

const AnswerJudgmentIcon: FC<Props> = ({ judgedAnswer }) => {
  return (
    <div data-testid="answer-judgment-icon">
      {judgedAnswer ? <CorrectIcon /> : <IncorrectIcon />}
    </div>
  );
};

export default AnswerJudgmentIcon;
