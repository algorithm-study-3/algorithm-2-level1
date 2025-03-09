const fs = require('fs');
const words = fs
  .readFileSync('2025.03/1주차/03.09/03-09.txt')
  .toString()
  .trim()
  .split('\n');
// const words = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
const maxLength = Math.max(...words.map((word) => word.length));

for (let col = 0; col < maxLength; col++) {
  for (let row = 0; row < words.length; row++) {
    if (words[row][col] !== undefined) {
      result += words[row][col];
    }
  }
}

console.log(result);
