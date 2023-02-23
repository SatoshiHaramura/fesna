import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LessonsPage from '@/pages/lessons';

jest.mock('next/router', () => require('next-router-mock'));
describe('lesson page', () => {
  test('answer the default lesson questions', async () => {
    render(<LessonsPage />);

    const category = screen.getByTestId('category');
    const lessonNumber = screen.getByTestId('lesson-number');
    expect(category).toHaveTextContent('動詞');
    expect(lessonNumber).toHaveTextContent('Lesson 1');

    const currentQuestionNumber = screen.getByTestId('current-question-number');
    const questionWord = screen.getByTestId('question-word');
    const correctMarkOrIncorrectMark = await screen.findByTestId(
      'correct-mark-or-incorrect-mark'
    );

    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(questionWord).toHaveTextContent('include');
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'を含む' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');
    await user.click(screen.getByRole('button', { name: 'を盗む' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');
    await user.click(
      screen.getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
    );
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(currentQuestionNumber).toHaveTextContent('4');
    expect(questionWord).toHaveTextContent('release');
    await user.click(
      screen.getByRole('button', { name: 'を入手可能な状態にする' })
    );
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(currentQuestionNumber).toHaveTextContent('5');
    expect(questionWord).toHaveTextContent('target');
    await user.click(screen.getByRole('button', { name: 'を標的とする' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(currentQuestionNumber).toHaveTextContent('6');
    expect(questionWord).toHaveTextContent('allow');
    await user.click(
      screen.getByRole('button', { name: 'を可能とする、許可する' })
    );
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(currentQuestionNumber).toHaveTextContent('7');
    expect(questionWord).toHaveTextContent('provide');
    await user.click(screen.getByRole('button', { name: 'を提供する' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(currentQuestionNumber).toHaveTextContent('8');
    expect(questionWord).toHaveTextContent('create');
    await user.click(screen.getByRole('button', { name: 'を作り出す' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(currentQuestionNumber).toHaveTextContent('9');
    expect(questionWord).toHaveTextContent('compromise');
    await user.click(screen.getByRole('button', { name: 'を侵害する' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(currentQuestionNumber).toHaveTextContent('10');
    expect(questionWord).toHaveTextContent('warn');
    await user.click(screen.getByRole('button', { name: 'を警告する' }));
    expect(correctMarkOrIncorrectMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(screen.getByTestId('correct-answer-number')).toHaveTextContent(
        '10'
      );
    });
    const correctMark = screen.getAllByText('○');
    expect(correctMark).toHaveLength(10);
    const incorrectMark = screen.queryByText('×');
    expect(incorrectMark).not.toBeInTheDocument();
  }, 30000);

  test('answer the default lesson questions and repeat the same lesson', async () => {
    render(<LessonsPage />);

    const currentQuestionNumber = screen.getByTestId('current-question-number');
    const questionWord = screen.getByTestId('question-word');

    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(questionWord).toHaveTextContent('include');
    const user = userEvent.setup();
    const choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(questionWord).toHaveTextContent('release');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(questionWord).toHaveTextContent('target');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(questionWord).toHaveTextContent('allow');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(questionWord).toHaveTextContent('provide');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(questionWord).toHaveTextContent('create');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(questionWord).toHaveTextContent('compromise');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(questionWord).toHaveTextContent('warn');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'もう1度' })
      ).toBeInTheDocument();
    });
    await user.click(screen.getByRole('button', { name: 'もう1度' }));
    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(screen.getByTestId('question-word')).toHaveTextContent('include');
  }, 30000);

  test('answer the default lesson questions and do the next lesson', async () => {
    render(<LessonsPage />);

    const category = screen.getByTestId('category');
    const lessonNumber = screen.getByTestId('lesson-number');
    expect(category).toHaveTextContent('動詞');
    expect(lessonNumber).toHaveTextContent('Lesson 1');

    const currentQuestionNumber = screen.getByTestId('current-question-number');
    const questionWord = screen.getByTestId('question-word');

    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(questionWord).toHaveTextContent('include');
    const user = userEvent.setup();
    const choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(questionWord).toHaveTextContent('release');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(questionWord).toHaveTextContent('target');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(questionWord).toHaveTextContent('allow');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(questionWord).toHaveTextContent('provide');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(questionWord).toHaveTextContent('create');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(questionWord).toHaveTextContent('compromise');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(questionWord).toHaveTextContent('warn');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: '次のレッスン' })
      ).toBeInTheDocument();
    });
    await user.click(screen.getByRole('button', { name: '次のレッスン' }));
    expect(category).toHaveTextContent('動詞');
    expect(lessonNumber).toHaveTextContent('Lesson 2');
    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(screen.getByTestId('question-word')).toHaveTextContent('enable');
  }, 30000);
});
