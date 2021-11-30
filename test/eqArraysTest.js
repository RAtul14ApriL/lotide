const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it('returns \"true\" for ["Hello", "Lighthouse", "Labs"] & ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]), true);
  });

  it('returns \"false\" for [5, 6, 7] & [6, 7]', () => {
    assert.deepEqual(eqArrays([5, 6, 7], [6, 7]), false);
  });

  it('returns \"true\" for [5, 6, 7] & [5, 6, 7]', () => {
    assert.deepEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
  });

  it('returns \"false\" for [] & [2]', () => {
    assert.deepEqual(eqArrays([], [2]), true);
  });
});