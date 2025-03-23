/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let answer = 0;
    const word = s.split('');
    const romaSymbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < word.length; i++) {
        if (romaSymbol[word[i]] >= romaSymbol[word[i + 1]] || romaSymbol[word[i + 1]] === undefined) {
            answer += romaSymbol[word[i]];
        } else {
            answer += romaSymbol[word[i + 1]] - romaSymbol[word[i]];
            i += 1;
        }
    }

    return answer;
};

console.log(romanToInt('MCMXCIV'));
