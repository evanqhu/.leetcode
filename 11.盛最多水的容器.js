/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const length = height.length;
  let max = 0; // 初始化最大面积
  let left = 0; // 初始化左指针
  let right = length - 1; // 初始化右指针

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    // 因为最大面积受限于较短的那条边，移动长边只会导致宽度变短，面积变小，所以每次移动较短的那条边
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
// 时间复杂度：O(n)
// 空间复杂度：O(1)
// @lc code=end

