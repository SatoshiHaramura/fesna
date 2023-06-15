import { FC } from 'react';
import SpeakerToggleButton from '@/components/pages/lessons/SpeakerToggleButton';
import QuestionProgress from '@/components/pages/lessons/QuestionProgress';
import QuestionAndAnswerJudgment from '@/components/pages/lessons/QuestionAndAnswerJudgment';
import ChoiceButtonList from '@/components/pages/lessons/ChoiceButtonList';
import { Question } from '@/types';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

type Props = {
  questions: readonly Question[];
  currentQuestionNumber: number;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean | undefined;
  automaticTextToSpeechMode: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const MultipleChoiceQuestion: FC<Props> = ({
  questions,
  currentQuestionNumber,
  handleClickChoiceButton,
  judgedAnswer,
  automaticTextToSpeechMode,
  handleClickPlaySoundButton,
}) => {
  const currentQuestion = questions[currentQuestionNumber - 1];
  useTextToSpeech(automaticTextToSpeechMode, currentQuestion?.question);

  return (
    <div>
      <div className="flex h-1/2 flex-row justify-between p-2">
        <SpeakerToggleButton
          automaticTextToSpeechMode={automaticTextToSpeechMode}
          handleClickPlaySoundButton={handleClickPlaySoundButton}
        />
        <QuestionProgress
          numberOfQuestions={questions.length}
          currentQuestionNumber={currentQuestionNumber}
        />
      </div>
      <div className="flex flex-col items-center justify-center divide-y divide-gray-200 p-2">
        <div className="py-4">
          <QuestionAndAnswerJudgment
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

export default MultipleChoiceQuestion;
