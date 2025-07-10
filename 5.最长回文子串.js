/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * @description 中心扩展法 (双指针)
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  // 当前找到的最长回文串的起止位置
  // 用两个指针存储最长回文串
  let left = 0;
  let right = 0;

  // 以 m 和 n 为中心，向两边扩展，找到以这两个下标为中心的最长回文子串
  const palindrom = (m, n) => {
    while (m >= 0 && n <= s.length && s[m] === s[n]) {
      m--;
      n++;
    }

    // 循环结束后，实际的回文串区间是 [m+1, n-1]
    // 如果新找到的回文串长度比当前记录的还长，就更新 left 和 right
    if (n - m - 1 > right - left + 1) {
      left = m + 1;
      right = n - 1;
    }
  };

  // 遍历字符串的每个字符，分别以单个字符（奇数长度回文）和相邻两个字符（偶数长度回文）为中心，调用 palindrom
  for (let i = 0; i < s.length; i++) {
    palindrom(i, i);
    palindrom(i, i + 1);
  }

  return s.slice(left, right + 1);
};
/** ******************************************************************** */

/**
 * @param {string} s
 * @return {string}
 * @description 中心扩展法
 */
// var longestPalindrome = function (s) {
//   const n = s.length
//   if (n < 2) return s;
//   // 用 res 存储最长回文串
//   let res = ""; // 初始化结果字符串为空

//   // 定义一个函数，用于查找回文串
//   const palindrome = (left, right) => {
//     // 当左指针不越界，右指针不越界，且左右字符相等时，扩展指针
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--; // 左指针向左扩展
//       right++; // 右指针向右扩展
//     }
//     // 返回回文子串 (左右指针已经越界或不相等了)
//     return s.slice(left + 1, right);
//   };

//   // 遍历字符串的每个字符，以每个字符为中心，向两边扩展，找到最长的回文子串
//   // 每个字符串都可能成为最长回文字串的中心
//   for (let i = 0; i < s.length; i++) {
//     // 查找以当前字符为中心的回文子串（奇数长度）
//     const s1 = palindrome(i, i);
//     // 查找以当前字符和下一个字符为中心的回文子串（偶数长度）
//     const s2 = palindrome(i, i + 1);

//     // 每次循环更新结果为较长的回文子串
//     // 每次从 res, s1, s2 三个字符串中取最长的字符串
//     res = res.length > s1.length ? res : s1;
//     res = res.length > s2.length ? res : s2;
//   }

//   // 返回最长的回文子串
//   return res;
// };
/** ******************************************************************** */

/**
 * @param {string} s
 * @return {string}
 * @description 动态规划法
 */
// var longestPalindrome = function (s) {
//   const n = s.length; // 原始字符串长度
//   let start = 0; // 回文串开始位置
//   let maxLen = 1; // 回文串最大长度

//   if (n < 2) return s;

//   const dp = Array.from({ length: n }, () => Array(n).fill(false)); // 定义 dp 数组

//   // 单个字符都是回文的
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true;
//   }

//   for (let j = 1; j < n; j++) {
//     for (let i = 0; i < j; i++) {
//       if (s[i] === s[j]) {
//         // 边界条件
//         if (j - i + 1 <= 3) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1]; // 状态转移方程
//         }
//       } else {
//         dp[i][j] = false;
//       }

//       // 更新回文串开始位置和最大长度
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1;
//         start = i;
//       }
//     }
//   }

//   return s.substring(start, start + maxLen); // 返回结果
// };
// @lc code=end
