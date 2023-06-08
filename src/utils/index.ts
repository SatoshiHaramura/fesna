import { PartOfSpeech } from '@/types';

export const shortenPartOfSpeech = (partOfSpeech: PartOfSpeech): string => {
  const shortenMap: Record<PartOfSpeech, string> = {
    動詞: '動',
    名詞: '名',
    形容詞: '形',
    副詞: '副',
  };

  return shortenMap[partOfSpeech];
};
