import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import type { CategoryWithLessons } from '@/types';

import LessonSelectDialog from '@/components/pages/menus/LessonSelectDialog';

describe('LessonSelectDialog component', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
  });
  afterEach(() => {
    mockAllIsIntersecting(false);
  });

  describe('when the dialog is opened', () => {
    test('display the dialog', () => {
      const isOpen = true;
      const onClose = jest.fn();
      const category: CategoryWithLessons = {
        id: 1,
        name: '動詞',
        lessons: [
          { id: 1, categoryId: 1, name: '1' },
          { id: 2, categoryId: 1, name: '2' },
          { id: 3, categoryId: 1, name: '3' },
          { id: 4, categoryId: 1, name: '4' },
        ],
      };
      const handleClickLesson = jest.fn();
      render(
        <LessonSelectDialog
          isOpen={isOpen}
          onClose={onClose}
          category={category}
          handleClickLesson={handleClickLesson}
        />
      );

      const lessonSelectDialog = screen.getByRole('dialog');
      expect(lessonSelectDialog).toBeInTheDocument();
      expect(screen.getByRole('heading')).toHaveTextContent(
        'レッスン番号を選んでください'
      );
    });

    test('event handler is called when the lesson select button is clicked', async () => {
      const isOpen = true;
      const onClose = jest.fn();
      const category: CategoryWithLessons = {
        id: 1,
        name: '動詞',
        lessons: [
          { id: 1, categoryId: 1, name: '1' },
          { id: 2, categoryId: 1, name: '2' },
          { id: 3, categoryId: 1, name: '3' },
          { id: 4, categoryId: 1, name: '4' },
        ],
      };
      const handleClickLesson = jest.fn();
      render(
        <LessonSelectDialog
          isOpen={isOpen}
          onClose={onClose}
          category={category}
          handleClickLesson={handleClickLesson}
        />
      );

      const user = userEvent.setup();
      const lessonSelectButtons = screen.getAllByRole('button');
      await user.click(lessonSelectButtons[0]);

      expect(handleClickLesson).toHaveBeenCalledTimes(1);
    });

    test('event handler is called when the back button is clicked', async () => {
      const isOpen = true;
      const onClose = jest.fn();
      const category: CategoryWithLessons = {
        id: 1,
        name: '動詞',
        lessons: [
          { id: 1, categoryId: 1, name: '1' },
          { id: 2, categoryId: 1, name: '2' },
          { id: 3, categoryId: 1, name: '3' },
          { id: 4, categoryId: 1, name: '4' },
        ],
      };
      const handleClickLesson = jest.fn();
      render(
        <LessonSelectDialog
          isOpen={isOpen}
          onClose={onClose}
          category={category}
          handleClickLesson={handleClickLesson}
        />
      );

      const user = userEvent.setup();
      const backButton = screen.getByRole('button', { name: '戻る' });
      await user.click(backButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the dialog is closed', () => {
    test("doesn't display the dialog", () => {
      const isOpen = false;
      const onClose = jest.fn();
      const category: CategoryWithLessons = {
        id: 1,
        name: '動詞',
        lessons: [
          { id: 1, categoryId: 1, name: '1' },
          { id: 2, categoryId: 1, name: '2' },
          { id: 3, categoryId: 1, name: '3' },
          { id: 4, categoryId: 1, name: '4' },
        ],
      };
      const handleClickLesson = jest.fn();
      render(
        <LessonSelectDialog
          isOpen={isOpen}
          onClose={onClose}
          category={category}
          handleClickLesson={handleClickLesson}
        />
      );

      const lessonSelectDialog = screen.queryByRole('dialog');
      expect(lessonSelectDialog).not.toBeInTheDocument();
    });
  });
});
