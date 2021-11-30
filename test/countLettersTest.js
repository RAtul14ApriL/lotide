const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it('returns { h: 1, e: 1, l: 2, o: 1 } for hello', () => {
    assert.deepEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
  });

  it('returns  { h: 1, e: 2, l: 2, o: 1, m: 1, a: 1, t: 1 } for hello mate', () => {
    assert.deepEqual(countLetters('hello mate'), { h: 1, e: 2, l: 2, o: 1, m: 1, a: 1, t: 1 });
  });
});