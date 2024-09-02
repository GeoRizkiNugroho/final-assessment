import { test } from 'node:test';
import assert from 'assert';
import { sum } from './index.js';

test('sum function returns the correct result', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-2, 3), 1);
  assert.strictEqual(sum(0, 0), 0);
});