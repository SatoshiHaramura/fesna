import React, { FC, useState } from 'react';

import MenusPage from './presenter';
import type { CategoryWithLessons, UserSetting } from '@/types';

type Props = {
  categories: CategoryWithLessons[];
  userSetting: UserSetting;
  setUserSetting: (userSetting: UserSetting) => void;
  transitToLessonsPage: () => void;
};

const Index: FC<Props> = (props) => {
  const { categories, userSetting, setUserSetting, transitToLessonsPage } =
    props;

  const [category, setCategory] = useState<CategoryWithLessons>(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickCategory = (category: CategoryWithLessons): void => {
    setCategory(category);
    setIsModalOpen(true);
  };

  const onClose = (): void => setIsModalOpen(false);
  const handleClickQuestionGroup = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setUserSetting({
      ...userSetting,
      lessonId: Number(event.currentTarget.value),
    });
    transitToLessonsPage();
  };

  return (
    <MenusPage
      categories={categories}
      handleClickCategory={handleClickCategory}
      isOpen={isModalOpen}
      onClose={onClose}
      category={category}
      handleClickQuestionGroup={handleClickQuestionGroup}
    ></MenusPage>
  );
};

export default Index;
