import { test, expect } from '@playwright/test';
import { targets } from '../../config/targets.mjs';

const getUrl = (id, path) => {
  const target = targets.find(t => t.id === id);
  if (!target) throw new Error(`Missing target: ${id}`);
  return new URL(path, target.url).toString();
};

test('KMS protects kitchen order queue', async ({ page }) => {
  await page.goto(getUrl('KMS', '/order-queue'));

  await expect(
    page.getByRole('heading', { name: 'Kitchen Management Login' })
  ).toBeVisible();
});

test('WKMS protects worker tasks', async ({ page }) => {
  await page.goto(getUrl('WKMS', '/tasks'));

  await expect(
    page.getByRole('heading', { name: 'Worker sign in' })
  ).toBeVisible();
});
