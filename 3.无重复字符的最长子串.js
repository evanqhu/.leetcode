/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 结果长度
  let ans = 0;
  // 左指针
  let left = 0;
  // 集合存储不重复的字符
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    while (set.has(char)) {
      set.delete(s[left]);
      left++;
    }
    set.add(char)
    ans = Math.max(right - left + 1, ans);
  }

  return ans;
};

//   let ans = 0; // 结果长度
//   const map = new Map(); // 哈希 map
//   let i = 0; // 左指针

//   // j 是右指针
//   for (let j = 0; j < s.length; j++) {
//     const v = s[j]; // 右指针指向的字符
//     map.set(v, (map.get(v) || 0) + 1); // 在哈希 map 中添加右指针，数量+1

//     // 当右指针指向字符的数量在哈希 map 中大于 1 时，一直向右移动左指针
//     while (map.get(v) > 1) {
//       map.set(s[i], map.get(s[i]) - 1);
//       i++;
//     }

//     // 每次移动右指针，都更新一下结果的长度
//     ans = Math.max(j - i + 1, ans);
//   }
//   return ans;
// };

// var lengthOfLongestSubstring = function (s) {
//   // 哈希集合，记录每个字符是否出现过
//   const occ = new Set();

//   let ans = 0;
//   // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//   let rk = -1;

//   for (let i = 0; i < s.length; i++) {
//     // 左指针向右移动一格，移除一个字符，开始枚举下一个字符作为起始位置
//     if (i !== 0) {
//       occ.delete(s[i - 1]);
//     }

//     // 当右指针
//     while (rk + 1 < s.length && !occ.has(s[rk + 1])) {
//       // 向右移动右指针
//       occ.add(s[rk + 1]);
//       ++rk;
//     }

//     // 第 i 到 rk 个字符是一个极长的无重复字串
//     ans = Math.max(ans, rk - i + 1);
//   }
//   return ans;
// };
// @lc code=end

