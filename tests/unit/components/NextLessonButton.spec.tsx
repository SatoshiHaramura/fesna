import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NextLessonButton from '@/components/pages/lessons/NextLessonButton';

describe('NextLessonButton component', () => {
  test('display the next lesson button', () => {
    const handleClickNextLessonButton = jest.fn();
    render(
      <NextLessonButton
        handleClickNextLessonButton={handleClickNextLessonButton}
      />
    );

    const nextLessonButton = screen.getByRole('button', {
      name: '次のレッスン',
    });
    expect(nextLessonButton).toBeInTheDocument();
  });

  test('event handler is called when the next lesson button is clicked', async () => {
    const handleClickNextLessonButton = jest.fn();
    render(
      <NextLessonButton
        handleClickNextLessonButton={handleClickNextLessonButton}
      />
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: '次のレッスン' }));

    expect(handleClickNextLessonButton).toHaveBeenCalledTimes(1);
  });
});
