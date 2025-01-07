/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 创建一个哑节点，指向链表头部
  const dummy = new ListNode(0, head);
  // 创建快慢指针
  let fast = dummy;
  let slow = dummy;

  // 快指针先走 n+1 步，使得快慢指针之间相隔 n 个节点
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // 快慢指针同时走，直到快指针到达链表末尾
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // 此时慢指针指向的节点就是倒数第 n 个节点，也就是要删除的节点
  slow.next = slow.next.next;

  // 返回链表头部
  return dummy.next;
};
// @lc code=end

