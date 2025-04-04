import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Log in before each test
  await page.goto('http://localhost:3000/login');
  await page.fill('#email-input', 'test@maddox123.ai');
  await page.fill('#password-input', 'supersecure');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost:3000/');
});

test('Counter increment, decrement, and reset', async ({ page }) => {
  // Increment
  await page.getByRole('button', { name: '+' }).click();
  await expect(page.getByText(/Counter\s*1/)).toBeVisible();

  // Decrement
  await page.getByRole('button', { name: '-' }).click();
  await expect(page.getByText(/Counter\s*0/)).toBeVisible();

  // + + + - → should be 2
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '-' }).click();
  await expect(page.getByText(/Counter\s*2/)).toBeVisible();

  // Reset → should be 0
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.getByText(/Counter\s*0/)).toBeVisible();
});
