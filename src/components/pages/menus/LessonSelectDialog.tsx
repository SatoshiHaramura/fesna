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
      <div className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 overflow-y-scroll">
        <div className="flex min-h-full items-center justify-center p-6">
          <Dialog.Panel className="mx-auto max-w-sm rounded-3xl">
            <div className="max-w-sm rounded-2xl bg-stone-50 p-4 text-left">
              <Dialog.Title
                as="h2"
                className="py-6 text-center text-2xl text-gray-800"
              >
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
                  className="w-20 rounded-full border border-gray-400 bg-gray-100 px-4 py-2 hover:bg-gray-50"
                >
                  戻る
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default LessonSelectDialog;
