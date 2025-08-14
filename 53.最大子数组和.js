/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  let max = nums[0];

  // 以 nums[i] 结尾的连续子数组的最大和
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 状态转移方程
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(max, dp[i]);
  }

  return max;
};
// @lc code=end
