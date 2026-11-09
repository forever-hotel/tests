import test from 'node:test';
import assert from 'node:assert/strict';
import { targets } from '../config/targets.mjs';

test('all six Forever Hotel subsystems have unique HTTPS staging targets', () => {
  assert.equal(targets.length, 6);
  assert.deepEqual(targets.map(({ id }) => id).sort(), ['FDS', 'FOSS', 'HW', 'KMS', 'MAD', 'WKMS']);
  assert.equal(new Set(targets.map(({ id }) => id)).size, 6);
  for (const target of targets) {
    assert.ok(target.name, `Missing name for ${target.id}`);
    const url = new URL(target.url);
    assert.equal(url.protocol, 'https:', `${target.id} must have HTTPS URL`);
    assert.ok(url.hostname, `${target.id} must have hostname`);
  }
});
