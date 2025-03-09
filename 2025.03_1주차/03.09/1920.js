const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const arr = input[3].split(' ').map(Number);

for (let i = 0; i < m; i++) {
  const num = arr[i];
  console.log(search(num));
}

function search(num) {
  let start = 0;
  let end = n - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (num === A[mid]) return 1;

    if (num < A[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
}
