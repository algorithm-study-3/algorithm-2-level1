/**
 * @param {string[]} tokens
 * @return {number}
 */

const OPERATORS = ['+', '-', '*', '/'];

const calculate = (num1, operators, num2) => {
  switch (operators) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.trunc(num1 / num2);
  }
};

var evalRPN = function (tokens) {
  let numberStack = [];

  for (const char of tokens) {
    //숫자일경우
    if (!OPERATORS.includes(char)) {
      numberStack.push(Number(char));
    } else {
      const number2 = numberStack.pop();
      const number1 = numberStack.pop();
      const result = calculate(number1, char, number2);
      numberStack.push(result);
    }
  }

  return numberStack.pop();
};
