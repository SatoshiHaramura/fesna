import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import StartButton from '@/components/pages/home/StartButton';

jest.mock('next/router', () => require('next-router-mock'));

describe('StartButton component', () => {
  test('display the start button', () => {
    render(<StartButton />);

    const startButton = screen.getByRole('button', { name: 'はじめてみる' });
    expect(startButton).toBeInTheDocument();
  });

  test('make the screen transition to the menu page when the start button is clicked', async () => {
    render(<StartButton />);

    const user = userEvent.setup();
    const startButton = screen.getByRole('button', { name: 'はじめてみる' });
    await user.click(startButton);

    expect(mockRouter).toMatchObject({
      pathname: '/menus',
    });
  });
});
