/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const newWordArr = s.split('').sort();
    const findWordArr = t.split('').sort();
    let equal = true;

    for (let i = 0; i < Math.max(newWordArr.length, findWordArr.length); i++) {
        if (!equal) break;

        if (newWordArr[i] !== findWordArr[i]) equal = false;
    }

    return equal;
};

isAnagram('rat', 'car');
