function solution(nums) {
    const answer = new Set(nums).size;
    const maxCount = nums.length / 2;
    return maxCount < answer ? maxCount : answer;
}
