import { FC } from 'react';
import CategorySelectButton from '@/components/pages/menus/CategorySelectButton';
import type { CategoryWithLessons } from '@/types';

type Props = {
  categories: readonly CategoryWithLessons[];
  handleClickCategory: (category: CategoryWithLessons) => void;
};

const CategorySelectButtonList: FC<Props> = ({
  categories,
  handleClickCategory,
}) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-4 p-4">
      {categories.map((category) => (
        <li key={category.id}>
          <CategorySelectButton
            category={category}
            handleClickCategory={handleClickCategory}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategorySelectButtonList;
