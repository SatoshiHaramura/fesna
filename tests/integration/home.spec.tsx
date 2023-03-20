import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import HomePage from '@/pages';

jest.mock('next/router', () => require('next-router-mock'));

describe('home page', () => {
  test('click terms of use button, terms of use dialog is opened', async () => {
    render(<HomePage />);
    mockAllIsIntersecting(true);
    const user = userEvent.setup();
    const termsOfUseButton = screen.getByRole('button', { name: '利用規約' });
    await user.click(termsOfUseButton);
    expect(
      screen.getByRole('heading', { name: '利用規約' })
    ).toBeInTheDocument();
  });
});
