const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let text = string.replace(/\s/g, '');
  text = text.toLowerCase();
  const count = {};
  for (let i = 0; i < text.length; i++) {
    count[text[i]] = text.split(text[i]).length - 1;
  }
  return count;
}

const textCount = {
  l: 2,
  i: 1,
  g: 1,
  h: 2,
  t: 2,
  o: 3,
  u: 1,
  s: 1,
  e: 1,
  a: 2,
  b: 2,
  c: 1,
  m: 1,
  p: 1
}

assertEqual(countLetters('Lighthouse Lab Bootcamp'), textCount);