import test from 'node:test';
import assert from 'node:assert/strict';
import { targets } from '../config/targets.mjs';

// Read-only availability checks. These DO NOT prove login, API contracts, or full E2E flows.
// Run against approved staging hosts only. No credentials, booking changes, or DB writes.
for (const target of targets) {
  test(`${target.id}: deployed web entry point responds successfully`, { timeout: 20_000 }, async () => {
    let response;
    try {
      response = await fetch(target.url, {
        method: 'GET',
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
        headers: { 'User-Agent': 'Forever-Hotel-Staging-Smoke/1.0', 'Accept': 'text/html,application/json,*/*' },
      });
    } catch (error) {
      throw new Error(`${target.id} unreachable at ${target.url}: ${error.message}`, { cause: error });
    }
    console.log(`${target.id}: HTTP ${response.status}, final URL ${response.url}`);
    // A redirect to login is allowed, but the resulting response must be successful.
    assert.ok(response.status >= 200 && response.status < 400,
      `${target.id}: expected HTTP 2xx/3xx but received ${response.status}`);
    await response.body?.cancel();
  });
}
