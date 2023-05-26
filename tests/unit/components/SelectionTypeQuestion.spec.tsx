import { render, RenderResult } from '@testing-library/react';

import type { Question } from '@/types';

import SelectionTypeQuestion from '@/components/pages/lessons/SelectionTypeQuestion';

describe('SelectionTypeQuestion component', () => {
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
  const currentQuestionNumber = 1;
  const handleClickChoiceButton = jest.fn();
  const judgedAnswer: boolean | undefined = undefined;
  const playSound = false;
  const handleClickPlaySoundButton = jest.fn();

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <SelectionTypeQuestion
        questions={questions}
        currentQuestionNumber={currentQuestionNumber}
        handleClickChoiceButton={handleClickChoiceButton}
        judgedAnswer={judgedAnswer}
        playSound={playSound}
        handleClickPlaySoundButton={handleClickPlaySoundButton}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the sound toggle icon', () => {
    const soundToggleIcon = renderResult.getByTestId('sound-toggle-icon');
    expect(soundToggleIcon).toBeInTheDocument();
  });

  test('display the current question number', () => {
    const currentQuestionNumber = renderResult.getByTestId(
      'current-question-number'
    );
    expect(currentQuestionNumber).toBeInTheDocument();
  });

  test('display the number of questions', () => {
    const numberOfQuestions = renderResult.getByTestId('number-of-questions');
    expect(numberOfQuestions).toBeInTheDocument();
  });

  test('display the question word', () => {
    const questionWord = renderResult.getByTestId('question-word');
    expect(questionWord).toBeInTheDocument();
  });

  test('display the choice button list', () => {
    const choiceButtonList = renderResult.getByTestId('choice-button-list');
    expect(choiceButtonList).toBeInTheDocument();
  });
});
