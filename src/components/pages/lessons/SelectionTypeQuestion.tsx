import { FC } from 'react';
import SoundToggleIcon from '@/components/pages/lessons/SoundToggleIcon';
import CurrentQuestionNumber from '@/components/pages/lessons/CurrentQuestionNumber';
import QuestionWord from '@/components/pages/lessons/QuestionWord';
import ChoiceButtonList from '@/components/pages/lessons/ChoiceButtonList';
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
      <div className="flex h-1/2 flex-row justify-between p-2">
        <SoundToggleIcon
          playSound={playSound}
          handleClickPlaySoundButton={handleClickPlaySoundButton}
        />
        <CurrentQuestionNumber
          numberOfQuestions={questions.length}
          currentQuestionNumber={currentQuestionNumber}
        />
      </div>
      <div className="flex flex-col items-center justify-center divide-y divide-gray-200 p-2">
        <div className="py-4">
          <QuestionWord
            questionWord={question?.question}
            judgedAnswer={judgedAnswer}
          />
        </div>
        <div className="py-4">
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
