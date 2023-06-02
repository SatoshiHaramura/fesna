import { FC } from 'react';
import ChoiceButton from '@/components/pages/lessons/ChoiceButton';

type Props = {
  choices: string[];
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean | undefined;
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
    <ul
      className="flex flex-col items-center justify-center gap-2"
      data-testid="choice-button-list"
    >
      {choices?.map((choice, index) => (
        <li key={choice}>
          <ChoiceButton
            choice={choice}
            handleClickChoiceButton={handleClickChoiceButton}
            judgedAnswer={judgedAnswer}
            index={index}
            correctChoiceIndex={correctChoiceIndex}
          />
        </li>
      ))}
    </ul>
  );
};

export default ChoiceButtonList;
