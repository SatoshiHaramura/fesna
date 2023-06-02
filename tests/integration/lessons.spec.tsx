import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LessonsPage from '@/pages/lessons';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('lesson page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should have a title tag', () => {
    render(<LessonsPage />);
    expect(document.title).toBe('レッスン | Stock Word');
  });

  test('answer the default lesson questions', async () => {
    render(<LessonsPage />);

    const category = screen.getByTestId('category');
    const lessonNumber = screen.getByTestId('lesson-number');
    expect(category).toHaveTextContent('動詞');
    expect(lessonNumber).toHaveTextContent('Lesson1');

    const currentQuestionNumber = screen.getByTestId('current-question-number');
    const questionWord = screen.getByTestId('question-word');
    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(questionWord).toHaveTextContent('include');

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'を含む' }));

    let answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');
    await user.click(screen.getByRole('button', { name: 'を盗む' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');
    await user.click(
      screen.getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
    );

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(questionWord).toHaveTextContent('release');
    await user.click(
      screen.getByRole('button', { name: 'を入手可能な状態にする' })
    );

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(questionWord).toHaveTextContent('target');
    await user.click(screen.getByRole('button', { name: 'を標的とする' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(questionWord).toHaveTextContent('allow');
    await user.click(
      screen.getByRole('button', { name: 'を可能とする、許可する' })
    );

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(questionWord).toHaveTextContent('provide');
    await user.click(screen.getByRole('button', { name: 'を提供する' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(questionWord).toHaveTextContent('create');
    await user.click(screen.getByRole('button', { name: 'を作り出す' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(questionWord).toHaveTextContent('compromise');
    await user.click(screen.getByRole('button', { name: 'を侵害する' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(questionWord).toHaveTextContent('warn');
    await user.click(screen.getByRole('button', { name: 'を警告する' }));

    answerJudgmentMark = await screen.findByTestId('answer-judgment-mark');
    expect(answerJudgmentMark).toHaveTextContent('○');

    await waitFor(() => {
      expect(screen.getByTestId('number-of-correct-answers')).toHaveTextContent(
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
    let choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(questionWord).toHaveTextContent('release');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(questionWord).toHaveTextContent('target');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(questionWord).toHaveTextContent('allow');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(questionWord).toHaveTextContent('provide');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(questionWord).toHaveTextContent('create');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(questionWord).toHaveTextContent('compromise');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(questionWord).toHaveTextContent('warn');

    choiceButtonList = screen.getAllByTestId('choice-button');
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
    expect(lessonNumber).toHaveTextContent('Lesson1');

    const currentQuestionNumber = screen.getByTestId('current-question-number');
    const questionWord = screen.getByTestId('question-word');
    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(questionWord).toHaveTextContent('include');

    const user = userEvent.setup();
    let choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('2');
    });
    expect(questionWord).toHaveTextContent('steal');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('3');
    });
    expect(questionWord).toHaveTextContent('exploit');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('4');
    });
    expect(questionWord).toHaveTextContent('release');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('5');
    });
    expect(questionWord).toHaveTextContent('target');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('6');
    });
    expect(questionWord).toHaveTextContent('allow');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('7');
    });
    expect(questionWord).toHaveTextContent('provide');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('8');
    });
    expect(questionWord).toHaveTextContent('create');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('9');
    });
    expect(questionWord).toHaveTextContent('compromise');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(currentQuestionNumber).toHaveTextContent('10');
    });
    expect(questionWord).toHaveTextContent('warn');

    choiceButtonList = screen.getAllByTestId('choice-button');
    await user.click(choiceButtonList[0]);

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: '次のレッスン' })
      ).toBeInTheDocument();
    });
    await user.click(screen.getByRole('button', { name: '次のレッスン' }));

    expect(category).toHaveTextContent('動詞');
    expect(lessonNumber).toHaveTextContent('Lesson2');
    expect(currentQuestionNumber).toHaveTextContent('1');
    expect(screen.getByTestId('question-word')).toHaveTextContent('enable');
  }, 30000);

  test('the speaker x mark icon switches to the speaker wave icon when the speaker toggle button is clicked', async () => {
    render(<LessonsPage />);

    const speakerXMarkButtonIcon = screen.getByRole('button', {
      name: '音声読み上げ機能が無効になっています',
    });
    expect(speakerXMarkButtonIcon).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(speakerXMarkButtonIcon);

    const speakerWaveButtonIcon = screen.getByRole('button', {
      name: '音声読み上げ機能が有効になっています',
    });
    expect(speakerWaveButtonIcon).toBeInTheDocument();
  });

  test('the speaker toggle icon button switches to the speaker x mark button icon when reloaded', async () => {
    const { unmount } = render(<LessonsPage />);

    const speakerXMarkButtonIcon = screen.getByRole('button', {
      name: '音声読み上げ機能が無効になっています',
    });
    expect(speakerXMarkButtonIcon).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(speakerXMarkButtonIcon);

    const speakerWaveButtonIcon = screen.getByRole('button', {
      name: '音声読み上げ機能が有効になっています',
    });
    expect(speakerWaveButtonIcon).toBeInTheDocument();

    await act(() => {
      window.dispatchEvent(new Event('unload'));
    });
    unmount();
    render(<LessonsPage />);

    const reloadedSpeakerXMarkButtonIcon = screen.getByRole('button', {
      name: '音声読み上げ機能が無効になっています',
    });
    expect(reloadedSpeakerXMarkButtonIcon).toBeInTheDocument();
  });
});
