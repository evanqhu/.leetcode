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
 * 1️⃣ 暴力法：将所有值提取到数组中排序，构造新链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists?.length) return null;

  // 1. 收集所有节点的值
  const values = [];
  lists.forEach(list => {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  })

  // 如果没有值，直接返回 null
  if (!values.length) return null;

  // 2. 对值进行排序
  values.sort((a, b) => a - b);

  // 3. 根据排序后的值构造新链表
  const dummy = new ListNode(); // 哨兵节点

  let node = dummy;

  for (let value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }

  // 4. 返回新链表
  return dummy.next;
};
// @lc code=end


/** 
 * 2️⃣ 分治法：两两合并，直到合并成一个链表
 * 把 lists 一分为二（尽量均分），先合并前一半的链表，再合并后一半的链表，然后把这两个链表合并成最终的链表。
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  /** 定义合并两个链表的函数 */
  var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(); // 哨兵节点
    let node = dummy;

    // 合并两个链表
    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    // 如果其中一个链表已经遍历完，直接将另一个链表接到后面
    node.next = list1 ? list1 : list2;
    return dummy.next;
  }

  /** 定义 DFS 函数，合并从 lists[start] 到 lists[end-1] 的链表 */
  var dfs = function (start, end) {
    const m = end - start;

    // 递归出口
    // lists 为空数组
    if (m === 0) return null;
    // lists 中只有一个链表
    if (m === 1) return lists[start];

    // 递归主体
    const left = dfs(start, (start + end) >> 1); // 合并左半部分
    const right = dfs((start + end) >> 1, end); // 合并右半部分
    return mergeTwoLists(left, right); // 最后把左半和右半合并
  }

  return dfs(0, lists.length);
}