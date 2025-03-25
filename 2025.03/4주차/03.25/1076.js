const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const colors = readLine.split('\n');

let value = '';
let answer = 0;
const resistance = {
    black: ['0', 1],
    brown: ['1', 10],
    red: ['2', 100],
    orange: ['3', 1_000],
    yellow: ['4', 10_000],
    green: ['5', 100_000],
    blue: ['6', 1_000_000],
    violet: ['7', 10_000_000],
    grey: ['8', 100_000_000],
    white: ['9', 1_000_000_000],
};

for (let i = 0; i < colors.length; i++) {
    if (i == 0 || i == 1) {
        value += resistance[colors[i]][0];
    } else {
        answer = Number(value) * resistance[colors[i]][1];
    }
}

console.log(answer);
