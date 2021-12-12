/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head || !head.next) {
        return null
    }
    let p = head.next;
    let q = head.next.next;
    while(q && q.next && p !== q) {
        p = p.next;
        q = q.next.next
    }
    if(!q || !q.next) {
        return null
    }
    p = head
    while(p != q) {
        p = p.next
        q = q.next
    }
    return p
};



