import { render, screen } from '@testing-library/react';

import AnswerJudgmentIcon from '@/components/pages/lessons/AnswerJudgmentIcon';

describe('AnswerJudgmentIcon component', () => {
  describe('when the isAnswerCorrect is true', () => {
    test('display the correct answer mark', () => {
      render(<AnswerJudgmentIcon isAnswerCorrect={true} />);

      const correctAnswerMark = screen.getByTestId('correct-answer-mark');
      expect(correctAnswerMark).toBeInTheDocument();
    });
  });

  describe('when the isAnswerCorrect is false', () => {
    test('display the incorrect icon', () => {
      render(<AnswerJudgmentIcon isAnswerCorrect={false} />);

      const incorrectIcon = screen.getByTestId('incorrect-icon');
      expect(incorrectIcon).toBeInTheDocument();
    });
  });
});
