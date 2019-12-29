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
        return head
    }
    
    let linkedListArr = []
    
    while(head != null) {
        linkedListArr.push(head.val)
        
        head = head.next
    }
    
    let newLinkedList = new ListNode()
    
    head = newLinkedList
    let current = head
    
    for(let i = linkedListArr.length - 1; i >= 0; i--) {
        current.val = linkedListArr[i]
        if(i != 0) {
            current.next = new ListNode()
            current = current.next
        }
        
    }

    return head
};
