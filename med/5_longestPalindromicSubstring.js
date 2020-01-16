/**
 * @param {string} s
 * @return {string}
 *"babad"
"cbbd"
"bb"

 */
var longestPalindrome = function(s) {
    if(s == null || s.length < 1) return ""
    if(s.length == 1) return s
    
    let start = 0, end = 0
    
    for(let i = 0; i < s.length; i++) {
        let len1 = expandFromMiddle(s, i, i)
        let len2 = expandFromMiddle(s, i, i+1)
        let len = Math.max(len1, len2)
        if(len > end - start) {
            start = i - (Math.trunc((len - 1) / 2))
            end = i + Math.trunc((len / 2))
            console.log(start + " " + end)
        }
    }
    
    return s.substr(start, end + 1)
    //babad
    

};


function expandFromMiddle(s, left, right) {
    if(s == null || left > right) return 0
    
    // console.log(left+ " " + right)
    while(left >= 0 && right < s.length && s[left] == s[right]) {
        left--
        right++
    }
    
    return right - left - 1
}
