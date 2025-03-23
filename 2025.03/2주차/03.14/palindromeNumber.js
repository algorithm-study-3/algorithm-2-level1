/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const palindrome = String(x).split('').reverse().join('');

    return String(x) === palindrome ? true : false;
};
