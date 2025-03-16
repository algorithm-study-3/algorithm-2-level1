const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const arr = input.map((X) => X.trim());

let answer = 0;

arr.forEach((text) => {
  const obj = {};
  let check = true;

  obj[text[0]] = 1;

  for (let i = 1; i < text.length; i++) {
    const word = text[i];

    if (text[i - 1] === word) continue;

    if (obj[word]) check = false;

    if (!obj[word]) obj[word] = 1;
  }

  if (check) answer += 1;
});

console.log(answer);
