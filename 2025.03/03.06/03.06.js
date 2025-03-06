/*
첫번째 풀이
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === ")") {
      const pop = stack.pop();
      if (pop !== "(") return false;
    } else if (s[i] === "]") {
      const pop = stack.pop();
      if (pop !== "[") return false;
    } else if (s[i] === "}") {
      const pop = stack.pop();
      if (pop !== "{") return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
};

/*
두번째 풀이(개선 버전) - 근데 시간은 더 오래 걸림
 */
var isValid = function (s) {
  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];

  for (let char of s) {
    if (Object.values(mapping).includes(char)) {
      stack.push(char);
      continue;
    }

    if (mapping[char] !== stack.pop()) return false;
  }

  return stack.length === 0;
};
