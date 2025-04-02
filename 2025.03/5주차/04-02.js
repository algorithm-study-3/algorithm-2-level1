const lengthOfLastWord = function (s) {
  const strArr = s.trim().split(' ');
  return strArr[strArr.length - 1].length;
};
