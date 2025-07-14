/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @description 栈解法
 */
var longestValidParentheses = function (s) {
  let maxLen = 0; // 最大长度
  /** 
   * 定义一个栈
   * 栈里存的是「左括号的索引位置」或者「无法匹配的右括号的索引」—— 用于计算长度
   * 栈的本质作用是：记录还没被匹配的左括号的位置，一旦遇到右括号，就尝试把一个左括号出栈配对。
   */
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    // 左括号入栈
    if (s[i] === "(") {
      stack.push(i);
    }
    // 右括号出栈
    else {
      stack.pop();

      // 每次出栈之后都要进行判断，来确认是否需要计算长度或者更新基准

      // 1. 栈不为空，表示还有未匹配的左括号。此时长度可更新为当前索引减去栈顶元素的索引（栈顶元素是未匹配的左括号的位置或者无法匹配的右括号的索引）
      if (stack.length) {
        const currentLen = i - stack[stack.length - 1];
        maxLen = Math.max(maxLen, currentLen);
      }
      // 2. 栈为空，表示遇到无法匹配的右括号，更新基准
      else {
        /** 
         * 当我们遇到一个右括号 )，但栈已经空了，说明在它前面没有可以配对的左括号
         * 所以它不能配对，必须被“抛弃”（不能用来计算合法长度，因此最大长度不更新）
         * 同时，它要成为新一段合法子串的起点，所以我们把它的索引压栈，作为新的基准点
         */
        stack.push(i);
      }
    }
  }

  return maxLen;
};
// @lc code=end
