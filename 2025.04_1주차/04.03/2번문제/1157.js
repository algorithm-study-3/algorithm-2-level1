const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const upper = input.toUpperCase();
console.log(upper);
const obj = {};

const arr = upper.split('');

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

const words = Object.entries(obj);
const max = Math.max(...Object.values(obj));
console.log(max);

//
const filtered = words.filter((e) => e[1] === max);
console.log(filtered);

if (filtered.length > 1) {
  console.log('?');
} else {
  console.log(filtered[0][1]);
}
