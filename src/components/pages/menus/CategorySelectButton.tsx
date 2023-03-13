import React, { FC } from 'react';
import type { CategoryWithLessons } from '@/types';

type Props = {
  category: CategoryWithLessons;
  handleClickCategory: (category: CategoryWithLessons) => void;
};

const CategorySelectButton: FC<Props> = ({ category, handleClickCategory }) => {
  return (
    <button
      onClick={() => handleClickCategory(category)}
      className="h-16 w-44 rounded-full border border-cyan-500 bg-cyan-500 bg-opacity-5 py-2 px-1 text-4xl text-gray-700 hover:bg-opacity-30"
    >
      {category.name}
    </button>
  );
};

export default CategorySelectButton;
