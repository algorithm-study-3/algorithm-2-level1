const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 21: 40 11시
const n = Number(input.shift());
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  for (let dx = x; dx < x + 10; dx++) {
    for (let dy = y; dy < y + 10; dy++) {
      paper[dx][dy] = 1;
    }
  }
}

let answer = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) answer++;
  }
}

console.log(answer);
// 3 5 13 15 25
// 3이랑 15사이에 13-5 앞의 끝부분이 뒤의 시작보다 작다면 포함
// 2 7 12 17
// 12 - 7 앞의 뒤부분이 뒤의 첫부분보다 크다면 포함
