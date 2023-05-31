import { FC } from 'react';
import WordCard from '@/components/pages/lessons/WordCard';
import { Question } from '@/types';

type Props = {
  questions: Question[];
  judgedAnswers: boolean[];
};

const WordCardList: FC<Props> = ({ questions, judgedAnswers }) => {
  return (
    <ul data-testid="word-card-list">
      {questions.map((question, index) => {
        return (
          <li key={question.id}>
            <WordCard
              question={question}
              isAnswerCorrect={judgedAnswers[index]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default WordCardList;
