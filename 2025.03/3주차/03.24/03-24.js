const pair = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const open = Object.keys(pair);
const close = Object.values(pair);

const isValid = (s) => {
  const strArr = s.split('');
  const stack = [];

  if (strArr.length % 2 !== 0) return false;
  if (close.includes(strArr[0])) return false;

  for (let i = 0; i < strArr.length; i++) {
    if (open.includes(strArr[i])) {
      stack.push(strArr[i]);
    } else {
      if (pair[stack.pop()] !== strArr[i]) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('([])'));
