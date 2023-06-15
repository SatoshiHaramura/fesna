export type PartOfSpeech = '動詞' | '名詞' | '形容詞' | '副詞';

export type Category = {
  readonly id: number;
  readonly name: PartOfSpeech;
};

export type CategoryWithLessons = Category & {
  readonly lessons: readonly Lesson[];
};

export type Lesson = {
  readonly id: number;
  readonly categoryId: number | null;
  readonly name: string;
};

export type Question = {
  readonly id: number;
  readonly lessonId: number;
  readonly question: string;
  readonly answer: string;
  readonly choices: readonly string[];
  readonly partOfSpeech: PartOfSpeech;
  readonly relatedWords: readonly RelatedWord[];
  readonly useExamples: readonly UseExample[];
};

export type RelatedWord = {
  readonly word: string;
  readonly meaning: string;
  readonly partOfSpeech: PartOfSpeech;
};

export type UseExample = {
  readonly example: string;
  readonly meaning: string;
};

export type UserSetting = {
  readonly lessonId: number | undefined;
  readonly automaticTextToSpeechMode: boolean | undefined;
};
