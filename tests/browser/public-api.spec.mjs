import { test, expect } from '@playwright/test';
import { targets } from '../../config/targets.mjs';

const hw = targets.find(t => t.id === 'HW').url;

test('HW rejects invalid availability room ID', async ({ request }) => {
  const response = await request.get(
    new URL('/api/availability?roomTypeId=invalid', hw).toString()
  );

  expect(response.status()).toBe(400);
  expect((await response.json()).error).toBe('Invalid room type.');
});

test('HW rejects invalid contact content type', async ({ request }) => {
  const response = await request.post(
    new URL('/api/contact', hw).toString(),
    {
      headers: { 'Content-Type': 'text/plain' },
      data: 'invalid request',
    }
  );

  expect(response.status()).toBe(415);
  expect((await response.json()).error).toBe('INVALID_CONTENT_TYPE');
});

test('HW rejects untrusted contact origin', async ({ request }) => {
  const response = await request.post(
    new URL('/api/contact', hw).toString(),
    {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://invalid-origin.example',
      },
      data: JSON.stringify({}),
    }
  );

  expect(response.status()).toBe(403);
  expect((await response.json()).error).toBe('INVALID_ORIGIN');
});
