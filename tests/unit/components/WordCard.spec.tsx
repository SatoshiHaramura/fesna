import { render, screen } from '@testing-library/react';

import type { Question } from '@/types';

import WordCard from '@/components/pages/lessons/WordCard';

describe('WordCard component', () => {
  describe('display each child component', () => {
    const question: Question = {
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
    };
    const judgedAnswer = true;

    test('display the AnswerJudgmentIcon component', () => {
      render(<WordCard question={question} judgedAnswer={judgedAnswer} />);

      const answerJudgmentIcon = screen.getByTestId('answer-judgment-icon');
      expect(answerJudgmentIcon).toBeInTheDocument();
    });

    test('display the Word component', () => {
      render(<WordCard question={question} judgedAnswer={judgedAnswer} />);

      const word = screen.getByTestId('word');
      expect(word).toBeInTheDocument();
    });

    test('display the UseExample component', () => {
      render(<WordCard question={question} judgedAnswer={judgedAnswer} />);

      const useExample = screen.getByTestId('use-example');
      expect(useExample).toBeInTheDocument();
    });

    describe('whether to display the RelatedWord component', () => {
      test('display the RelatedWord component when it exists', () => {
        const question: Question = {
          id: 1,
          lessonId: 1,
          question: 'include',
          choices: [
            'を完了する',
            'を避ける',
            'に注意を払う、と述べる',
            'を含む',
          ],
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
        };
        render(<WordCard question={question} judgedAnswer={true} />);

        const relatedWord = screen.getByTestId('related-word');
        expect(relatedWord).toBeInTheDocument();
      });

      test("doesn't display the RelatedWord component when it doesn't exist", () => {
        const question: Question = {
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
        };
        render(<WordCard question={question} judgedAnswer={true} />);

        const relatedWord = screen.queryByTestId('related-word');
        expect(relatedWord).not.toBeInTheDocument();
      });
    });
  });
});
