const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('2025.03/3주차/03.21/03-21.txt')
  .toString()
  .trim()
  .split(' ');

const chessItems = [1, 1, 2, 2, 2, 8];
const result = [];

for (let i = 0; i < input.length; i++) {
  result.push(chessItems[i] - input[i]);
}

console.log(result.join(' '));
