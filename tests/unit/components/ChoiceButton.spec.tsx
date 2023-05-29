import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ChoiceButton from '@/components/pages/lessons/ChoiceButton';

describe('ChoiceButton component', () => {
  describe('when unanswered', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer: undefined | boolean = undefined;
    const index = 0;
    const correctChoiceIndex = 0;

    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <ChoiceButton
          choice={choice}
          handleClickChoiceButton={handleClickChoiceButton}
          judgedAnswer={judgedAnswer}
          index={index}
          correctChoiceIndex={correctChoiceIndex}
        />
      );
    });
    afterEach(() => {
      renderResult.unmount();
    });

    test('is clickable', async () => {
      const choiceButton = renderResult.getByRole('button');
      expect(choiceButton).toBeInTheDocument();
      await expect(choiceButton).toBeEnabled();
    });

    test('have style', async () => {
      const choiceButton = renderResult.getByRole('button');
      await expect(choiceButton).toHaveClass(
        'bg-slate-100 bg-opacity-40 border-slate-300 text-gray-800'
      );
    });
  });

  describe('when the answer is correct', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer = true;
    const index = 0;
    const correctChoiceIndex = 0;

    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <ChoiceButton
          choice={choice}
          handleClickChoiceButton={handleClickChoiceButton}
          judgedAnswer={judgedAnswer}
          index={index}
          correctChoiceIndex={correctChoiceIndex}
        />
      );
    });
    afterEach(() => {
      renderResult.unmount();
    });

    test('is unclickable', async () => {
      const choiceButton = renderResult.getByRole('button');
      expect(choiceButton).toBeInTheDocument();
      await expect(choiceButton).toBeDisabled();
    });

    test('have style', async () => {
      const choiceButton = renderResult.getByRole('button');
      await expect(choiceButton).toHaveClass(
        'bg-lime-100 border-lime-400 text-gray-800'
      );
    });
  });

  describe('when the answer is incorrect', () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer: undefined | boolean = false;
    const index = 0;
    const correctChoiceIndex = 1;

    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <ChoiceButton
          choice={choice}
          handleClickChoiceButton={handleClickChoiceButton}
          judgedAnswer={judgedAnswer}
          index={index}
          correctChoiceIndex={correctChoiceIndex}
        />
      );
    });
    afterEach(() => {
      renderResult.unmount();
    });

    test('is unclickable', async () => {
      const choiceButton = renderResult.getByRole('button');
      expect(choiceButton).toBeInTheDocument();
      await expect(choiceButton).toBeDisabled();
    });

    test('have style', async () => {
      const choiceButton = renderResult.getByRole('button');
      await expect(choiceButton).toHaveClass(
        'bg-slate-50 bg-opacity-80 border-slate-200 text-gray-400'
      );
    });
  });

  test('event handler is called when the choice button is clicked', async () => {
    const choice = 'を含む';
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer: undefined | boolean = undefined;
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

    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));

    expect(handleClickChoiceButton).toHaveBeenCalledTimes(1);
  });
});
