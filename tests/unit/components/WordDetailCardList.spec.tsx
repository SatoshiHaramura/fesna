import { render, screen } from '@testing-library/react';

import type { Question } from '@/types';

import WordDetailCardList from '@/components/pages/lessons/WordDetailCardList';

describe('WordDetailCardList component', () => {
  test('display all word detail cards', () => {
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
    const judgedAnswers = [true, false];
    render(
      <WordDetailCardList questions={questions} judgedAnswers={judgedAnswers} />
    );

    const wordDetailCardList = screen.getAllByTestId('word-detail-card');
    expect(wordDetailCardList).toHaveLength(2);
  });
});
