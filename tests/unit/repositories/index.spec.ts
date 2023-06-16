import {
  buildCategoriesWithLessons,
  buildCategoryWithLessons,
  filterQuestionsByLessonId,
  findCategoryByLessonId,
  findLessonById,
} from '@/repositories';

import type { Category, CategoryWithLessons, Lesson, Question } from '@/types';

describe('repositories functions', () => {
  describe('buildCategoryWithLessons function', () => {
    const category: Category = { id: 1, name: '動詞' };
    const lessons: Lesson[] = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
    ];
    const result: CategoryWithLessons = buildCategoryWithLessons(
      category,
      lessons
    );
    const expected: CategoryWithLessons = {
      id: 1,
      name: '動詞',
      lessons: [
        { id: 1, categoryId: 1, name: '1' },
        { id: 2, categoryId: 1, name: '2' },
      ],
    };

    test('build category with lessons', () => {
      expect(result).toEqual(expected);
    });

    test('return a deep copy of category with lessons', () => {
      expect(result.lessons[0]).not.toBe(expected.lessons[0]);
    });
  });

  describe('buildCategoriesWithLessons function', () => {
    const categories: Category[] = [
      { id: 1, name: '動詞' },
      { id: 2, name: '名詞' },
    ];
    const lessons: Lesson[] = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
      { id: 3, categoryId: 2, name: '1' },
      { id: 4, categoryId: 2, name: '2' },
    ];
    const result: readonly CategoryWithLessons[] = buildCategoriesWithLessons(
      categories,
      lessons
    );
    const expected: readonly CategoryWithLessons[] = [
      {
        id: 1,
        name: '動詞',
        lessons: [
          { id: 1, categoryId: 1, name: '1' },
          { id: 2, categoryId: 1, name: '2' },
        ],
      },
      {
        id: 2,
        name: '名詞',
        lessons: [
          { id: 3, categoryId: 2, name: '1' },
          { id: 4, categoryId: 2, name: '2' },
        ],
      },
    ];

    test('build categories with lessons', () => {
      expect(result).toEqual(expected);
    });

    test('return deep copy of categories with lessons', () => {
      expect(result[0].lessons[0]).not.toBe(expected[0].lessons[0]);
    });
  });

  describe('filterQuestionsByLessonId function', () => {
    const questions: Question[] = [
      {
        id: 1,
        lessonId: 1,
        question: 'include',
        answer: 'を含む',
        choices: ['を完了する', 'を避ける', 'に注意を払う、と述べる', 'を含む'],
        partOfSpeech: '動詞',
        relatedWords: [
          {
            word: 'inclusion',
            meaning: '包含、含まれるもの',
            partOfSpeech: '名詞',
          },
        ],
        useExamples: [
          {
            example: 'the email including a malicious macro',
            meaning: '悪意のあるマクロを含むメール',
          },
        ],
      },
      {
        id: 2,
        lessonId: 2,
        question: 'enable',
        answer: 'を有効化する、可能にする',
        choices: [
          'と主張する',
          'と評価する、見積もる',
          'を入手可能な状態にする',
          'を有効化する、可能にする',
        ],
        partOfSpeech: '動詞',
        relatedWords: [],
        useExamples: [
          {
            example: 'enable macro execution',
            meaning: 'マクロの実行を有効化する',
          },
        ],
      },
    ];
    const lessonId = 1;
    const result: readonly Question[] = filterQuestionsByLessonId(
      questions,
      lessonId
    );
    const expected: readonly Question[] = [
      {
        id: 1,
        lessonId: 1,
        question: 'include',
        answer: 'を含む',
        choices: ['を完了する', 'を避ける', 'に注意を払う、と述べる', 'を含む'],
        partOfSpeech: '動詞',
        relatedWords: [
          {
            word: 'inclusion',
            meaning: '包含、含まれるもの',
            partOfSpeech: '名詞',
          },
        ],
        useExamples: [
          {
            example: 'the email including a malicious macro',
            meaning: '悪意のあるマクロを含むメール',
          },
        ],
      },
    ];

    test('filter questions by lesson id', () => {
      expect(result).toEqual(expected);
    });

    test('return deep copy of questions', () => {
      expect(result[0].relatedWords[0]).not.toBe(expected[0].relatedWords[0]);
    });
  });

  describe('findCategoryByLessonId function', () => {
    const categories: Category[] = [
      { id: 1, name: '動詞' },
      { id: 2, name: '名詞' },
    ];
    const lessonId = 1;
    const result: Category | undefined = findCategoryByLessonId(
      categories,
      lessonId
    );
    const expected: Category = { id: 1, name: '動詞' };

    test('find category by lesson id', () => {
      expect(result).toEqual(expected);
    });

    test('return deep copy of category', () => {
      expect(result).not.toBe(expected);
    });
  });

  describe('findLessonById function', () => {
    const lessons: Lesson[] = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
    ];
    const id = 1;
    const result: Lesson | undefined = findLessonById(lessons, id);
    const expected: Lesson = { id: 1, categoryId: 1, name: '1' };

    test('find lesson by id', () => {
      expect(result).toEqual(expected);
    });

    test('return deep copy of lesson', () => {
      expect(result).not.toBe(expected);
    });
  });
});
