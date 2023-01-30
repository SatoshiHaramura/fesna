import type { Category, CategoryWithLessons, Lesson, Question } from '@/types';

const filterLessonsByCategoryId = (lessons: Lesson[], id: number): Lesson[] => {
  return lessons.filter((lesson) => lesson.categoryId === id);
};

export const buildCategory = (
  category: Category,
  lessons: Lesson[]
): CategoryWithLessons => {
  const filteredLessons = filterLessonsByCategoryId(lessons, category.id);
  return {
    ...category,
    lessons: filteredLessons,
  };
};

export const buildCategories = (
  categories: Category[],
  lessons: Lesson[]
): CategoryWithLessons[] => {
  return categories.map((category) => buildCategory(category, lessons));
};

export const filterQuestionsByLessonId = (
  questions: Question[],
  id: number | undefined
): Question[] => {
  return questions.filter((question) => question.lessonId === id);
};

export const findCategoryByLessonId = (
  categories: Category[],
  id: number | undefined | null
): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const findLessonById = (
  lessons: Lesson[],
  id: number | undefined
): Lesson | undefined => {
  return lessons.find((lesson) => lesson.id === id);
};
