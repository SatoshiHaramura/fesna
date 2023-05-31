import { render, screen } from '@testing-library/react';

import AnswerJudgmentIcon from '@/components/pages/lessons/AnswerJudgmentIcon';

describe('AnswerJudgmentIcon component', () => {
  describe('when the judgedAnswer is true', () => {
    test('display the correct icon', () => {
      render(<AnswerJudgmentIcon judgedAnswer={true} />);

      const correctIcon = screen.getByTestId('correct-icon');
      expect(correctIcon).toBeInTheDocument();
    });
  });

  describe('when the judgedAnswer is false', () => {
    test('display the incorrect icon', () => {
      render(<AnswerJudgmentIcon judgedAnswer={false} />);

      const incorrectIcon = screen.getByTestId('incorrect-icon');
      expect(incorrectIcon).toBeInTheDocument();
    });
  });
});
