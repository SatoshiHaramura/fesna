import { FC } from 'react';
import SoundToggleIcon from '@/components/pages/lessons/SoundToggleIcon';
import CurrentQuestionNumber from '@/components/pages/lessons/CurrentQuestionNumber';
import QuestionWord from '@/components/pages/lessons/QuestionWord';
import ChoiceButtonList from '@/components/pages/lessons/ChoiceButtonList';
import { Question } from '@/types';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

type Props = {
  questions: Question[];
  currentQuestionNumber: number;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean | undefined;
  playSound: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const SelectionTypeQuestion: FC<Props> = ({
  questions,
  currentQuestionNumber,
  handleClickChoiceButton,
  judgedAnswer,
  playSound,
  handleClickPlaySoundButton,
}) => {
  const currentQuestion = questions[currentQuestionNumber - 1];
  useTextToSpeech(playSound, currentQuestion?.question);

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
            questionWord={currentQuestion?.question}
            judgedAnswer={judgedAnswer}
          />
        </div>
        <div className="py-4">
          <ChoiceButtonList
            choices={currentQuestion?.choices}
            handleClickChoiceButton={handleClickChoiceButton}
            judgedAnswer={judgedAnswer}
            answer={currentQuestion?.answer}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionTypeQuestion;
