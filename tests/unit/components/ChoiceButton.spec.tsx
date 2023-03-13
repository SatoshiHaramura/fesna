import { render, screen } from '@testing-library/react';

import ChoiceButton from '@/components/pages/lessons/ChoiceButton';

describe('ChoiceButton component', () => {
  test('choice button for unanswered status', async () => {
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
    await expect(screen.getByRole('button')).toBeEnabled();
    await expect(screen.getByRole('button')).toHaveClass(
      'bg-slate-100 bg-opacity-40 border-slate-300 text-gray-800'
    );
  });

  test('choice button for correct answer', async () => {
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
    await expect(screen.getByRole('button')).toBeDisabled();
    await expect(screen.getByRole('button')).toHaveClass(
      'bg-lime-100 border-lime-400 text-gray-800'
    );
  });

  test('choice button for incorrect answer', async () => {
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
    await expect(screen.getByRole('button')).toBeDisabled();
    await expect(screen.getByRole('button')).toHaveClass(
      'bg-slate-50 bg-opacity-80 border-slate-200 text-gray-400'
    );
  });
});
