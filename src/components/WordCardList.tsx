import { FC } from 'react';
import WordCard from '@/components/WordCard';
import { Question } from '@/types';

type Props = {
  questions: Question[];
  judgedAnswers: boolean[];
};

const WordCardList: FC<Props> = ({ questions, judgedAnswers }) => {
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={question.id}>
            <WordCard question={question} judgedAnswer={judgedAnswers[index]} />
          </div>
        );
      })}
    </div>
  );
};

export default WordCardList;
