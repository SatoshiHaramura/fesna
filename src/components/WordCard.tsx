import { FC } from 'react';
import { Question } from '@/types';
import CorrectOrIncorrectIcon from '@/components/CorrectOrIncorrectIcon';
import Word from '@/components/Word';
import RelatedWord from '@/components/RelatedWord';
import UseExample from '@/components/UseExample';

type Props = {
  question: Question;
  judgedAnswer: boolean;
};

const WordCard: FC<Props> = ({ question, judgedAnswer }) => {
  return (
    <div className="p-1">
      <div className="flex flex-col items-center justify-center">
        <div className="w-96 divide-y divide-dashed divide-gray-200 rounded-xl border border-gray-300 p-1">
          <div className="p-0.5">
            <div className="flex flex-row gap-1">
              <CorrectOrIncorrectIcon judgedAnswer={judgedAnswer} />
              <Word
                partOfSpeech={question.partOfSpeech}
                word={question.question}
                meaning={question.answer}
              />
            </div>
          </div>
          <div className="p-0.5">
            <RelatedWord relatedWords={question.relatedWords} />
          </div>
          <div className="p-0.5">
            <UseExample useExamples={question.useExamples} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
