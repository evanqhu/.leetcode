/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // BFS + 去重
  // 从 n-1 推导出 n 的组合情况，只需要遍历 n-1 的所有组合，并在所有组合的每个位置填入一对括号 () 并去重即可。
  
  // 定义结果数组，初始化为包含一个括号的字符串
  let result = new Set(['()']);

  // BFS n 是循环的次数
  for (let i = 1; i < n; i++) {
    // 定义每次遍历时新的结果数组，初始化为空
    let newSet = new Set();

    // 双层循环，遍历 n-1 的所有组合，并在每个位置填入一对括号
    for (const s of result) {
      for (let j = 0; j < s.length; j++) {
        // 在每个位置填入一对括号
        newSet.add(s.slice(0, j) + '()' + s.slice(j));
      }
    }

    result = newSet;
  }

  return [...result];
};
// @lc code=end

