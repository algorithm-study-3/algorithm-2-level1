/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= n; i++) {
    if (nums[i] !== i) return i;
  }

  return 0;
};
