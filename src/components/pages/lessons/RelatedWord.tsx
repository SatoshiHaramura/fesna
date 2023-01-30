import { FC } from 'react';
import { RelatedWord } from '@/types';
import { shortenPartOfSpeech } from '@/utils';

type Props = {
  relatedWords: RelatedWord[];
};

const RelatedWord: FC<Props> = ({ relatedWords }) => {
  return (
    <div className="flex flex-row gap-3 py-2">
      <div className="m-auto w-2/12 rounded-xl border border-gray-300 px-0.5 py-2 text-center text-sm">
        関連語
      </div>
      <div className="flex w-10/12 flex-col justify-center">
        {relatedWords.map(({ partOfSpeech, word, meaning }, index) => {
          return (
            <div key={index} className="flex flex-row py-0.5">
              <div className="w-1/12">
                <div className="rounded border border-gray-300 text-center text-sm">
                  {shortenPartOfSpeech(partOfSpeech)}
                </div>
              </div>
              <div className="p-0.5 text-sm leading-4">{word}</div>
              <div className="p-0.5 text-sm leading-4">:</div>
              <div className="p-0.5 text-sm leading-4">{meaning}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedWord;
