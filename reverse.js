let string = process.argv.slice(2);

const reverse = function(string) {
  let reversed = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = string[i].length - 1; j >= 0; j--) {
      reversed += string[i][j];
    }
    reversed += '\n';
  }
  return reversed;
};

console.log(reverse(string));