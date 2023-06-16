import type { Category, CategoryWithLessons, Lesson, Question } from '@/types';

const filterLessonsByCategoryId = (
  lessons: readonly Lesson[],
  categoryId: number
): readonly Lesson[] => {
  return structuredClone(
    lessons.filter((lesson) => lesson.categoryId === categoryId)
  );
};

export const buildCategoryWithLessons = (
  category: Category,
  lessons: readonly Lesson[]
): CategoryWithLessons => {
  const copiedCategory = structuredClone(category);
  const filteredLessons = filterLessonsByCategoryId(lessons, category.id);
  return {
    ...copiedCategory,
    lessons: filteredLessons,
  };
};

export const buildCategoriesWithLessons = (
  categories: readonly Category[],
  lessons: readonly Lesson[]
): readonly CategoryWithLessons[] => {
  return categories.map((category) =>
    buildCategoryWithLessons(category, lessons)
  );
};

export const filterQuestionsByLessonId = (
  questions: readonly Question[],
  lessonId: number | undefined
): readonly Question[] => {
  return structuredClone(
    questions.filter((question) => question.lessonId === lessonId)
  );
};

export const findCategoryByLessonId = (
  categories: readonly Category[],
  lessonId: number | undefined | null
): Category | undefined => {
  return structuredClone(
    categories.find((category) => category.id === lessonId)
  );
};

export const findLessonById = (
  lessons: readonly Lesson[],
  id: number | undefined
): Lesson | undefined => {
  return structuredClone(lessons.find((lesson) => lesson.id === id));
};
