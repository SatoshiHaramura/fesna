export const shortenPartOfSpeech = (partOfSpeech: string) => {
  switch (partOfSpeech) {
    case '名詞':
      return '名';
    case '動詞':
      return '動';
    case '形容詞':
      return '形';
    case '副詞':
      return '副';
    default:
      return '';
  }
};
