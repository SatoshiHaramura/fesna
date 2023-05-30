import { useRouter } from 'next/router';

import React, { FC, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import MenusPage from './presenter';
import type { CategoryWithLessons, UserSetting } from '@/types';

import useDialog from '@/hooks/useDialog';

type Props = {
  categories: CategoryWithLessons[];
};

const Index: FC<Props> = ({ categories }) => {
  const [userSetting, setUserSetting] = useLocalStorageState<UserSetting>(
    'userSetting',
    {
      defaultValue: {
        lessonId: 1,
        automaticTextToSpeechMode: false,
      },
    }
  );
  const [category, setCategory] = useState<CategoryWithLessons>(categories[0]);
  const [
    isCategorySelectDialogOpen,
    openCategorySelectDialog,
    closeCategorySelectDialog,
  ] = useDialog();

  const handleClickCategory = (category: CategoryWithLessons): void => {
    setCategory(category);
    openCategorySelectDialog();
  };

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
      isOpen={isCategorySelectDialogOpen}
      onClose={closeCategorySelectDialog}
      category={category}
      handleClickLesson={handleClickLesson}
    ></MenusPage>
  );
};

export default Index;
