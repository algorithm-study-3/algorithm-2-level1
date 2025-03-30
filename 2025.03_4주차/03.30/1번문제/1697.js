const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const max = Math.max(n, k) * 2;

const visited = Array(max + 1).fill(0);

bfs(n, 0);
function bfs(i, count) {
  const queue = [[i, count]];

  while (queue.length > 0) {
    const [num, c] = queue.shift();
    if (num === k) {
      console.log(c);
      return;
    }

    const arr = [num + 1, num - 1, num * 2];

    arr.forEach((e) => {
      if (e >= 0 && e <= max && !visited[e]) {
        visited[e] = true;
        queue.push([e, c + 1]);
      }
    });
  }
}
