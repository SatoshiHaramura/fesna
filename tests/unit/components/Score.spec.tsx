import { render, RenderResult } from '@testing-library/react';

import Score from '@/components/pages/lessons/Score';

describe('Score component', () => {
  const judgedAnswers: boolean[] = [true, false];
  const numberOfQuestions = 2;

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Score
        judgedAnswers={judgedAnswers}
        numberOfQuestions={numberOfQuestions}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the number of correct answers', () => {
    const numberOfCorrectAnswers = renderResult.getByTestId(
      'number-of-correct-answers'
    );
    expect(numberOfCorrectAnswers).toHaveTextContent('1');
  });

  test('display the number of questions', () => {
    const numberOfQuestions = renderResult.getByTestId('number-of-questions');
    expect(numberOfQuestions).toHaveTextContent('2');
  });
});
