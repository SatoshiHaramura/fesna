import { FC } from 'react';
import CategorySelectButton from '@/components/pages/menus/CategorySelectButton';
import type { CategoryWithLessons } from '@/types';

type Props = {
  categories: CategoryWithLessons[];
  handleClickCategory: (category: CategoryWithLessons) => void;
};

const CategorySelectButtonList: FC<Props> = ({
  categories,
  handleClickCategory,
}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <CategorySelectButton
              category={category}
              handleClickCategory={handleClickCategory}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectButtonList;
