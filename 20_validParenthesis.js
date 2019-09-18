/**

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) == '(') {
            stack.push(s.charAt(i));
        } else if(s.charAt(i) == '{') {
            stack.push(s.charAt(i));
        } else if(s.charAt(i) == '[') {
            stack.push(s.charAt(i));
        }
        
        if(s.charAt(i) == ')' && stack[stack.length-1] == '(') {
            stack.pop(s.charAt(i));
        } else if(s.charAt(i) == '}' && stack[stack.length-1] == '{') {
            stack.pop(s.charAt(i));
        } else if(s.charAt(i) == ']' && stack[stack.length-1] == '[') {
            stack.pop(s.charAt(i));
        }
    }
    
    console.log(stack);
    if(s.length % 2 == 1) {
        return false;
    } else if(stack == "" && s.length > 1) {
        return true;
    } else if(s.length == 0) {
        return true;
    } else {
        return false;
    }
};
