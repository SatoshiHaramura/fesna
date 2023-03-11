import React, { FC } from 'react';
import CategorySelectButtonList from '@/components/pages/menus/CategorySelectButtonList';
import LessonSelectDialog from '@/components/pages/menus/LessonSelectDialog';
import type { CategoryWithLessons } from '@/types';

type Props = {
  categories: CategoryWithLessons[];
  handleClickCategory: (category: CategoryWithLessons) => void;
  isOpen: boolean;
  onClose: () => void;
  category: CategoryWithLessons;
  handleClickLesson: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Presenter: FC<Props> = ({
  categories,
  handleClickCategory,
  isOpen,
  onClose,
  category,
  handleClickLesson,
}) => {
  return (
    <div className="container mx-auto flex h-screen w-screen max-w-sm flex-col justify-center px-1">
      <p className="p-4 text-center text-2xl text-gray-800">
        品詞を
        <br />
        選んでください
      </p>
      <CategorySelectButtonList
        categories={categories}
        handleClickCategory={handleClickCategory}
      />
      <LessonSelectDialog
        isOpen={isOpen}
        onClose={onClose}
        category={category}
        handleClickLesson={handleClickLesson}
      />
    </div>
  );
};

export default Presenter;
