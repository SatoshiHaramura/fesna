import { FC } from 'react';
import CurrentQuestionNumber from '@/components/CurrentQuestionNumber';
import QuestionWord from '@/components/QuestionWord';
import ChoiceButtonList from '@/components/ChoiceButtonList';
import { Question } from '@/types';

type Props = {
  questions: Question[];
  currentQuestionNumber: number;
  question: Question;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  judgedAnswer: boolean;
};

const SelectionTypeQuestion: FC<Props> = ({
  questions,
  currentQuestionNumber,
  question,
  handleClickChoiceButton,
  judgedAnswer,
}) => {
  return (
    <div>
      <div className="pr-4 pt-2 text-right">
        <CurrentQuestionNumber
          numberOfQuestions={questions.length}
          currentQuestionNumber={currentQuestionNumber}
        />
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
