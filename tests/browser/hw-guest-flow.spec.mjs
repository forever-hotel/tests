import { test, expect } from '@playwright/test';
import { targets } from '../../config/targets.mjs';

const hw = targets.find(t => t.id === 'HW').url;

const url = path => new URL(path, hw).toString();

test('HW room catalogue and availability search are accessible', async ({ page }) => {
  const response = await page.goto(url('/rooms'));

  expect(response.status()).toBe(200);

  await expect(
    page.getByRole('heading', { name: /Rooms.*Suites/i })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Explore Our Rooms' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Search availability' })
  ).toBeVisible();
});

test('HW unauthenticated guest cannot access booking profile', async ({ page }) => {
  await page.goto(url('/profile'));

  await expect(page).toHaveURL(/\/sign-in(?:[?#]|$)/);
});

test('HW booking confirmation requires guest authentication', async ({ page }) => {
  await page.goto(
    url('/booking/confirmation?bookingId=11111111-1111-4111-8111-111111111111')
  );

  await expect(page).toHaveURL(/\/sign-in(?:[?#]|$)/);
});
