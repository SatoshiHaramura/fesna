import { render, RenderResult } from '@testing-library/react';
import LessonResult from '@/components/pages/lessons/LessonResult';
import { Question } from '@/types';

jest.mock('next/router', () => require('next-router-mock'));

describe('LessonResultFooter component', () => {
  const questions: Question[] = [
    {
      id: 1,
      lessonId: 1,
      question: 'include',
      choices: ['を完了する', 'を避ける', 'に注意を払う、と述べる', 'を含む'],
      answer: 'を含む',
      partOfSpeech: '動詞',
      relatedWords: [
        {
          word: 'inclusion',
          meaning: '包含、含まれるもの',
          partOfSpeech: '名詞',
        },
        {
          word: 'inclusive',
          meaning: 'すべてを含んだ',
          partOfSpeech: '形容詞',
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
      lessonId: 1,
      question: 'steal',
      choices: [
        'を悪用する',
        'を盗む',
        'になりすます',
        'を脅迫する、ゆすり取る',
      ],
      answer: 'を盗む',
      partOfSpeech: '動詞',
      relatedWords: [],
      useExamples: [
        {
          example: 'steal sensitive information',
          meaning: '機微な情報を盗む',
        },
      ],
    },
  ];
  const judgedAnswers: boolean[] = [true, false];
  const handleClickSameLessonButton = jest.fn();
  const handleClickNextLessonButton = jest.fn();

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <LessonResult
        questions={questions}
        judgedAnswers={judgedAnswers}
        handleClickSameLessonButton={handleClickSameLessonButton}
        handleClickNextLessonButton={handleClickNextLessonButton}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the number of correct answers', () => {
    const correctAnswerNumber = renderResult.getByTestId(
      'correct-answer-number'
    );
    expect(correctAnswerNumber).toBeInTheDocument();
  });

  test('display the number of questions', () => {
    const numberOfQuestions = renderResult.getByTestId('number-of-questions');
    expect(numberOfQuestions).toBeInTheDocument();
  });

  test('display the word card list', () => {
    const wordCardList = renderResult.getByTestId('word-card-list');
    expect(wordCardList).toBeInTheDocument();
  });

  test('display the lesson result footer', () => {
    const lessonResultFooter = renderResult.getByRole('contentinfo');
    expect(lessonResultFooter).toBeInTheDocument();
  });
});
