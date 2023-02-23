import { FC } from 'react';
import { Question } from '@/types';
import CorrectOrIncorrectIcon from '@/components/pages/lessons/CorrectOrIncorrectIcon';
import Word from '@/components/pages/lessons/Word';
import RelatedWord from '@/components/pages/lessons/RelatedWord';
import UseExample from '@/components/pages/lessons/UseExample';

type Props = {
  question: Question;
  judgedAnswer: boolean;
};

const WordCard: FC<Props> = ({ question, judgedAnswer }) => {
  return (
    <div className="p-1">
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 divide-y divide-dashed divide-gray-200 rounded-xl border border-gray-300 p-1.5">
          <div className="flex flex-row gap-1 py-0.5">
            <div className="w-2/12">
              <CorrectOrIncorrectIcon judgedAnswer={judgedAnswer} />
            </div>
            <div className="w-2/10">
              <Word
                partOfSpeech={question.partOfSpeech}
                word={question.question}
                meaning={question.answer}
              />
            </div>
          </div>
          {question.relatedWords.length > 0 && (
            <RelatedWord relatedWords={question.relatedWords} />
          )}
          <UseExample useExamples={question.useExamples} />
        </div>
      </div>
    </div>
  );
};

export default WordCard;
