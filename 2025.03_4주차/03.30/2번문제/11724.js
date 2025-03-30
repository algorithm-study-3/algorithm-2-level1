const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map((x) => x.trim().split(' ').map(Number));
const graph = Array.from(Array(n + 1), () => []);
let answer = 0;

arr.forEach(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

const visited = Array(n + 1).fill(false);

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    answer += 1;
  }
}

console.log(answer);

function dfs(i) {
  if (!visited[i]) {
    visited[i] = true;

    graph[i].forEach((e) => {
      if (e >= 0 && e <= n && !visited[e]) {
        dfs(e);
      }
    });
  }
}
