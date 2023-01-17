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
      <div className="w-1/12 pt-3">
        <div className="rounded border border-gray-300 text-center">
          {shortenPartOfSpeech(partOfSpeech)}
        </div>
      </div>
      <div className="w-9/12">
        <div className="flex flex-col">
          <div className=" text-4xl">{word}</div>
          <div>{meaning}</div>
        </div>
      </div>
    </>
  );
};

export default Word;
