const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it('returns \"true\" for { a: "1", b: "2" } & { b: "2", a: "1" }', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns \"false\" for { a: "1", b: "2" } & { a: "1", b: "2", c: "3" }', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });

  it('returns \"true\" for { a: [1, 2, 3] } & { a: [1, 2, 3] }', () => {
    assert.deepEqual(eqObjects({ a: [1, 2, 3] }, { a: [1, 2, 3] }), true);
  });

  it('returns \"true\" for { a: 1, c: 2, b: [3, 4] } & { c: 2, a: 1, b: [3, 4] }', () => {
    assert.deepEqual(eqObjects({ a: 1, c: 2, b: [3, 4] }, { c: 2, a: 1, b: [3, 4] }), true);
  });
});