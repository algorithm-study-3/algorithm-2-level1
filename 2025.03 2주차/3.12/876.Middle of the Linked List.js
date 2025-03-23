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
 */
var middleNode = function (head) {
  let arr = [];
  let cur = head;

  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  return arr[Math.floor(arr.length / 2)];
};
