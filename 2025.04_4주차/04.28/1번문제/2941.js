const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let word = input[0];

for (let i = 0; i < alphabet.length; i++) {
  const regex = new RegExp(alphabet[i], 'g');
  const newWord = word.replace(regex, '_');

  word = newWord;
}
console.log(word.length);
