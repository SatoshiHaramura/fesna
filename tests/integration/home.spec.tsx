import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import HomePage from '@/pages';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('home page', () => {
  test('should have a title tag', () => {
    render(<HomePage />);
    expect(document.title).toBe('Stock Word');
  });

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

  test('click privacy policy button, privacy policy dialog is opened', async () => {
    render(<HomePage />);
    mockAllIsIntersecting(true);
    const user = userEvent.setup();
    const privacyPolicy = screen.getByRole('button', {
      name: 'プライバシーポリシー',
    });
    await user.click(privacyPolicy);
    expect(
      screen.getByRole('heading', { name: 'プライバシーポリシー' })
    ).toBeInTheDocument();
  });
});
