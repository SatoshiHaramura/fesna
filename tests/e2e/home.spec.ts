import { expect, test } from '@playwright/test';

test.describe('home page', () => {
  test('click the start button and go to menu page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'はじめてみる' }).click();

    await expect(page).toHaveURL('/menus');
  });
});
