/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    x = x.toString()
    
    let negFlag = -1
    
    if(x.includes('-')) {
        x = x.replace('-', '')
       
        x = '-' + x.split("").reverse().join("").toString()
        
        if(checkMinAndMax(x)) {
            return 0
        }
        
        return x
    }
    
    x = x.split("").reverse().join("").toString()
    
    if(checkMinAndMax(x)) {
            return 0
    }
    
    return x
};

var checkMinAndMax = function(x) {
    if(parseInt(x) > (Math.pow(2, 31) - 1) || parseInt(x) < Math.pow(-2, 31)) {
            return true
    }
}
