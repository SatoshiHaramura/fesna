import { render, screen, within } from '@testing-library/react';

import ChoiceButtonList from '@/components/pages/lessons/ChoiceButtonList';

describe('ChoiceButtonList component', () => {
  test('display all choice buttons', () => {
    const choices: string[] = [
      'を完了する',
      'を避ける',
      'に注意を払う、と述べる',
      'を含む',
    ];
    const handleClickChoiceButton = jest.fn();
    const judgedAnswer: boolean | undefined = undefined;
    const answer = 'を含む';
    render(
      <ChoiceButtonList
        choices={choices}
        handleClickChoiceButton={handleClickChoiceButton}
        judgedAnswer={judgedAnswer}
        answer={answer}
      />
    );

    const choiceButtonList = screen.getByRole('list');
    expect(choiceButtonList).toBeInTheDocument();
    expect(within(choiceButtonList).getAllByRole('listitem')).toHaveLength(4);
  });
});
