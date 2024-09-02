import { test } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('sum function - valid inputs', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(100, 200), 300, '100 + 200 should equal 300');
});

test('sum function - negative inputs', () => {
  assert.strictEqual(sum(-1, 2), 0, '-1 + 2 should return 0 due to negative input');
  assert.strictEqual(sum(2, -1), 0, '2 + -1 should return 0 due to negative input');
  assert.strictEqual(sum(-5, -5), 0, '-5 + -5 should return 0 due to negative inputs');
});

test('sum function - non-number inputs', () => {
  assert.strictEqual(sum('2', 3), 0, '"2" + 3 should return 0 due to non-number input');
  assert.strictEqual(sum(2, '3'), 0, '2 + "3" should return 0 due to non-number input');
  assert.strictEqual(sum('a', 'b'), 0, '"a" + "b" should return 0 due to non-number inputs');
});

test('sum function - mixed invalid inputs', () => {
  assert.strictEqual(sum(null, 3), 0, 'null + 3 should return 0');
  assert.strictEqual(sum(undefined, 3), 0, 'undefined + 3 should return 0');
  assert.strictEqual(sum(2, NaN), 0, '2 + NaN should return 0');
  assert.strictEqual(sum(NaN, NaN), 0, 'NaN + NaN should return 0');
});
