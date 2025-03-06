const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const num = input[i];
  const dp = Array(num + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= num; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[num]);
}

// 1:02

// 1: 1
// 2: 1+1, 2
// 3: 1+1+1, 2+1, 1+2, 3
// 4: 1+1+1+1, 2+1+1, 3+1, 1+2+1,  1+1+2, 2+2, 1+3
// dp[n-1] + dp[n-2] + dp[n-3]
