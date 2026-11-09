import { test, expect } from '@playwright/test';
import { targets } from '../../config/targets.mjs';

for (const target of targets) {
  test(`${target.id} browser navigation`, async ({ page }) => {
    const response = await page.goto(target.url, {
      waitUntil: 'domcontentloaded',
    });

    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();
    console.log(`${target.id}: ${page.url()}`);
  });
}
