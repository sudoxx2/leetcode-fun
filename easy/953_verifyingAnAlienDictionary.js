/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let orderMap = new Map()
    
    // make map to set alien lexicographically order
    for(let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i)
    }
    
    // iterate through i and ith element in words array
    for(let i = 0; i < words.length - 1; i++) {
        
        // case to check if substring of second element exists in first element
        if(words[i].substr(0,words[i+1].length) == words[i+1] && words[i].length > words[i+1].length) {
            return false;
        }
        
        let j = 0;
        
        // case to check each character in i and ith element and compare against each other i.e. helper function compareAlienChar
        while(words[i].length != j || words[i+1].length != j) {
            if(words[i][j] == words[i+1][j]) {
                j++;
            } else if(compareAlienChar(words[i][j], words[i+1][j], orderMap)) {
                break;
            } else {
                return false
            }
        }
    }
    
    return true
};

// helper function to compare lexicographical alien order of letters
var compareAlienChar = function(l1, l2, orderMap) {
    if(orderMap.get(l1) < orderMap.get(l2)) {
        return true
    } else {
        return false
    }
}
