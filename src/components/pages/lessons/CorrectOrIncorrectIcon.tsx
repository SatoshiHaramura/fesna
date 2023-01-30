import { FC } from 'react';
import CorrectIcon from '@/components/pages/lessons/CorrectIcon';
import IncorrectIcon from '@/components/pages/lessons/IncorrectIcon';

type Props = {
  judgedAnswer: boolean;
};

const CorrectOrIncorrectIcon: FC<Props> = ({ judgedAnswer }) => {
  return <div>{judgedAnswer ? <CorrectIcon /> : <IncorrectIcon />}</div>;
};

export default CorrectOrIncorrectIcon;
