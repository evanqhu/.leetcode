/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      for (let t = i; t < m; t++) {
        dp[t][0] = 0;
      }
      break;
    }
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      for (let t = j; t < n; t++) {
        dp[0][t] = 0;
      }
      break;
    }
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log('🚀🚀🚀 dp: ', dp)
  
  return dp[m - 1][n - 1];
};
// @lc code=end
