import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SameLessonButton from '@/components/pages/lessons/SameLessonButton';

describe('SameLessonButton component', () => {
  test('display the same lesson button', () => {
    const handleClickSameLessonButton = jest.fn();
    render(
      <SameLessonButton
        handleClickSameLessonButton={handleClickSameLessonButton}
      />
    );

    const sameLessonButton = screen.getByRole('button', {
      name: 'もう1度',
    });
    expect(sameLessonButton).toBeInTheDocument();
  });

  test('event handler is called when the same lesson button is clicked', async () => {
    const handleClickSameLessonButton = jest.fn();
    render(
      <SameLessonButton
        handleClickSameLessonButton={handleClickSameLessonButton}
      />
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'もう1度' }));

    expect(handleClickSameLessonButton).toHaveBeenCalledTimes(1);
  });
});
