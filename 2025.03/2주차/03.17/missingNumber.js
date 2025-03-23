/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const allAddNum = Array.from({ length: nums.length + 1 }, (_, idx) => idx).reduce((acc, cur) => acc + cur, 0);
    const addNum = nums.reduce((acc, cur) => acc + cur, 0);
    return allAddNum - addNum;
};
