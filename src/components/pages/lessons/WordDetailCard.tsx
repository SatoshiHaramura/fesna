import { FC } from 'react';
import { Question } from '@/types';
import AnswerJudgmentMark from '@/components/pages/lessons/AnswerJudgmentMark';
import Word from '@/components/pages/lessons/Word';
import RelatedWord from '@/components/pages/lessons/RelatedWord';
import UseExample from '@/components/pages/lessons/UseExample';

type Props = {
  question: Question;
  isAnswerCorrect: boolean;
};

const WordDetailCard: FC<Props> = ({ question, isAnswerCorrect }) => {
  const {
    partOfSpeech,
    question: word,
    answer: meaning,
    relatedWords,
    useExamples,
  } = question;

  const hasRelatedWords = relatedWords.length > 0;

  return (
    <div className="p-2" data-testid="word-detail-card">
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 divide-y divide-dashed divide-gray-400 rounded-xl border-2 border-slate-300 bg-slate-100 bg-opacity-40 p-1.5 shadow-md">
          <div className="flex flex-row gap-2 py-0.5">
            <div className="w-2/12">
              <AnswerJudgmentMark isAnswerCorrect={isAnswerCorrect} />
            </div>
            <div className="w-2/10">
              <Word partOfSpeech={partOfSpeech} word={word} meaning={meaning} />
            </div>
          </div>
          {hasRelatedWords && <RelatedWord relatedWords={relatedWords} />}
          <UseExample useExamples={useExamples} />
        </div>
      </div>
    </div>
  );
};

export default WordDetailCard;
