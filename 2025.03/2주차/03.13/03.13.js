// 1번 이진 탐색 방식
var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) i = mid + 1;
    else if (target < nums[mid]) j = mid - 1;
  }

  return -1;
};

// 2번 findIndex 사용
var search = function (nums, target) {
  return nums.findIndex((num) => num === target);
};
