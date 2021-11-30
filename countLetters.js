const countLetters = function (string) {
  let text = string.replace(/\s/g, '');
  text = text.toLowerCase();
  const count = {};
  for (let i = 0; i < text.length; i++) {
    count[text[i]] = text.split(text[i]).length - 1;
  }
  return count;
}

module.exports = countLetters;