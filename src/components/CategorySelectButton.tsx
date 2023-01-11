import React, { FC } from 'react';
import type { CategoryWithQuestionGroups } from '@/types';

type Props = {
  category: CategoryWithQuestionGroups;
  handleClickCategory: (category: CategoryWithQuestionGroups) => void;
};

const CategorySelectButton: FC<Props> = (props) => {
  const { category, handleClickCategory } = props;

  return (
    <button
      onClick={() => handleClickCategory(category)}
      className="m-1 w-48 rounded-full border border-gray-300 bg-gray-100 py-2 px-1 font-sans text-5xl font-thin text-gray-800 hover:bg-opacity-10"
    >
      {category.name}
    </button>
  );
};

export default CategorySelectButton;
