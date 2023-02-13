import { expect, test } from '@playwright/test';

test.describe('menu page', () => {
  test('choose a category verb and choose a lesson number', async ({
    page,
  }) => {
    await page.goto('/menus');

    await page.getByRole('button', { name: '動詞' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();

    await expect(page).toHaveURL('/lessons');
    await expect(page.getByTestId('category')).toHaveText('動詞');
    await expect(page.getByTestId('lesson-number')).toHaveText('Lesson 1');
  });

  test('choose a category noun and choose a lesson number', async ({
    page,
  }) => {
    await page.goto('/menus');

    await page.getByRole('button', { name: '名詞' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();

    await expect(page).toHaveURL('/lessons');
    await expect(page.getByTestId('category')).toHaveText('名詞');
    await expect(page.getByTestId('lesson-number')).toHaveText('Lesson 1');
  });

  test('choose a category adjective and choose a lesson number', async ({
    page,
  }) => {
    await page.goto('/menus');

    await page.getByRole('button', { name: '形容詞' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();

    await expect(page).toHaveURL('/lessons');
    await expect(page.getByTestId('category')).toHaveText('形容詞');
    await expect(page.getByTestId('lesson-number')).toHaveText('Lesson 1');
  });

  test('choose a category adverb and choose a lesson number', async ({
    page,
  }) => {
    await page.goto('/menus');

    await page.getByRole('button', { name: '副詞' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();

    await expect(page).toHaveURL('/lessons');
    await expect(page.getByTestId('category')).toHaveText('副詞');
    await expect(page.getByTestId('lesson-number')).toHaveText('Lesson 1');
  });
});
