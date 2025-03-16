function solution(a, b, c, d) {
  var answer = 0;
  const array = [a, b, c, d];

  return calculatePrize(calculate(array));
}

function calculate(array) {
  const set = {};

  for (let i = 0; i < array.length; i++) {
    if (set[array[i]]) {
      set[array[i]] += 1;
    } else set[array[i]] = 1;
  }
  return set;
}

function calculatePrize(score) {
  if (Object.entries(score).length === 1) {
    return Object.keys(score)[0] * 1111;
  } else if (Object.values(score).includes(3)) {
    let prize = 0;

    Object.entries(score).forEach(([key, value]) => {
      if (value === 3) {
        prize += Number(key) * 10;
      } else {
        prize += Number(key);
      }
    });

    return prize * prize;
  } else if (
    new Set(Object.values(score)).size === 1 &&
    Object.keys(score).length === 2
  ) {
    const keys = Object.keys(score)
      .sort((a, b) => b - a)
      .map(Number);
    return (keys[0] + keys[1]) * (keys[0] - keys[1]);
  } else if (Object.values(score).includes(2)) {
    return Object.entries(score)
      .filter(([key, value]) => value === 1)
      .reduce((acc, [key, value]) => acc * key, 1);
  } else {
    return Math.min(...Object.keys(score).map(Number));
  }
}

solution(6, 4, 2, 5);
