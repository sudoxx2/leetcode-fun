// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL


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
var reverseList = function(head) {
    if(head == null) {
        return 0
    }
    
    val = []
    
    dummyHead = head
    
    while(dummyHead != null) {
        val.push(dummyHead.val)
        dummyHead = dummyHead.next
    }
    
    val = val.reverse()
    
    // console.log(val)
    
    dummyHead = head
    
    let index = 0
    while(dummyHead != null) {
        dummyHead.val = val[index]
        dummyHead = dummyHead.next
        index++
    }
    
    // console.log(head)
    
    return head  
};