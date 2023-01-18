import { FC } from 'react';
import SoundToggleIcon from '@/components/SoundToggleIcon';
import CurrentQuestionNumber from '@/components/CurrentQuestionNumber';
import QuestionWord from '@/components/QuestionWord';
import ChoiceButtonList from '@/components/ChoiceButtonList';
import { Question } from '@/types';
import { usePlaySound } from '@/hooks/usePlaySound';

type Props = {
  questions: Question[];
  currentQuestionNumber: number;
  question: Question;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean;
  playSound: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const SelectionTypeQuestion: FC<Props> = ({
  questions,
  currentQuestionNumber,
  question,
  handleClickChoiceButton,
  judgedAnswer,
  playSound,
  handleClickPlaySoundButton,
}) => {
  usePlaySound(playSound, question?.question);

  return (
    <div>
      <div className="p-2">
        <div className="flex h-1/2 flex-row justify-around">
          <SoundToggleIcon
            playSound={playSound}
            handleClickPlaySoundButton={handleClickPlaySoundButton}
          />
          <CurrentQuestionNumber
            numberOfQuestions={questions.length}
            currentQuestionNumber={currentQuestionNumber}
          />
        </div>
      </div>
      <div className="p-1">
        <div className="flex flex-col items-center justify-center divide-y divide-gray-200">
          <QuestionWord
            questionWord={question?.question}
            judgedAnswer={judgedAnswer}
          />
          <ChoiceButtonList
            choices={question?.choices}
            handleClickChoiceButton={handleClickChoiceButton}
            judgedAnswer={judgedAnswer}
            answer={question?.answer}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionTypeQuestion;
