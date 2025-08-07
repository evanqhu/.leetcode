/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @description 双指针，时间复杂度O(n)，空间复杂度O(1)
 */
var trap = function (height) {
  // 如果数组长度小于 3，无法接水
  if (height.length < 3) return 0;

  let left = 0; // 左指针
  let right = height.length - 1; // 右指针
  let leftMax = 0; // 左边最大高度
  let rightMax = 0; // 右边最大高度
  let result = 0; // 总接水量

  while (left < right) {
    // 更新左右两边的最大高度
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    // 如果左边高度较小，移动左指针
    if (height[left] < height[right]) {
      // 当前位置能接的水 = 左边最大高度 - 当前高度
      result += leftMax - height[left];
      left++;
    } else {
      // 如果右边高度较小或相等，移动右指针
      // 当前位置能接的水 = 右边最大高度 - 当前高度
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
};
// @lc code=end
// @lc code=end
