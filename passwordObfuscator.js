const password = process.argv.slice(2)[0];

const obfuscate = function (password) {
  let obfuscatedPassword = [];
  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
      case 'a':
        obfuscatedPassword.push(4);
        break;
      case 'e':
        obfuscatedPassword.push(3);
        break;
      case 'o':
        obfuscatedPassword.push(0);
        break;
      case 'l':
        obfuscatedPassword.push(1);
        break;
      default:
        obfuscatedPassword.push(password[i]);
        break;
    }
  }
  return obfuscatedPassword.join('');
}
console.log(obfuscate(password));