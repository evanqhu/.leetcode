/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 如果字符串长度小于 2，直接返回字符串
  if (s.length < 2) return s;

  let res = ''; // 初始化结果字符串为空
  // 中心扩展法
  // 定义一个函数，用于找到回文子串
  const palindrome = (left, right) => {
    // 当左指针不越界，右指针不越界，且左右字符相等时，扩展指针
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; // 左指针向左扩展
      right++; // 右指针向右扩展
    }
    // 返回回文子串 (左右指针已经越界或不相等了)
    return s.slice(left + 1, right);
  };

  // 遍历字符串的每个字符，以每个字符为中心，向两边扩展，找到最长的回文子串
  // 每个字符串都可能成为最长回文字串的中心
  for (let i = 0; i < s.length; i++) {
    // 查找以当前字符为中心的回文子串（奇数长度）
    const s1 = palindrome(i, i);
    // 查找以当前字符和下一个字符为中心的回文子串（偶数长度）
    const s2 = palindrome(i, i + 1);

    // 每次循环更新结果为较长的回文子串
    // 每次从 res, s1, s2 三个字符串中取最长的字符串
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  // 返回最长的回文子串
  return res;
};

/** 用双指针替换截取字符串 (better solution) */
const longestPalindrome = (str) => {
  if (str.length < 2) return str;

  let left = 0;
  let right = 0;

  const palindrom = (m, n) => {
    while (m >= 0 && n <= str.length && str[m] === str[n]) {
      m--;
      n++;
    }

    if (n - m - 1 > right - left + 1) {
      left = m + 1;
      right = n - 1;
    }
  };

  for (let i = 0; i < str.length; i++) {
    palindrom(i, i);
    palindrom(i, i + 1);
  }

  return str.slice(left, right + 1);
};
// @lc code=end
