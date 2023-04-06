import { FC } from 'react';
import { Category, Lesson, Question } from '@/types';
import LessonsPageHeader from '@/components/pages/lessons/LessonsPageHeader';
import SelectionTypeQuestion from '@/components/pages/lessons/SelectionTypeQuestion';
import LessonResult from '@/components/pages/lessons/LessonResult';

type Props = {
  category: Category | undefined;
  lesson: Lesson | undefined;
  judgedAnswers: boolean[];
  questions: Question[];
  currentQuestionNumber: number;
  question: Question;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
  playSound: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const Presenter: FC<Props> = ({
  category,
  lesson,
  judgedAnswers,
  questions,
  currentQuestionNumber,
  question,
  handleClickChoiceButton,
  handleClickSameLessonButton,
  handleClickNextLessonButton,
  playSound,
  handleClickPlaySoundButton,
}) => {
  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-fixed">
      <div className="mx-auto flex max-w-sm flex-col justify-center border-gray-100 bg-stone-50">
        <div className="min-h-screen divide-y divide-gray-300">
          <LessonsPageHeader
            categoryName={category?.name}
            lessonName={lesson?.name}
          />
          {currentQuestionNumber <= questions.length ? (
            <SelectionTypeQuestion
              questions={questions}
              currentQuestionNumber={currentQuestionNumber}
              question={question}
              handleClickChoiceButton={handleClickChoiceButton}
              judgedAnswer={judgedAnswers[currentQuestionNumber - 1]}
              playSound={playSound}
              handleClickPlaySoundButton={handleClickPlaySoundButton}
            />
          ) : (
            <LessonResult
              questions={questions}
              judgedAnswers={judgedAnswers}
              handleClickSameLessonButton={handleClickSameLessonButton}
              handleClickNextLessonButton={handleClickNextLessonButton}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Presenter;
