/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 * 迭代法
 */
var swapPairs = function(head) {
  // 创建哨兵节点，指向头节点
  const dummy = new ListNode(0, head);

  let node0 = dummy;
  let node1 = head;

  while (node1 && node1.next) {
    // 保存下一个节点
    const node2 = node1.next;
    const node3 = node2.next;

    // 交换节点
    node0.next = node2;
    node2.next = node1;
    node1.next = node3;

    // 更新节点
    node0 = node1;
    node1 = node3;
  }

  return dummy.next;
};
// @lc code=end


/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归法
 */
var swapPairs = function(head) {
  // 递归出口
  if (!head || !head.next) return head;

  // 递归模式
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
};