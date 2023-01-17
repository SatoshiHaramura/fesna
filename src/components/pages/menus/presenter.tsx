import React, { FC } from 'react';
import CategorySelectButtonList from '@/components/CategorySelectButtonList';
import QuestionGroupSelectDialog from '@/components/QuestionGroupSelectDialog';
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
    <>
      <p className="mx-4 mt-24 mb-4 text-center font-sans text-2xl font-thin text-gray-800">
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
    </>
  );
};

export default Presenter;
