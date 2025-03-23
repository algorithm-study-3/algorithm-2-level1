/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const palindromeWord = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return palindromeWord === palindromeWord.split('').reverse().join('');
};

isPalindrome('A man, a plan, a canal: Panama');
