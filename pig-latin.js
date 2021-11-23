const pigLatin = (strings) =>{
  let result = "";
  for (let string of strings) {
    string = `${string.slice(1)}${string[0]}ay `;
    result += string;
  }
  return result;
};

const args = process.argv;
console.log(pigLatin(args.slice(2)));