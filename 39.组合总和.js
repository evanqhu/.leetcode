/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @description 回溯算法
 */
const combinationSum = function (candidates, target) {
  const result = [];

  // 回溯函数
  const backtrack = (path, sum, start) => {
    // 终止条件
    if (sum === target) {
      result.push([...path]);
      return;
    }

    // 剪枝：如果当前的和已经大于目标值，则直接返回
    if (sum > target) {
      return; // 剪枝
    }

    /**
     * 遍历 candidates 数组，从 start 开始，允许重复使用 i
     * 我们使用 startIndex 来控制 不能选前面已经用过的数字，但可以重复使用当前数字
     */
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(path, sum + candidates[i], i);
      // 回溯的本质就是递归的逆过程，把最后一步“撤销”掉，试别的分支
      path.pop();
    }
  };

  backtrack([], 0, 0);

  return result;
};
// @lc code=end
