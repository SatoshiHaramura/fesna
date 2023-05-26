import { render, screen } from '@testing-library/react';

import IncorrectIcon from '@/components/pages/lessons/IncorrectIcon';

describe('IncorrectIcon component', () => {
  test('display the incorrect icon', () => {
    render(<IncorrectIcon />);

    const incorrectIcon = screen.getByTestId('incorrect-icon');
    expect(incorrectIcon).toBeInTheDocument();
  });
});
