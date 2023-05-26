import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { CategoryWithLessons } from '@/types';

import CategorySelectButton from '@/components/pages/menus/CategorySelectButton';

describe('CategorySelectButton component', () => {
  const category: CategoryWithLessons = {
    id: 1,
    name: '動詞',
    lessons: [
      { id: 1, categoryId: 1, name: '1' },
      { id: 2, categoryId: 1, name: '2' },
      { id: 3, categoryId: 1, name: '3' },
      { id: 4, categoryId: 1, name: '4' },
    ],
  };
  const handleClickCategory = jest.fn();

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <CategorySelectButton
        category={category}
        handleClickCategory={handleClickCategory}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the category select button', () => {
    const categorySelectButton = renderResult.getByRole('button', {
      name: '動詞',
    });
    expect(categorySelectButton).toBeInTheDocument();
  });

  test('event handler is called when the category select button is clicked', async () => {
    const user = userEvent.setup();
    await user.click(renderResult.getByRole('button', { name: '動詞' }));

    expect(handleClickCategory).toHaveBeenCalledTimes(1);
  });
});
