const checkPointStrArr = [
  'a',
  's',
  'd',
  'e',
  'f',
  'r',
  'q',
  't',
  'w',
  'c',
  'z',
  'x',
  'v',
  'g'
];

const fs = require('fs');
const input = fs
  .readFileSync('2025.03/5주차/04-02_2.txt')
  .toString()
  .trim()
  .split('\n');

const strLength = parseInt(input[0]);
const strArr = input[1].split('');
console.log(checkPointStrArr.includes(strArr[strLength - 1]) ? 1 : 0);
