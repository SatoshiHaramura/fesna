import { FC } from 'react';
import CorrectAnswerNumber from '@/components/pages/lessons/CorrectAnswerNumber';
import WordCardList from '@/components/pages/lessons/WordCardList';
import LessonResultFooter from '@/components/pages/lessons/LessonResultFooter';
import { Question } from '@/types';

type Props = {
  questions: Question[];
  judgedAnswers: boolean[];
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
  handleClickMenuButton: () => void;
};

const LessonResult: FC<Props> = ({
  questions,
  judgedAnswers,
  handleClickSameLessonButton,
  handleClickNextLessonButton,
  handleClickMenuButton,
}) => {
  return (
    <div className="relative">
      <div className="p-4">
        <CorrectAnswerNumber
          judgedAnswers={judgedAnswers}
          numberOfQuestions={questions.length}
        />
      </div>
      <div className="p-1">
        <WordCardList questions={questions} judgedAnswers={judgedAnswers} />
      </div>
      <LessonResultFooter
        handleClickSameLessonButton={handleClickSameLessonButton}
        handleClickNextLessonButton={handleClickNextLessonButton}
        handleClickMenuButton={handleClickMenuButton}
      />
    </div>
  );
};

export default LessonResult;
