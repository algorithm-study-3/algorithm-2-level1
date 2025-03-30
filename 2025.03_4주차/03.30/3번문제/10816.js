const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 방법1
const answer = [];

const n = Number(input[0]);
const sangArr = input[1].split(' ').map(Number);
const m = Number(input[2]);
const arr = input[3].split(' ').map(Number);
const sorted = sangArr.sort((a, b) => a - b);

for (let i = 0; i < m; i++) {
  const left = lowerBound(sorted, arr[i]);
  const right = upperBound(sorted, arr[i]);
  const count = right - left;
  answer.push(count);
}

console.log(answer.join(' '));

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return left;
}

// 방법2
// const n = Number(input[0]);
// const sangArr = input[1].split(' ').map(Number);
// const m = Number(input[2]);
// const arr = input[3].split(' ').map(Number);

// const map = new Map();

// for (let i = 0; i < m; i++) {
//   map.set(arr[i], 0);
// }

// for (let i = 0; i < n; i++) {
//   if (map.has(sangArr[i])) {
//     const current = map.get(sangArr[i]);
//     map.set(sangArr[i], current + 1);
//   }
// }

// const result = arr.map((num) => map.get(num));
// console.log(result.join(' '));
