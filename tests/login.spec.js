import { test, expect } from '@playwright/test';

test('Login flow: invalid and valid login attempts', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Invalid login
  await page.fill('#email-input', 'wrong@email.com');
  await page.fill('#password-input', 'wrongpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid email or password. Try again.')).toBeVisible(); 

  // Valid login
  await page.fill('#email-input', 'test@maddox123.ai');
  await page.fill('#password-input', 'supersecure');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost:3000/');
  // OR if it still goes to /home, just increase timeout like:
  await expect(page).toHaveURL('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();


  // Ensure Home is visible
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
});