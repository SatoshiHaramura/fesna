import { render, screen } from '@testing-library/react';

import CorrectIcon from '@/components/pages/lessons/CorrectIcon';

describe('CorrectIcon component', () => {
  test('display the correct icon', () => {
    render(<CorrectIcon />);

    const correctIcon = screen.getByTestId('correct-icon');
    expect(correctIcon).toBeInTheDocument();
  });
});
