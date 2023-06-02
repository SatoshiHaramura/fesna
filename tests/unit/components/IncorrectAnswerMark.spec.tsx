import { render, screen } from '@testing-library/react';

import IncorrectAnswerMark from '@/components/pages/lessons/IncorrectAnswerMark';

describe('IncorrectAnswerMark component', () => {
  test('display the incorrect answer mark', () => {
    render(<IncorrectAnswerMark />);

    const incorrectAnswerMark = screen.getByTestId('incorrect-answer-mark');
    expect(incorrectAnswerMark).toBeInTheDocument();
  });
});
