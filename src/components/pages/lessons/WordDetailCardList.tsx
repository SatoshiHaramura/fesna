import { FC } from 'react';
import WordDetailCard from '@/components/pages/lessons/WordDetailCard';
import { Question } from '@/types';

type Props = {
  questions: readonly Question[];
  judgedAnswers: boolean[];
};

const WordDetailCardList: FC<Props> = ({ questions, judgedAnswers }) => {
  return (
    <ul data-testid="word-detail-card-list">
      {questions.map((question, index) => {
        return (
          <li key={question.id}>
            <WordDetailCard
              question={question}
              isAnswerCorrect={judgedAnswers[index]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default WordDetailCardList;
