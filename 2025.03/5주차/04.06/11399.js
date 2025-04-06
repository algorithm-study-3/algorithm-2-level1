// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `5
3 1 4 3 2`;
const [N, times] = readLine.split('\n');

let waitTime = 0;
const convertTimes = times
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const minTime = convertTimes.reduce((acc, cur) => {
    acc += cur + waitTime;
    waitTime += cur;
    return acc;
}, 0);

console.log(minTime);
