import { FC } from 'react';
import ChoiceButton from '@/components/pages/lessons/ChoiceButton';

type Props = {
  choices: string[];
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean;
  answer: string;
};

const ChoiceButtonList: FC<Props> = ({
  choices,
  handleClickChoiceButton,
  judgedAnswer,
  answer,
}) => {
  const correctChoiceIndex = choices?.findIndex((choice) => choice === answer);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {choices?.map((choice, index) => (
        <div key={index}>
          <ChoiceButton
            choice={choice}
            handleClickChoiceButton={handleClickChoiceButton}
            judgedAnswer={judgedAnswer}
            index={index}
            correctChoiceIndex={correctChoiceIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ChoiceButtonList;
