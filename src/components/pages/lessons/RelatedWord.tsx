import { FC } from 'react';
import { RelatedWord } from '@/types';
import { shortenPartOfSpeech } from '@/utils';
import { Roboto_Flex } from '@next/font/google';

type Props = {
  relatedWords: RelatedWord[];
};

const roboto = Roboto_Flex({
  weight: ['400'],
  preload: false,
});

const RelatedWord: FC<Props> = ({ relatedWords }) => {
  return (
    <div className="flex flex-row gap-3 py-2">
      <div className="m-auto w-2/12 rounded-xl border border-slate-400 bg-slate-100 px-0.5 py-2 text-center text-sm">
        関連語
      </div>
      <div className="flex w-10/12 flex-col justify-center">
        {relatedWords.map(({ partOfSpeech, word, meaning }, index) => {
          return (
            <div key={index} className="flex flex-row py-0.5">
              <div>
                <div className="inline-block rounded border border-slate-400 px-0.5 leading-5">
                  {shortenPartOfSpeech(partOfSpeech)}
                </div>
              </div>
              <div>
                <div className={`${roboto.className} p-0.5 leading-5`}>
                  {word}
                </div>
              </div>
              <div className="p-0.5 leading-4">:</div>
              <div className="p-0.5 leading-4">{meaning}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedWord;
