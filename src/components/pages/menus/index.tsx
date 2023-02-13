import React, { FC, useState } from 'react';

import MenusPage from './presenter';
import type { CategoryWithLessons, UserSetting } from '@/types';
import useLocalStorage from 'use-local-storage';

type Props = {
  categories: CategoryWithLessons[];
  transitToLessonsPage: () => void;
};

const Index: FC<Props> = ({ categories, transitToLessonsPage }) => {
  const [userSetting, setUserSetting] = useLocalStorage<UserSetting>(
    'userSetting',
    {
      lessonId: 1,
      playSound: false,
    }
  );
  const [category, setCategory] = useState<CategoryWithLessons>(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickCategory = (category: CategoryWithLessons): void => {
    setCategory(category);
    setIsModalOpen(true);
  };

  const onClose = (): void => setIsModalOpen(false);
  const handleClickLesson = (
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
      handleClickLesson={handleClickLesson}
    ></MenusPage>
  );
};

export default Index;
