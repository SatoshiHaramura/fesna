import { render } from '@testing-library/react';

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
    expect(document.title).toBe('SecuWord Boost');
  });
});
