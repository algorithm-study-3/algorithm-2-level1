/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // s에 있는 글자가 t에도 있어야 함.

  // 글자수가 다르면 무조건 false
  if (s.length !== t.length) return false;

  const matching = Array.from(s).reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (let char of t) {
    if (!matching[char]) return false;
    matching[char]--;
  }

  return true;
};
