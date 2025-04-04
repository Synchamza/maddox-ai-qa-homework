import { test, expect } from '@playwright/test';

test('Logout takes user back to login', async ({ page }) => {

  await page.goto('http://localhost:3000/login');

  // Fill in valid credentials
  await page.fill('#email-input', 'test@maddox123.ai');
  await page.fill('#password-input', 'supersecure');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Confirm successful login by checking the URL
  await expect(page).toHaveURL('http://localhost:3000/');

  // Click the logout button
  await page.getByRole('button', { name: 'Logout' }).click();

  // Confirm that the login UI is shown again
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

});
