const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());

const t = Number(input.shift());
let answer = 0;

let row;
let col;

let x = 0;

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

while (x < input.length) {
  const [m, n, k] = input[x].split(' ').map(Number);

  if (k !== undefined) {
    row = m;
    col = n;
    let arr = input.slice(x + 1, x + k + 1);
    arr = arr.map((x) => x.split(' ').map(Number));

    x += k;
    run(m, n, arr);
  }
  if (k === undefined) {
    x += 1;
  }
}

function run(row, col, arr) {
  answer = 0;

  const ground = Array.from(Array(col), () => Array(row).fill(0));
  const visited = Array.from(Array(col), () => Array(row).fill(false));

  arr.forEach(([x, y]) => (ground[y][x] = 1));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (ground[i][j] === 1 && !visited[i][j]) {
        dfs(i, j, ground, visited);
        answer += 1;
      }
    }
  }
  console.log(answer);
}

function dfs(i, j, ground, visited) {
  if (!visited[i][j]) {
    visited[i][j] = true;
  }

  dir.forEach(([a, b]) => {
    const [nx, ny] = [i + a, j + b];
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < col &&
      ny < row &&
      !visited[nx][ny] &&
      ground[nx][ny] === 1
    ) {
      dfs(nx, ny, ground, visited);
    }
  });
}
