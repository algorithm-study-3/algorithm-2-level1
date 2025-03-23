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
var removeNthFromEnd = function (head, n) {
  let store = [];
  let cur = head;

  while (cur) {
    store.push(cur);
    cur = cur.next;
  }

  if (store.length - n === 0) return head.next;

  let deleteNode = store[store.length - n];
  let prevNode = store[store.length - n - 1];
  prevNode.next = deleteNode.next;

  return head;
};
