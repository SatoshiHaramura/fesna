import { render, screen, within } from '@testing-library/react';

import type { CategoryWithLessons } from '@/types';

import CategorySelectButtonList from '@/components/pages/menus/CategorySelectButtonList';

describe('CategorySelectButtonList component', () => {
  test('display all category select buttons', () => {
    const categories: CategoryWithLessons[] = [
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
    const handleClickCategory = jest.fn();
    render(
      <CategorySelectButtonList
        categories={categories}
        handleClickCategory={handleClickCategory}
      />
    );

    const categorySelectButtonList = screen.getByRole('list');
    expect(categorySelectButtonList).toBeInTheDocument();
    expect(
      within(categorySelectButtonList).getAllByRole('listitem')
    ).toHaveLength(4);
  });
});
