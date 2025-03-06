/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairParentheses = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const answer = [];
    s.split('').forEach((parentheses) => {
        if (pairParentheses[parentheses] === answer[answer.length - 1] && answer.length > 0) return answer.pop();

        return answer.push(parentheses);
    });

    return answer.length > 0 ? false : true;
};

isValid('()');
