const pigLatin = (strings) =>{
  let result = "";
  for (let string of strings) {
    string = `${string.slice(1)}${string[0]}ay `;
    result += string;
  }
  return result;
};

const args = process.argv.slice(2);
console.log(pigLatin(args));