import { render, screen } from '@testing-library/react';

import AnswerJudgmentMark from '@/components/pages/lessons/AnswerJudgmentMark';

describe('AnswerJudgmentMark component', () => {
  describe('when the isAnswerCorrect is true', () => {
    test('display the correct answer mark', () => {
      render(<AnswerJudgmentMark isAnswerCorrect={true} />);

      const correctAnswerMark = screen.getByTestId('correct-answer-mark');
      expect(correctAnswerMark).toBeInTheDocument();
    });
  });

  describe('when the isAnswerCorrect is false', () => {
    test('display the incorrect answer mark', () => {
      render(<AnswerJudgmentMark isAnswerCorrect={false} />);

      const incorrectAnswerMark = screen.getByTestId('incorrect-answer-mark');
      expect(incorrectAnswerMark).toBeInTheDocument();
    });
  });
});
