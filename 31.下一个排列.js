/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：将后面的“大数”与前面的“小数”交换；在尽可能靠右的低位进行交换“大数”将交换到前面后，需要“大数”将后面的所有数重置为升序
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2; // 从倒数第二个数开始，是为了 nums[i+1] 要存在

  // 从右向左找到第一个升序的相邻数对
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 如果存在升序的相邻数对，从它后面挑选一个数和它交换
  if (i >= 0) {
    let j = nums.length - 1;
    // 从右向左找到第一个大于 nums[i] 的数
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    // 两数交换
    [nums[i], nums[j]] = [nums[j], nums[i]];
    // 将 i 后面的数重置为升序
  }

  // 如果不存在升序的相邻数对 (i = -1)，说明整个数组是降序的，直接将整个数组反转，重置为升序

  let l = i + 1; // 左
  let r = nums.length - 1; // 右
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  // 翻转数组
  // const reverse = (nums, l, r) => {
  //   while (l < r) {
  //     [nums[l], nums[r]] = [nums[r], nums[l]];
  //     l++;
  //     r--;
  //   }
  // }
  // reverse(nums, i + 1, nums.length - 1);
};
// @lc code=end

