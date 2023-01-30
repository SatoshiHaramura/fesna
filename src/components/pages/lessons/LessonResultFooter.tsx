import { FC } from 'react';
import SameLessonButton from '@/components/pages/lessons/SameLessonButton';
import NextLessonButton from '@/components/pages/lessons/NextLessonButton';
import MenuButton from '@/components/pages/lessons/MenuButton';

type Props = {
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
  handleClickMenuButton: () => void;
};
const LessonResultFooter: FC<Props> = ({
  handleClickSameLessonButton,
  handleClickNextLessonButton,
  handleClickMenuButton,
}) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-gray-50">
      <div className="flex flex-row justify-center">
        <SameLessonButton
          handleClickSameLessonButton={handleClickSameLessonButton}
        />
        <NextLessonButton
          handleClickNextLessonButton={handleClickNextLessonButton}
        />
      </div>
      <div className="flex flex-row justify-center">
        <MenuButton handleClickMenuButton={handleClickMenuButton} />
      </div>
    </div>
  );
};

export default LessonResultFooter;
