/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 双二分查找
 */
var searchRange = function (nums, target) {
  // 查找最左边的位置
  function findLeft() {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
        /**
         * 记录「一个等于 target 的位置」
         * 不立刻返回，因为可能还有更左边的 target
         */
        if (nums[mid] === target) index = mid;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }

  // 查找最右边的位置
  function findRight() {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
        /** 
         * 记录「一个等于 target 的位置」
         * 不立刻返回，因为可能还有更右边的 target
         */
        if (nums[mid] === target) index = mid;
      } else {
        right = mid - 1;
      }
    }
    return index;
  }

  return [findLeft(), findRight()];
};
// @lc code=end
