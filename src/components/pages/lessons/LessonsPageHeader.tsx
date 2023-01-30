import { FC } from 'react';

type Props = {
  categoryName: string | undefined;
  lessonName: string | undefined;
};

const LessonResultHeader: FC<Props> = ({ categoryName, lessonName }) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-4">
      <div>{categoryName}</div>
      <div>Lesson {lessonName}</div>
    </div>
  );
};

export default LessonResultHeader;
