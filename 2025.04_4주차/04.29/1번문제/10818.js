const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

const arr = input[0].split(' ').map(Number);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
