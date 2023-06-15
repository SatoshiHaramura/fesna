import { FC } from 'react';
import Score from '@/components/pages/lessons/Score';
import WordDetailCardList from '@/components/pages/lessons/WordDetailCardList';
import LessonResultFooter from '@/components/pages/lessons/LessonResultFooter';
import { Question } from '@/types';

type Props = {
  questions: readonly Question[];
  judgedAnswers: boolean[];
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
};

const LessonResult: FC<Props> = ({
  questions,
  judgedAnswers,
  handleClickSameLessonButton,
  handleClickNextLessonButton,
}) => {
  return (
    <div className="relative">
      <div className="p-4">
        <Score
          judgedAnswers={judgedAnswers}
          numberOfQuestions={questions.length}
        />
      </div>
      <div className="p-1">
        <WordDetailCardList
          questions={questions}
          judgedAnswers={judgedAnswers}
        />
      </div>
      <LessonResultFooter
        handleClickSameLessonButton={handleClickSameLessonButton}
        handleClickNextLessonButton={handleClickNextLessonButton}
      />
    </div>
  );
};

export default LessonResult;
