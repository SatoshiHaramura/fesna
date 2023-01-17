import { FC } from 'react';
import { RelatedWord } from '@/types';
import { shortenPartOfSpeech } from '@/utils';

type Props = {
  relatedWords: RelatedWord[];
};

const RelatedWord: FC<Props> = ({ relatedWords }) => {
  return (
    <div className="flex flex-row gap-0.5">
      <div className="m-auto w-2/12 rounded-xl border border-gray-300 p-0.5 text-center">
        関連語
      </div>
      <div className="w-10/12">
        {relatedWords.map((relatedWord, index) => {
          return (
            <div key={index} className="flex flex-row p-0.5">
              <div className="w-1/12">
                <div className="rounded border border-gray-300 text-center">
                  {shortenPartOfSpeech(relatedWord.partOfSpeech)}
                </div>
              </div>
              <div className="p-0.5">{relatedWord.word}</div>
              <div>：</div>
              <div className="p-0.5">{relatedWord.meaning}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedWord;
