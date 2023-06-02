import { render, screen } from '@testing-library/react';

import CorrectAnswerMark from '@/components/pages/lessons/CorrectAnswerMark';

describe('CorrectAnswerMark component', () => {
  test('display the correct answer mark', () => {
    render(<CorrectAnswerMark />);

    const correctAnswerMark = screen.getByTestId('correct-answer-mark');
    expect(correctAnswerMark).toBeInTheDocument();
  });
});
