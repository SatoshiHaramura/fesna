import type { Category, CategoryWithLessons, Lesson, Question } from '@/types';

const filterLessonsByCategoryId = (
  lessons: Lesson[],
  categoryId: number
): Lesson[] => {
  return lessons.filter((lesson) => lesson.categoryId === categoryId);
};

export const buildCategoryWithLessons = (
  category: Category,
  lessons: Lesson[]
): CategoryWithLessons => {
  const filteredLessons = filterLessonsByCategoryId(lessons, category.id);
  return {
    ...category,
    lessons: filteredLessons,
  };
};

export const buildCategoriesWithLessons = (
  categories: Category[],
  lessons: Lesson[]
): CategoryWithLessons[] => {
  return categories.map((category) =>
    buildCategoryWithLessons(category, lessons)
  );
};

export const filterQuestionsByLessonId = (
  questions: Question[],
  lessonId: number | undefined
): Question[] => {
  return questions.filter((question) => question.lessonId === lessonId);
};

export const findCategoryByLessonId = (
  categories: Category[],
  lessonId: number | undefined | null
): Category | undefined => {
  return categories.find((category) => category.id === lessonId);
};

export const findLessonById = (
  lessons: Lesson[],
  id: number | undefined
): Lesson | undefined => {
  return lessons.find((lesson) => lesson.id === id);
};
