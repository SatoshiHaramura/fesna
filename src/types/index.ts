export type PartOfSpeech = '動詞' | '名詞' | '形容詞' | '副詞';

export type Category = {
  id: number;
  name: PartOfSpeech;
};

export type CategoryWithLessons = Category & {
  lessons: Lesson[];
};

export type Lesson = {
  id: number;
  categoryId: number | null;
  name: string;
};

export type Question = {
  id: number;
  lessonId: number;
  question: string;
  answer: string;
  choices: string[];
  partOfSpeech: PartOfSpeech;
  relatedWords: RelatedWord[];
  useExamples: UseExample[];
};

export type RelatedWord = {
  word: string;
  meaning: string;
  partOfSpeech: PartOfSpeech;
};

export type UseExample = {
  example: string;
  meaning: string;
};

export type UserSetting = {
  lessonId: number | undefined;
  automaticTextToSpeechMode: boolean | undefined;
};
