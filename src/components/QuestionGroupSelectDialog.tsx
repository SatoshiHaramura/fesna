import React from 'react';
import { Dialog } from '@headlessui/react';

import type { CategoryWithQuestionGroups } from '@/types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryWithQuestionGroups;
  handleClickQuestionGroup: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const QuestionGroupSelectDialog = (props: Props) => {
  const { isOpen, onClose, category, handleClickQuestionGroup } = props;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-60 p-4">
        <Dialog.Panel className="border-full max-h-96 w-80 rounded-xl border border-gray-400 bg-white">
          <Dialog.Title className="m-2 text-center font-sans text-xl font-thin">
            レッスン番号を
            <br />
            選んでください
          </Dialog.Title>
          <div className="grid  grid-cols-4 grid-rows-4 justify-items-center">
            {category.questionGroups.map((questionGroup) => (
              <button
                key={questionGroup.id}
                value={questionGroup.id}
                onClick={handleClickQuestionGroup}
                className="m-1 h-14 w-14 rounded-2xl border border-gray-300 bg-gray-100 hover:bg-opacity-10"
              >
                {questionGroup.name}
              </button>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={onClose}
              className="m-1 w-20 rounded-full border border-gray-300 bg-gray-100 py-2 px-1 hover:bg-opacity-10"
            >
              戻る
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default QuestionGroupSelectDialog;
