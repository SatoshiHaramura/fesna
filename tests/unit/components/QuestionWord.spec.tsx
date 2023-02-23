import { render, screen } from '@testing-library/react';

import QuestionWord from '@/components/pages/lessons/QuestionWord';

describe('QuestionWord component', () => {
  const questionWord = 'include';
  test('render question word', () => {
    render(
      <QuestionWord questionWord={questionWord} judgedAnswer={undefined} />
    );
    expect(screen.getByText('include')).toBeInTheDocument();
    expect(
      screen.getByTestId('correct-mark-or-incorrect-mark')
    ).toBeEmptyDOMElement();
  });

  test('correct answer mark is display when answer is correct', () => {
    render(<QuestionWord questionWord={questionWord} judgedAnswer={true} />);
    expect(
      screen.getByTestId('correct-mark-or-incorrect-mark')
    ).toHaveTextContent('○');
  });

  test('incorrect answer mark is display when answer is incorrect', () => {
    render(<QuestionWord questionWord={questionWord} judgedAnswer={false} />);
    expect(
      screen.getByTestId('correct-mark-or-incorrect-mark')
    ).toHaveTextContent('✗');
  });
});
