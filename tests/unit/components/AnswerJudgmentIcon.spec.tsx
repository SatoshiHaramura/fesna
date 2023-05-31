import { render, screen } from '@testing-library/react';

import AnswerJudgmentIcon from '@/components/pages/lessons/AnswerJudgmentIcon';

describe('AnswerJudgmentIcon component', () => {
  describe('when the isAnswerCorrect is true', () => {
    test('display the correct icon', () => {
      render(<AnswerJudgmentIcon isAnswerCorrect={true} />);

      const correctIcon = screen.getByTestId('correct-icon');
      expect(correctIcon).toBeInTheDocument();
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
