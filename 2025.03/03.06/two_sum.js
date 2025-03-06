/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                answer = [i, j];
                break;
            }
        }
        if (answer.legnth > 0) break;
    }
    return answer;
};

twoSum([3, 2, 4], 6);
