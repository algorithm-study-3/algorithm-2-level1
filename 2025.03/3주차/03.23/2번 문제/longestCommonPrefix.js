/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    const sortStrs = strs.sort((a, b) => a.length - b.length);
    const firstWord = sortStrs.shift();
    if (sortStrs.length === 0) return firstWord;
    const secondWord = sortStrs.shift();

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] !== secondWord[i]) break;
        prefix += firstWord[i];
    }

    for (let word of sortStrs) {
        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] !== word[i]) {
                prefix = prefix.slice(0, i);
                break;
            }

            if (prefix.length === 0) break;
        }
        if (prefix.length === 0) break;
    }

    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
