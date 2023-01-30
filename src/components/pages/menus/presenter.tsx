import React, { FC } from 'react';
import CategorySelectButtonList from '@/components/pages/menus/CategorySelectButtonList';
import QuestionGroupSelectDialog from '@/components/pages/menus/QuestionGroupSelectDialog';
import type { CategoryWithQuestionGroups } from '@/types';

type Props = {
  categories: CategoryWithQuestionGroups[];
  handleClickCategory: (category: CategoryWithQuestionGroups) => void;
  isOpen: boolean;
  onClose: () => void;
  category: CategoryWithQuestionGroups;
  handleClickQuestionGroup: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Presenter: FC<Props> = (props) => {
  const {
    categories,
    handleClickCategory,
    isOpen,
    onClose,
    category,
    handleClickQuestionGroup,
  } = props;

  return (
    <div className="container mx-auto flex h-screen w-screen max-w-sm flex-col justify-center px-1">
      <p className="p-4 text-center font-sans text-2xl font-thin text-gray-800">
        品詞を
        <br />
        選んでください
      </p>
      <CategorySelectButtonList
        categories={categories}
        handleClickCategory={handleClickCategory}
      />
      <QuestionGroupSelectDialog
        isOpen={isOpen}
        onClose={onClose}
        category={category}
        handleClickQuestionGroup={handleClickQuestionGroup}
      />
    </div>
  );
};

export default Presenter;
