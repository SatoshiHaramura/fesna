import { FC } from 'react';
import { Category, Question, QuestionGroup } from '@/types';
import LessonsPageHeader from '@/components/LessonsPageHeader';
import SelectionTypeQuestion from '@/components/SelectionTypeQuestion';
import LessonResult from '@/components/LessonResult';

type Props = {
  category: Category | undefined;
  questionGroup: QuestionGroup | undefined;
  judgedAnswers: boolean[];
  questions: Question[];
  currentQuestionNumber: number;
  question: Question;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
  handleClickMenuButton: () => void;
};

const Presenter: FC<Props> = ({
  category,
  questionGroup,
  judgedAnswers,
  questions,
  currentQuestionNumber,
  question,
  handleClickChoiceButton,
  handleClickSameLessonButton,
  handleClickNextLessonButton,
  handleClickMenuButton,
}) => {
  return (
    <div className="divide-y divide-gray-200">
      <div className="p-4">
        <LessonsPageHeader
          categoryName={category?.name}
          questionGroupName={questionGroup?.name}
        />
      </div>
      {currentQuestionNumber <= questions.length ? (
        <SelectionTypeQuestion
          questions={questions}
          currentQuestionNumber={currentQuestionNumber}
          question={question}
          handleClickChoiceButton={handleClickChoiceButton}
          judgedAnswer={judgedAnswers[currentQuestionNumber - 1]}
        />
      ) : (
        <LessonResult
          questions={questions}
          judgedAnswers={judgedAnswers}
          handleClickSameLessonButton={handleClickSameLessonButton}
          handleClickNextLessonButton={handleClickNextLessonButton}
          handleClickMenuButton={handleClickMenuButton}
        />
      )}
    </div>
  );
};

export default Presenter;
