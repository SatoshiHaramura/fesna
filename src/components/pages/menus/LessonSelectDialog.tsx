import React from 'react';
import { Dialog } from '@headlessui/react';

import type { CategoryWithLessons } from '@/types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryWithLessons;
  handleClickLesson: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const LessonSelectDialog = ({
  isOpen,
  onClose,
  category,
  handleClickLesson,
}: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-40 p-1">
        <Dialog.Panel className="border-full max-h-full w-80 rounded-xl border border-gray-400 bg-white px-4">
          <Dialog.Title className="py-6 text-center text-2xl text-gray-800">
            レッスン番号を
            <br />
            選んでください
          </Dialog.Title>
          <div className="grid grid-cols-4 grid-rows-4 justify-items-center gap-2">
            {category.lessons.map((lesson) => (
              <button
                key={lesson.id}
                value={lesson.id}
                onClick={handleClickLesson}
                className="h-16 w-16 rounded-3xl border border-cyan-500 bg-cyan-500 bg-opacity-5 text-xl hover:bg-opacity-30"
              >
                {lesson.name}
              </button>
            ))}
          </div>
          <div className="py-6 text-center">
            <button
              onClick={onClose}
              className="w-20 rounded-full border border-gray-300 py-2 px-1 hover:bg-gray-50"
            >
              戻る
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LessonSelectDialog;
