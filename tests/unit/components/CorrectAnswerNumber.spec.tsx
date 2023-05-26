import { render, RenderResult } from '@testing-library/react';

import CorrectAnswerNumber from '@/components/pages/lessons/CorrectAnswerNumber';

describe('CorrectAnswerNumber component', () => {
  const judgedAnswers: boolean[] = [true, false];
  const numberOfQuestions = 2;

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <CorrectAnswerNumber
        judgedAnswers={judgedAnswers}
        numberOfQuestions={numberOfQuestions}
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
    expect(correctAnswerNumber).toHaveTextContent('1');
  });

  test('display the number of questions', () => {
    const numberOfQuestions = renderResult.getByTestId('number-of-questions');
    expect(numberOfQuestions).toHaveTextContent('2');
  });
});
