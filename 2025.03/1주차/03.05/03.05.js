/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const findNumber = target - nums[i];
    if (numMap.has(findNumber)) return [numMap.get(findNumber), i];
    numMap.set(nums[i], i);
  }
};
