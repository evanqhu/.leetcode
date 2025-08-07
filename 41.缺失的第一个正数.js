/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description 原地哈希
 */
var firstMissingPositive = function (nums) {
  // 第1步：原地置换，把数字放到对应索引位置
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 && // 只处理正数
      nums[i] <= nums.length && // 且不超过数组长度（合法索引范围）
      nums[nums[i] - 1] !== nums[i] // 目标位置不是自己，避免死循环
    ) {
      // 交换 nums[i] 和 nums[nums[i]-1]，把数字放到正确位置
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  // 第2步：遍历数组，找到第一个位置不对应数字的下标
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  // 如果都对应正确，说明最小缺失正整数是 nums.length + 1
  return nums.length + 1;
};
/**
 * @param {number[]} nums
 * @return {number}
 * @description 如果没有空间要求，可以使用哈希表，时间复杂度O(n)，空间复杂度O(n)
 */
// var firstMissingPositive = function (nums) {
//   const set = new Set(nums); // 第一步
//   let i = 1; // 第二步
//   while (true) {
//     // 第三步
//     if (!set.has(i)) {
//       return i; // 找到了缺失的数字
//     }
//     i++;
//   }
// };
// @lc code=end
