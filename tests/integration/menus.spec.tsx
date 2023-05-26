import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import MenusPage from '@/pages/menus';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('menu page', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  const categories = [
    {
      id: 1,
      name: '動詞',
      lessons: [
        { id: 1, categoryId: 1, name: '1' },
        { id: 2, categoryId: 1, name: '2' },
        { id: 3, categoryId: 1, name: '3' },
        { id: 4, categoryId: 1, name: '4' },
      ],
    },
    {
      id: 2,
      name: '名詞',
      lessons: [
        { id: 5, categoryId: 2, name: '1' },
        { id: 6, categoryId: 2, name: '2' },
        { id: 7, categoryId: 2, name: '3' },
      ],
    },
    {
      id: 3,
      name: '形容詞',
      lessons: [
        { id: 8, categoryId: 3, name: '1' },
        { id: 9, categoryId: 3, name: '2' },
      ],
    },
    {
      id: 4,
      name: '副詞',
      lessons: [{ id: 10, categoryId: 4, name: '1' }],
    },
  ];

  test('should have a title tag', () => {
    render(<MenusPage categories={categories}></MenusPage>);
    expect(document.title).toBe('メニュー | Stock Word');
  });

  test('choose a verb and a lesson number, the lesson number is saved in localstorage', async () => {
    render(<MenusPage categories={categories}></MenusPage>);
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 1, automaticTextToSpeechMode: false })
    );
    mockAllIsIntersecting(true);

    expect(screen.getByRole('button', { name: '動詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '名詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '形容詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '副詞' })).toBeInTheDocument();

    const user = userEvent.setup();
    const categorySelectButton = screen.getByRole('button', { name: '動詞' });
    await user.click(categorySelectButton);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '4' }));
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 4, automaticTextToSpeechMode: false })
    );
  });

  test('choose a noun and a lesson number, the lesson number is saved in localstorage', async () => {
    render(<MenusPage categories={categories}></MenusPage>);
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 1, automaticTextToSpeechMode: false })
    );
    mockAllIsIntersecting(true);

    expect(screen.getByRole('button', { name: '動詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '名詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '形容詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '副詞' })).toBeInTheDocument();

    const user = userEvent.setup();
    const categorySelectButton = screen.getByRole('button', { name: '名詞' });
    await user.click(categorySelectButton);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '3' }));
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 7, automaticTextToSpeechMode: false })
    );
  });

  test('choose a adjective and a lesson number, the lesson number is saved in localstorage', async () => {
    render(<MenusPage categories={categories}></MenusPage>);
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 1, automaticTextToSpeechMode: false })
    );
    mockAllIsIntersecting(true);

    expect(screen.getByRole('button', { name: '動詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '名詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '形容詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '副詞' })).toBeInTheDocument();

    const user = userEvent.setup();
    const categorySelectButton = screen.getByRole('button', { name: '形容詞' });
    await user.click(categorySelectButton);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '2' }));
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 9, automaticTextToSpeechMode: false })
    );
  });

  test('choose a adverb and a lesson number, the lesson number is saved in localstorage', async () => {
    render(<MenusPage categories={categories}></MenusPage>);
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 1, automaticTextToSpeechMode: false })
    );
    mockAllIsIntersecting(true);

    expect(screen.getByRole('button', { name: '動詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '名詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '形容詞' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '副詞' })).toBeInTheDocument();

    const user = userEvent.setup();
    const categorySelectButton = screen.getByRole('button', { name: '副詞' });
    await user.click(categorySelectButton);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '1' }));
    expect(localStorage.getItem('userSetting')).toEqual(
      JSON.stringify({ lessonId: 10, automaticTextToSpeechMode: false })
    );
  });
});
