/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head) return false
    let sl = head
    let fl = head.next
    while (fl && fl.next && fl !== sl) {
        sl = sl.next
        fl = fl.next.next
    }
    return !!fl && !!fl.next
};