import { FC } from 'react';
import SameLessonButton from '@/components/SameLessonButton';
import NextLessonButton from '@/components/NextLessonButton';
import MenuButton from '@/components/MenuButton';

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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50">
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
