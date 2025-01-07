/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists?.length) return null;

  // 收集所有节点的值
  const values = [];
  lists.forEach(list => {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  })

  // 如果没有值，直接返回 null
  if (!values.length) return null;

  // 对值进行排序
  values.sort((a, b) => a - b);

  // 根据排序后的值构造新链表
  const dummy = new ListNode(0); // 哨兵节点

  let node = dummy;

  for (let value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }

  return dummy.next;
};
// @lc code=end


下面是不是随便写
