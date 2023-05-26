import { render, RenderResult, screen } from '@testing-library/react';

import LessonsPageHeader from '@/components/pages/lessons/LessonsPageHeader';

describe('LessonsPageHeader component', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<LessonsPageHeader lessonId={1} />);
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the category name', () => {
    const category = screen.getByTestId('category');
    expect(category).toHaveTextContent('動詞');
  });

  test('display the lesson number', () => {
    const lessonNumber = screen.getByTestId('lesson-number');
    expect(lessonNumber).toHaveTextContent('Lesson1');
  });
});
