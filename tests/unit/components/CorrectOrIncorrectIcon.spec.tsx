import { render, screen } from '@testing-library/react';

import CorrectOrIncorrectIcon from '@/components/pages/lessons/CorrectOrIncorrectIcon';

describe('CorrectOrIncorrectIcon component', () => {
  describe('when the judgedAnswer is true', () => {
    test('display the correct icon', () => {
      render(<CorrectOrIncorrectIcon judgedAnswer={true} />);

      const correctIcon = screen.getByTestId('correct-icon');
      expect(correctIcon).toBeInTheDocument();
    });
  });

  describe('when the judgedAnswer is false', () => {
    test('display the incorrect icon', () => {
      render(<CorrectOrIncorrectIcon judgedAnswer={false} />);

      const incorrectIcon = screen.getByTestId('incorrect-icon');
      expect(incorrectIcon).toBeInTheDocument();
    });
  });
});
