import { FC } from 'react';
import CorrectIcon from '@/components/CorrectIcon';
import IncorrectIcon from '@/components/IncorrectIcon';

type Props = {
  judgedAnswer: boolean;
};

const CorrectOrIncorrectIcon: FC<Props> = ({ judgedAnswer }) => {
  return (
    <div className="w-2/12">
      <div>{judgedAnswer ? <CorrectIcon /> : <IncorrectIcon />}</div>
    </div>
  );
};

export default CorrectOrIncorrectIcon;
