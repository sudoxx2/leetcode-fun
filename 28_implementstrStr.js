// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "" || needle.length == 0) {
        return 0
    }
    
    if(!haystack.includes(needle)) {
        return -1
    }

    for(let i = 0, j = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[j]) {
            console.log("infor")
            if(checkNeedle(haystack, needle, i)) {
                return i
            }
        }
    }
    return -1

};

function checkNeedle(haystack, needle, index) {
    
    haystack = haystack.slice(index)
    
    var strBuild = ""
    
    console.log("inCheckNEedle: " + haystack)
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[i]) {
            console.log(haystack[i] + ": - :" + needle[i])
            strBuild += haystack[i]
            console.log(strBuild)
            if(strBuild == needle) {
                return true
            }
        } else {
            return false
        }
    }
}