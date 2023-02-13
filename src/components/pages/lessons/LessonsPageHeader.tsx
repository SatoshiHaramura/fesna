import { FC } from 'react';

type Props = {
  categoryName: string | undefined;
  lessonName: string | undefined;
};

const LessonResultHeader: FC<Props> = ({ categoryName, lessonName }) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-4">
      <div data-testid="category">{categoryName}</div>
      <div data-testid="lesson-number">Lesson {lessonName}</div>
    </div>
  );
};

export default LessonResultHeader;
