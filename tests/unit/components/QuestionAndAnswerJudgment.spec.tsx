import { render, screen } from '@testing-library/react';

import QuestionAndAnswerJudgment from '@/components/pages/lessons/QuestionAndAnswerJudgment';

describe('QuestionAndAnswerJudgment component', () => {
  const questionWord = 'include';

  test('display the question word', () => {
    render(
      <QuestionAndAnswerJudgment
        questionWord={questionWord}
        judgedAnswer={undefined}
      />
    );

    expect(screen.getByText('include')).toBeInTheDocument();
  });

  describe('when unanswered', () => {
    test("doesn't display the answer judgment mark", () => {
      render(
        <QuestionAndAnswerJudgment
          questionWord={questionWord}
          judgedAnswer={undefined}
        />
      );

      expect(
        screen.queryByTestId('answer-judgment-mark')
      ).not.toBeInTheDocument();
    });
  });

  describe('when the answer is correct', () => {
    test('display the correct answer mark', () => {
      render(
        <QuestionAndAnswerJudgment
          questionWord={questionWord}
          judgedAnswer={true}
        />
      );

      expect(screen.getByTestId('answer-judgment-mark')).toHaveTextContent('○');
    });
  });

  describe('when the answer is incorrect', () => {
    test('display the incorrect answer mark', () => {
      render(
        <QuestionAndAnswerJudgment
          questionWord={questionWord}
          judgedAnswer={false}
        />
      );

      expect(screen.getByTestId('answer-judgment-mark')).toHaveTextContent('✗');
    });
  });
});
