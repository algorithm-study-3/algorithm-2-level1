const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ')[0];

const n = Number(input);
const arr = Array.from({ length: n }, (v, i) => n - i);
console.log(arr.join('\n'));
