import { FC } from 'react';
import { Roboto_Flex } from '@next/font/google';
import { findCategoryByLessonId, findLessonById } from '@/repositories';
import { categoryData, lessonData } from '@/data';

type Props = {
  lessonId: number | undefined;
};

const roboto = Roboto_Flex({
  weight: ['300'],
  preload: false,
});

const LessonsPageHeader: FC<Props> = ({ lessonId }) => {
  const lesson = findLessonById(lessonData, lessonId);
  const category = findCategoryByLessonId(categoryData, lesson?.categoryId);

  return (
    <div className="flex flex-row justify-center gap-2 p-4">
      <h1 data-testid="category">{category?.name}</h1>
      <h1 data-testid="lesson-number" className={`${roboto.className} text-lg`}>
        Lesson{lesson?.name}
      </h1>
    </div>
  );
};

export default LessonsPageHeader;
