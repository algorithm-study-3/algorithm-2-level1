/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const lastWords = s.trim().split(' ');

    return lastWords[lastWords.length - 1].length;
};
