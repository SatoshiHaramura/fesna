import { render, screen } from '@testing-library/react';

import ChoiceButton from '@/components/pages/lessons/ChoiceButton';

describe('ChoiceButton component', () => {
  test('choice button for unanswered status', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer = undefined;
    const index = 0;
    const correctChoiceIndex = 0;
    render(
      <ChoiceButton
        choice={choice}
        handleClickChoiceButton={handleClickChoiceButton}
        judgedAnswer={judgedAnswer}
        index={index}
        correctChoiceIndex={correctChoiceIndex}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
    expect(screen.getByRole('button')).toHaveClass(
      'bg-gray-50 hover:bg-opacity-10'
    );
  });

  test('choice button for correct answer', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer = true;
    const index = 0;
    const correctChoiceIndex = 0;
    render(
      <ChoiceButton
        choice={choice}
        handleClickChoiceButton={handleClickChoiceButton}
        judgedAnswer={judgedAnswer}
        index={index}
        correctChoiceIndex={correctChoiceIndex}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass(
      'bg-lime-100 border-lime-400'
    );
  });

  test('choice button for incorrect answer', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer = false;
    const index = 0;
    const correctChoiceIndex = 1;
    render(
      <ChoiceButton
        choice={choice}
        handleClickChoiceButton={handleClickChoiceButton}
        judgedAnswer={judgedAnswer}
        index={index}
        correctChoiceIndex={correctChoiceIndex}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('bg-gray-50');
  });
});
