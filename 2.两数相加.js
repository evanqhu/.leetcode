/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 把 l1 和 l2 当成数组了，不是链表
// var addTwoNumbers = function (l1, l2) {
//   const num1 = Number(
//     l1.reverse().reduce((result, item) => {
//       return `${result}${item}`;
//     }, '')
//   );
//   const num2 = Number(
//     l2.reverse().reduce((result, item) => {
//       return `${result}${item}`;
//     }, '')
//   );

//   const result = num1 + num2;
//   return result.toString().split('').reverse();
// };

var addTwoNumbers = function (l1, l2) {
  // 定义生成结果链表的指针
  let head = null, tail = null;
  // 进位值
  let carry = 0;

  while (l1 || l2) {
    // 从链表节点上取值
    const n1 = l1?.val || 0;
    const n2 = l2?.val || 0;
    // 节点值求和
    const sum = n1 + n2 + carry;
    // 计算节点值
    const value = sum % 10;
    // 计算进位
    carry = Math.floor(sum / 10);

    // 创建新的 ListNode 对象，头指针和尾指针都指向这个节点
    if (!head) {
      head = tail = new ListNode(value);
    } else {
      // 尾指针向后移动
      tail.next = new ListNode(value);
      tail = tail.next;
    }

    // 当 l1 或 l2 值为 null 时，表示其所在链表已走完
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  // 当两条链表都走完且进位值不为 0 时，继续添加一个节点
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  // 返回头指针，表示当前链表
  return head;
};
// @lc code=end

