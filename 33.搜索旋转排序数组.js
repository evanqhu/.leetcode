/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 二分查找
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  // 二分查找
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    /** 
     * 相比于普通的二分查找，多了一个关键步骤：判断哪一半是有序的
     * 因为旋转数组的特点，所以有一半是有序的，另一半是无序的
     */
    if (nums[left] <= nums[mid]) {
      // 左边是有序的
      // 判断 target 是否落在左半边的有序范围内
      if (target >= nums[left] && target <= nums[mid]) {
        // 如果 target 在左半边的有序范围内，则缩小右边界
        right = mid - 1;
      } else {
        // 如果 target 不在左半边的有序范围内，则缩小左边界
        left = mid + 1;
      }
    } else {
      // 右边是有序的
      // 判断 target 是否落在右半边的有序范围内
      if (target >= nums[mid] && target <= nums[right]) {
        // 如果 target 在右半边的有序范围内，则缩小左边界
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
/** ************************************************************ */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 暴力解法，时间复杂度O(n)，不符合要求
 */
// var search = function(nums, target) {
//   let index = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// };
// @lc code=end

