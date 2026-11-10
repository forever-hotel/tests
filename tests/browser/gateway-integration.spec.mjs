import { test, expect } from '@playwright/test';

const gateway = process.env.GATEWAY_URL?.trim();

test.describe('Deployed API Gateway integration', () => {
  test.skip(!gateway, 'GATEWAY_URL is not configured');

  const endpoint = path => new URL(path, gateway).toString();

  test('Gateway liveness responds successfully', async ({ request }) => {
    const response = await request.get(endpoint('/health/live'));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.status).toBe('ok');
    expect(body.service).toBe('forever-hotel-api-gateway');
  });

  test('Gateway rejects requests without staff authentication', async ({ request }) => {
    const response = await request.get(endpoint('/auth/session'));

    expect(response.status()).toBe(401);
  });

  test('Gateway rejects unknown routes', async ({ request }) => {
    const response = await request.get(endpoint('/central-tests-nonexistent-route'));

    expect(response.status()).toBe(404);
  });

  test('Gateway routes public room catalogue to Hotel Website', async ({ request }) => {
    const response = await request.get(endpoint('/hw/room-types'));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toBeTruthy();
  });
});
