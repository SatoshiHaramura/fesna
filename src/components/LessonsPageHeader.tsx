import { FC } from 'react';

type Props = {
  categoryName: string | undefined;
  questionGroupName: string | undefined;
};

const LessonResultHeader: FC<Props> = ({ categoryName, questionGroupName }) => {
  return (
    <div className="flex flex-row justify-center gap-2">
      <div>{categoryName}</div>
      <div>Lesson {questionGroupName}</div>
    </div>
  );
};

export default LessonResultHeader;
