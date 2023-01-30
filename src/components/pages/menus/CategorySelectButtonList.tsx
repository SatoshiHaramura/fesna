import { FC } from 'react';
import CategorySelectButton from '@/components/pages/menus/CategorySelectButton';
import type { CategoryWithQuestionGroups } from '@/types';

type Props = {
  categories: CategoryWithQuestionGroups[];
  handleClickCategory: (category: CategoryWithQuestionGroups) => void;
};

const CategorySelectButtonList: FC<Props> = (props) => {
  const { categories, handleClickCategory } = props;

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
