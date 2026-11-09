import { test, expect } from '@playwright/test';
import { targets } from '../../config/targets.mjs';

test.use({
  trace: 'off',
  screenshot: 'off',
  video: 'off',
});

const url = (id, path) => {
  const target = targets.find(t => t.id === id);
  if (!target) throw new Error(`Missing target ${id}`);
  return new URL(path, target.url).toString();
};

test('KMS staff login', async ({ page }) => {
  test.skip(
    !process.env.KMS_TEST_USERNAME || !process.env.KMS_TEST_PASSWORD,
    'Dedicated staging credentials not configured'
  );

  await page.goto(url('KMS', '/login'));
  await page.getByRole('textbox', { name: 'Username' })
    .fill(process.env.KMS_TEST_USERNAME);
  await page.locator('input[type="password"]')
    .fill(process.env.KMS_TEST_PASSWORD);
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page).toHaveURL(
    /\/(order-queue|change-password)(?:[/?#]|$)/,
    { timeout: 20000 }
  );
});

test('WKMS worker login', async ({ page }) => {
  test.skip(
    !process.env.WKMS_TEST_EMAIL || !process.env.WKMS_TEST_PASSWORD,
    'Dedicated staging credentials not configured'
  );

  await page.goto(url('WKMS', '/login'));
  await page.getByRole('textbox', { name: /email/i })
    .fill(process.env.WKMS_TEST_EMAIL);
  await page.locator('input[type="password"]')
    .fill(process.env.WKMS_TEST_PASSWORD);
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page).toHaveURL(
    /\/(tasks|change-password)(?:[/?#]|$)/,
    { timeout: 20000 }
  );
});
