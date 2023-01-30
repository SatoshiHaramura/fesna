import { FC } from 'react';
import { shortenPartOfSpeech } from '@/utils';

type Props = {
  partOfSpeech: string;
  word: string;
  meaning: string;
};

const Word: FC<Props> = ({ partOfSpeech, word, meaning }) => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <div className="pt-2.5">
          <div className="rounded border border-gray-300 px-1">
            {shortenPartOfSpeech(partOfSpeech)}
          </div>
        </div>
        <div className="pl-1">
          <div className="flex flex-col">
            <div className="text-4xl">{word}</div>
            <div>{meaning}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Word;
