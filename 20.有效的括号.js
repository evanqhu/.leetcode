/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) return false;

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  // 定义栈
  const stk = [];

  // 遍历字符串
  for (let ch of s) {
    // 如果是右括号
    if (pairs.has(ch)) {
      // 如果栈为空或者栈顶元素不是匹配的左括号
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      // 弹出栈顶元素
      stk.pop();
    }
    // 如果是左括号，入栈
    else {
      stk.push(ch);
    }
  }

  return !stk.length;
};
// @lc code=end
