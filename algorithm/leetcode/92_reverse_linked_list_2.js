/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 const reverseN = (head, n) => {
    if(n === 1) return head
    let tail = head.next
    let p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}

var reverseBetween = function(head, left, right) {
    let ret = new ListNode(0, head)
    let p = ret
    const count = right - left + 1
    let pos = 0
    while(pos < left - 1) {
        p = p.next
        pos++
    }
    let q = reverseN(p.next, count)
    p.next = q
    return ret.next
};