import { render, RenderResult } from '@testing-library/react';

import LessonResultFooter from '@/components/pages/lessons/LessonResultFooter';

jest.mock('next/router', () => require('next-router-mock'));

describe('LessonResultFooter component', () => {
  const handleClickSameLessonButton = jest.fn();
  const handleClickNextLessonButton = jest.fn();

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <LessonResultFooter
        handleClickSameLessonButton={handleClickSameLessonButton}
        handleClickNextLessonButton={handleClickNextLessonButton}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the same lesson button', () => {
    const sameLessonButton = renderResult.getByRole('button', {
      name: 'もう1度',
    });
    expect(sameLessonButton).toBeInTheDocument();
  });

  test('display the next lesson button', () => {
    const nextLessonButton = renderResult.getByRole('button', {
      name: '次のレッスン',
    });
    expect(nextLessonButton).toBeInTheDocument();
  });

  test('display the menu button', () => {
    const menuButton = renderResult.getByRole('button', {
      name: 'メニュー選択へ',
    });
    expect(menuButton).toBeInTheDocument();
  });
});
