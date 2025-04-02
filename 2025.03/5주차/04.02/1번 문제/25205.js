const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const [N, str] = readLine.split('\n');
const consonants = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v'];

console.log(consonants.indexOf(str[N - 1]) > 0 ? 1 : 0);
