/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replaceAll(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
};
