function solution(str1, str2) {
  let newString = "";
  for (let i = 0; i < str1.length; i++) {
    newString += str1[i] + str2[i];
  }

  return newString;
}
