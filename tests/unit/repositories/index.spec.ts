import {
  buildCategories,
  buildCategory,
  filterQuestionsByLessonId,
  findCategoryByLessonId,
  findLessonById,
} from '@/repositories';

describe('repositories functions', () => {
  test('buildCategory function', () => {
    const category = { id: 1, name: '動詞' };
    const lessons = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
    ];
    const result = buildCategory(category, lessons);
    expect(result).toEqual({
      id: 1,
      name: '動詞',
      lessons: [
        { id: 1, categoryId: 1, name: '1' },
        { id: 2, categoryId: 1, name: '2' },
      ],
    });
  });

  test('buildCategories function', () => {
    const categories = [
      { id: 1, name: '動詞' },
      { id: 2, name: '名詞' },
    ];
    const lessons = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
      { id: 3, categoryId: 2, name: '1' },
      { id: 4, categoryId: 2, name: '2' },
    ];
    const result = buildCategories(categories, lessons);
    expect(result).toEqual([
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
    ]);
  });

  test('filterQuestionsByLessonId function', () => {
    const questions = [
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
    const result = filterQuestionsByLessonId(questions, 1);
    expect(result).toEqual([
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
    ]);
  });

  test('findCategoryByLessonId function', () => {
    const categories = [
      { id: 1, name: '動詞' },
      { id: 2, name: '名詞' },
    ];
    const result = findCategoryByLessonId(categories, 1);
    expect(result).toEqual({ id: 1, name: '動詞' });
  });

  test('findLessonById function', () => {
    const lessons = [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
    ];
    const result = findLessonById(lessons, 1);
    expect(result).toEqual({ id: 1, categoryId: 1, name: '1' });
  });
});
