const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const arr = Array.from({ length: n }, () => 0);

if (n === 1) {
  console.log(1);
  return;
}

if (n === 2) {
  console.log(2);
  return;
}

arr[0] = 1;
arr[1] = 2;

for (let i = 2; i < n; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}

console.log(arr[arr.length - 1]);
