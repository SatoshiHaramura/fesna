import { useRouter } from 'next/router';

import React, { FC, useState } from 'react';

import MenusPage from './presenter';
import type { CategoryWithLessons } from '@/types';
import useLocalStorageState from 'use-local-storage-state';

type Props = {
  categories: CategoryWithLessons[];
};

const Index: FC<Props> = ({ categories }) => {
  const [userSetting, setUserSetting] = useLocalStorageState('userSetting', {
    defaultValue: {
      lessonId: 1,
      playSound: false,
    },
  });
  const [category, setCategory] = useState<CategoryWithLessons>(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickCategory = (category: CategoryWithLessons): void => {
    setCategory(category);
    setIsModalOpen(true);
  };

  const onClose = (): void => setIsModalOpen(false);
  const router = useRouter();
  const transitToLessonsPage = (): void => {
    router.push('/lessons');
  };
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
