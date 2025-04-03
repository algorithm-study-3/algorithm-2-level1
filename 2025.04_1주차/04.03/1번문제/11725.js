const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const arr = input.map((x) => x.split(' ').map(Number));

const graph = Array.from(Array(n + 1), () => []);
const visited = Array(n + 1).fill(false);
const parent = Array(n + 1).fill(0);

arr.forEach(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

dfs(1); // 1번 노드가 루트

function dfs(node) {
  visited[node] = true;

  graph[node].forEach((next) => {
    if (!visited[next]) {
      parent[next] = node; // 부모 기록
      dfs(next);
    }
  });
}

// 2번부터 출력
for (let i = 2; i <= n; i++) {
  console.log(parent[i]);
}
