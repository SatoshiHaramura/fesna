import { expect, test } from '@playwright/test';

test.describe('lesson page', () => {
  test('answer the questions displayed', async ({ page }) => {
    await page.goto('/lessons');

    const category = page.getByTestId('category');
    const lessonNumber = page.getByTestId('lesson-number');
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson1');

    const currentQuestionNumber = page.getByTestId('current-question-number');
    const questionWord = page.getByTestId('question-word');
    let correctMark = page.getByText('○');
    let incorrectMark = page.getByText('×');

    await expect(currentQuestionNumber).toHaveText('1');
    await expect(questionWord).toHaveText('include');
    await page.getByRole('button', { name: 'を含む' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('2');
    await expect(questionWord).toHaveText('steal');
    await page.getByRole('button', { name: 'を盗む' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('3');
    await expect(questionWord).toHaveText('exploit');
    await page
      .getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
      .click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('4');
    await expect(questionWord).toHaveText('release');
    await page.getByRole('button', { name: 'を入手可能な状態にする' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('5');
    await expect(questionWord).toHaveText('target');
    await page.getByRole('button', { name: 'を標的とする' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('6');
    await expect(questionWord).toHaveText('allow');
    await page.getByRole('button', { name: 'を可能とする、許可する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('7');
    await expect(questionWord).toHaveText('provide');
    await page.getByRole('button', { name: 'を提供する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('8');
    await expect(questionWord).toHaveText('create');
    await page.getByRole('button', { name: 'を作り出す' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('9');
    await expect(questionWord).toHaveText('compromise');
    await page.getByRole('button', { name: 'を侵害する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    await expect(currentQuestionNumber).toHaveText('10');
    await expect(questionWord).toHaveText('warn');
    await page.getByRole('button', { name: 'を警告する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).toBeHidden();

    const numberOfCorrectAnswers = page.getByTestId(
      'number-of-correct-answers'
    );
    await expect(numberOfCorrectAnswers).toHaveText('10');
    correctMark = page.getByText('○');
    incorrectMark = page.getByText('×');
    await expect(correctMark).toHaveCount(10);
    await expect(incorrectMark).toHaveCount(0);
  });

  test('the speaker toggle button switches to the speaker x mark icon button when reloaded', async ({
    page,
  }) => {
    await page.goto('/lessons');

    const speakerXMarkButtonIcon = page.getByRole('button', {
      name: '音声読み上げ機能が無効になっています',
    });
    await expect(speakerXMarkButtonIcon).toBeVisible();

    await speakerXMarkButtonIcon.click();

    const speakerWaveButtonIcon = page.getByRole('button', {
      name: '音声読み上げ機能が有効になっています',
    });
    await expect(speakerWaveButtonIcon).toBeVisible();

    await page.reload();

    await expect(speakerXMarkButtonIcon).toBeVisible();
  });
});
