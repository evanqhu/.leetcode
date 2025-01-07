/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  const length = nums.length;
  if (length < 3) return result;
  nums.sort((a, b) => a - b); // 先升序排序

  for (let i = 0; i < length - 1; i++) {
    // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] > 0) break;
    // 如果当前数字和前一个数字相同，则跳过（去重）
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // 跳过重复的数字
        while (left < right && nums[right] === nums[right - 1]) right--; // 跳过重复的数字
        left++;
        right--;
      }
      else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// @lc code=end

