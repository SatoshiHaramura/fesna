import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import MenuButton from '@/components/pages/lessons/MenuButton';

jest.mock('next/router', () => require('next-router-mock'));

describe('MenuButton component', () => {
  test('display the menu button', () => {
    render(<MenuButton />);

    const menuButton = screen.getByRole('button', { name: 'メニュー選択へ' });
    expect(menuButton).toBeInTheDocument();
  });

  test('make the screen transition to the menu page when the menu button is clicked', async () => {
    render(<MenuButton />);

    const user = userEvent.setup();
    const menuButton = screen.getByRole('button', { name: 'メニュー選択へ' });
    await user.click(menuButton);

    expect(mockRouter).toMatchObject({
      pathname: '/menus',
    });
  });
});
