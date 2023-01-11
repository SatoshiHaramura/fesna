export type Category = {
  id: number;
  name: string;
};

export type CategoryWithQuestionGroups = Category & {
  questionGroups: QuestionGroup[];
};

export type QuestionGroup = {
  id: number;
  categoryId: number | null;
  name: string;
};

export type Question = {
  id: number;
  questionGroupId: number;
  question: string;
  answer: string;
  choices: string[];
  relatedWords: RelatedWord[];
  useExamples: UseExample[];
};

export type RelatedWord = {
  word: string;
  meaning: string;
  partOfSpeech: string;
};

export type UseExample = {
  example: string;
  meaning: string;
};

export type UserSetting = {
  questionGroupId: number | undefined;
  incorrectQuestionIds: number[] | undefined;
  playSound: boolean | undefined;
};
