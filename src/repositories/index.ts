import type {
  Category,
  CategoryWithQuestionGroups,
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
