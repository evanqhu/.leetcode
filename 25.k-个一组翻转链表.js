/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 * 【递归法】
 * 1. 将链表分成两段，第一段是 k 长度的链表，第二段是剩余的链表。对第一段链表进行翻转操作，对第二段链表进行递归操作
 * 2. 递归结束条件：当第一段链表长度不满足 k 时，直接返回，不翻转
 * 3. 翻转第一段链表：定义一个空节点，将第一段链表的节点依次插入到空节点之后，直到第一段链表翻转完成
 */
var reverseKGroup = function (head, k) {
  // 如果第一段长度不满足长度 k 或不存在头节点，则直接返回，不翻转
  if (k === 1 || !head) return head;

  // 1. 计算第一段链表的长度是否满足长度 k
  let count = 1; // 这里初始值可以定义为 1，因为 head 是存在的
  let pointer = head; // 滑动指针节点
  // 循环计数
  while (count < k && pointer.next) {
    pointer = pointer.next;
    count++;
  }

  // 2. 如果第一段长度不满足长度 k，则直接返回 head，无需翻转 (递归出口)
  if (count < k) return head;

  // 3. 否则，翻转第一段链表，并对第二段链表进行递归操作
  else {
    let tail = pointer // 尾节点
    pointer = head; // 将指针节点移到头节点
    let pre = null; // 定义指针节点的前一个节点，初始化为 null
    while (pre !== tail) {
      const next = pointer.next; // 保存指针节点的下一个节点
      pointer.next = pre; // 将指针节点的下一个节点指向 pre
      pre = pointer; // pre 节点向后移动一位
      pointer = next; // pointer 节点向后移动一位
    }

    // 此时，pointer 指向第二段链表的开头，head 指向第一段链表的结尾
    head.next = reverseKGroup(pointer, k);
    return pre;
  }


};
// @lc code=end

