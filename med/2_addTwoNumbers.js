/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    if(l1 == null && l2 == null) {
        let l3 = new ListNode()
        l3 = null
        return l3
    }
    
    let l3 = new ListNode()
    let curr = l3
    let head = curr
    
    let carry = false
    
    // console.log(l3)
    
    while(l1 != null || l2 != null) {
        if(l1 != null && l2 != null) {
            curr.val = l1.val + l2.val
            
            if(carry) {
                curr.val = curr.val + 1
                carry = false
            }
            
            if(curr.val > 10) {
                carry = true
                curr.val = curr.val % 10
            } else if(curr.val == 10) {
                carry = true
                curr.val = 0
            }
            
            l1 = l1.next
            l2 = l2.next
            
            if(l1 != null || l2 != null) {
                curr.next = new ListNode()
                curr = curr.next
            }
            
            if(carry == true && (l1 == null && l2 == null)) {
                curr.next = new ListNode(1)
            }
            
        } else if(l1 != null) {
            curr.val = l1.val 
            if(carry) {
                curr.val = curr.val + 1
                carry = false
            }
            if(curr.val > 10) {
                carry = true
                curr.val = curr.val % 10
            } else if(curr.val == 10) {
                carry = true
                curr.val = 0
            }
            l1 = l1.next
            if(l1 != null) {
                curr.next = new ListNode()
                curr = curr.next
            }
            if(carry == true && (l1 == null && l2 == null)) {
                curr.next = new ListNode(1)
            }
        } else if(l2 != null) {
            curr.val = l2.val
            if(carry) {
                curr.val = curr.val + 1
                carry = false
            }
            l2 = l2.next
            if(curr.val > 10) {
                carry = true
                curr.val = curr.val % 10
            } else if(curr.val == 10) {
                carry = true
                curr.val = 0
            }
            if(l2 != null) {
                curr.next = new ListNode()
                curr = curr.next
            }
            if(carry == true && (l1 == null && l2 == null)) {
                curr.next = new ListNode(1)
            }
        }
    }
    
    return head
};
