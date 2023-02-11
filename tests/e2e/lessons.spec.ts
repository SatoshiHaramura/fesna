import { expect, test } from '@playwright/test';

test.describe('lesson page', () => {
  test('answer the questions displayed', async ({ page }) => {
    await page.goto('/lessons');

    const category = page.getByTestId('category');
    const lessonNumber = page.getByTestId('lesson-number');
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 1');

    const currentQuestionNumber = page.getByTestId('current-question-number');
    const questionWord = page.getByTestId('question-word');
    let correctMark = page.getByText('○');
    let incorrectMark = page.getByText('×');

    await expect(currentQuestionNumber).toHaveText('1');
    await expect(questionWord).toHaveText('include');
    await page.getByRole('button', { name: 'を含む' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('2');
    await expect(questionWord).toHaveText('steal');
    await page.getByRole('button', { name: 'を盗む' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('3');
    await expect(questionWord).toHaveText('exploit');
    await page
      .getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
      .click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('4');
    await expect(questionWord).toHaveText('release');
    await page.getByRole('button', { name: 'を入手可能な状態にする' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('5');
    await expect(questionWord).toHaveText('target');
    await page.getByRole('button', { name: 'を標的とする' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('6');
    await expect(questionWord).toHaveText('allow');
    await page.getByRole('button', { name: 'を可能とする、許可する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('7');
    await expect(questionWord).toHaveText('provide');
    await page.getByRole('button', { name: 'を提供する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('8');
    await expect(questionWord).toHaveText('create');
    await page.getByRole('button', { name: 'を作り出す' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('9');
    await expect(questionWord).toHaveText('compromise');
    await page.getByRole('button', { name: 'を侵害する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    await expect(currentQuestionNumber).toHaveText('10');
    await expect(questionWord).toHaveText('warn');
    await page.getByRole('button', { name: 'を警告する' }).click();
    await expect(correctMark).toBeVisible();
    await expect(incorrectMark).not.toBeVisible();

    const correctAnswerNumber = page.getByTestId('correct-answer-number');
    await expect(correctAnswerNumber).toHaveText('10');
    correctMark = page.getByText('○');
    incorrectMark = page.getByText('×');
    await expect(correctMark).toHaveCount(10);
    await expect(incorrectMark).toHaveCount(0);
  });

  test('answer the questions displayed and repeat the same lesson', async ({
    page,
  }) => {
    await page.goto('/lessons');

    const category = page.getByTestId('category');
    const lessonNumber = page.getByTestId('lesson-number');
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 1');

    const currentQuestionNumber = page.getByTestId('current-question-number');
    const questionWord = page.getByTestId('question-word');

    await expect(questionWord).toHaveText('include');
    await page.getByRole('button', { name: 'を含む' }).click();

    await expect(questionWord).toHaveText('steal');
    await page.getByRole('button', { name: 'を盗む' }).click();

    await expect(questionWord).toHaveText('exploit');
    await page
      .getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
      .click();

    await expect(questionWord).toHaveText('release');
    await page.getByRole('button', { name: 'を入手可能な状態にする' }).click();

    await expect(questionWord).toHaveText('target');
    await page.getByRole('button', { name: 'を標的とする' }).click();

    await expect(questionWord).toHaveText('allow');
    await page.getByRole('button', { name: 'を可能とする、許可する' }).click();

    await expect(questionWord).toHaveText('provide');
    await page.getByRole('button', { name: 'を提供する' }).click();

    await expect(questionWord).toHaveText('create');
    await page.getByRole('button', { name: 'を作り出す' }).click();

    await expect(questionWord).toHaveText('compromise');
    await page.getByRole('button', { name: 'を侵害する' }).click();

    await expect(questionWord).toHaveText('warn');
    await page.getByRole('button', { name: 'を警告する' }).click();

    await page.getByRole('button', { name: 'もう1度' }).click();
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 1');
    await expect(currentQuestionNumber).toHaveText('1');
    await expect(questionWord).toHaveText('include');
  });

  test('answer the questions displayed and do the next lesson', async ({
    page,
  }) => {
    await page.goto('/lessons');

    const category = page.getByTestId('category');
    const lessonNumber = page.getByTestId('lesson-number');
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 1');

    const currentQuestionNumber = page.getByTestId('current-question-number');
    const questionWord = page.getByTestId('question-word');

    await expect(questionWord).toHaveText('include');
    await page.getByRole('button', { name: 'を含む' }).click();

    await expect(questionWord).toHaveText('steal');
    await page.getByRole('button', { name: 'を盗む' }).click();

    await expect(questionWord).toHaveText('exploit');
    await page
      .getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
      .click();

    await expect(questionWord).toHaveText('release');
    await page.getByRole('button', { name: 'を入手可能な状態にする' }).click();

    await expect(questionWord).toHaveText('target');
    await page.getByRole('button', { name: 'を標的とする' }).click();

    await expect(questionWord).toHaveText('allow');
    await page.getByRole('button', { name: 'を可能とする、許可する' }).click();

    await expect(questionWord).toHaveText('provide');
    await page.getByRole('button', { name: 'を提供する' }).click();

    await expect(questionWord).toHaveText('create');
    await page.getByRole('button', { name: 'を作り出す' }).click();

    await expect(questionWord).toHaveText('compromise');
    await page.getByRole('button', { name: 'を侵害する' }).click();

    await expect(questionWord).toHaveText('warn');
    await page.getByRole('button', { name: 'を警告する' }).click();

    await page.getByRole('button', { name: '次のレッスン' }).click();
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 2');
    await expect(currentQuestionNumber).toHaveText('1');
    await expect(questionWord).toHaveText('enable');
  });

  test('answer the questions displayed and go to menu page', async ({
    page,
  }) => {
    await page.goto('/lessons');

    const category = page.getByTestId('category');
    const lessonNumber = page.getByTestId('lesson-number');
    await expect(category).toHaveText('動詞');
    await expect(lessonNumber).toHaveText('Lesson 1');

    const questionWord = page.getByTestId('question-word');

    await expect(questionWord).toHaveText('include');
    await page.getByRole('button', { name: 'を含む' }).click();

    await expect(questionWord).toHaveText('steal');
    await page.getByRole('button', { name: 'を盗む' }).click();

    await expect(questionWord).toHaveText('exploit');
    await page
      .getByRole('button', { name: '(脆弱性)を突いて攻撃する' })
      .click();

    await expect(questionWord).toHaveText('release');
    await page.getByRole('button', { name: 'を入手可能な状態にする' }).click();

    await expect(questionWord).toHaveText('target');
    await page.getByRole('button', { name: 'を標的とする' }).click();

    await expect(questionWord).toHaveText('allow');
    await page.getByRole('button', { name: 'を可能とする、許可する' }).click();

    await expect(questionWord).toHaveText('provide');
    await page.getByRole('button', { name: 'を提供する' }).click();

    await expect(questionWord).toHaveText('create');
    await page.getByRole('button', { name: 'を作り出す' }).click();

    await expect(questionWord).toHaveText('compromise');
    await page.getByRole('button', { name: 'を侵害する' }).click();

    await expect(questionWord).toHaveText('warn');
    await page.getByRole('button', { name: 'を警告する' }).click();

    await page.getByRole('button', { name: 'メニュー選択へ' }).click();
    await expect(page).toHaveURL('/menus');
  });
});
