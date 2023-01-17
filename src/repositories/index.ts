import type {
  Category,
  CategoryWithQuestionGroups,
  Question,
  QuestionGroup,
} from '@/types';

const filterQuestionGroupsByCategoryId = (
  questionGroups: QuestionGroup[],
  id: number
): QuestionGroup[] => {
  return questionGroups.filter(
    (questionGroup) => questionGroup.categoryId === id
  );
};

export const buildCategory = (
  category: Category,
  questionGroups: QuestionGroup[]
): CategoryWithQuestionGroups => {
  const filteredQuestionGroups = filterQuestionGroupsByCategoryId(
    questionGroups,
    category.id
  );
  return {
    ...category,
    questionGroups: filteredQuestionGroups,
  };
};

export const buildCategories = (
  categories: Category[],
  questionGroups: QuestionGroup[]
): CategoryWithQuestionGroups[] => {
  return categories.map((category) => buildCategory(category, questionGroups));
};

export const filterQuestionsByQuestionGroupId = (
  questions: Question[],
  id: number | undefined
): Question[] => {
  return questions.filter((question) => question.questionGroupId === id);
};

export const findCategoryByQuestionGroupId = (
  categories: Category[],
  // id: number | undefined
  id: number | undefined | null
): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const findQuestionGroupById = (
  questionGroups: QuestionGroup[],
  id: number | undefined
): QuestionGroup | undefined => {
  return questionGroups.find((questionGroup) => questionGroup.id === id);
};
