import { FC } from 'react';
import { Roboto_Flex } from '@next/font/google';

type Props = {
  categoryName: string | undefined;
  lessonName: string | undefined;
};

const roboto = Roboto_Flex({
  weight: ['300'],
  preload: false,
});

const LessonResultHeader: FC<Props> = ({ categoryName, lessonName }) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-4">
      <h1 data-testid="category">{categoryName}</h1>
      <h1 data-testid="lesson-number" className={`${roboto.className} text-lg`}>
        Lesson{lessonName}
      </h1>
    </div>
  );
};

export default LessonResultHeader;
