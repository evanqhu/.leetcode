/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return result;
// };

/** 使用 map 存储当前元素值-索引的键值对，用空间换时间 */
var twoSum = function (nums, target) {
  const prevNums = new Map(); // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]; // 当前元素
    const targetNum = target - curNum; // 另一个目标元素
    const targetNumIndex = prevNums.get(targetNum); // 在出现过的数字映射表中获取目标元素的索引
    if (targetNumIndex !== undefined) {
      // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {
      // 如果不存在，说明之前没出现过目标元素
      prevNums.set(curNum, i); // 存入当前的元素和对应的索引
    }
  }
};
// @lc code=end

