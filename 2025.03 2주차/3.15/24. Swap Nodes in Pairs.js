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
var swapPairs = function (head) {
  let pair = [];
  let current = head;
  let lastPair;

  if (!current) return head;

  if (current.next) {
    head = current.next;
  }

  while (current && current.next) {
    pair.push(current);
    pair.push(current.next);
    current = current.next.next;

    pair[1].next = pair[0];
    pair[0].next = current;
    if (lastPair) {
      lastPair.next = pair[1];
    }
    lastPair = pair[0];

    pair.pop();
    pair.pop();
  }

  return head;
};
