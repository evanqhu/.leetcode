/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * 回溯法
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = []; // 存放结果
  if (digits.length === 0) return result; // 如果输入为空，返回空数组

  // 定义数字和字母的映射关系
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  /** 
   * 回溯函数
   * index: 当前处理的数字索引
   * str: 当前组合的字符串
   */
  function backtrack(index, str) {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    const letters = map[digits[index]]; // 获取当前数字对应的字母数组
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, str + letters[i]);
    }
  }
  backtrack(0, '');

  return result;
};
// @lc code=end

