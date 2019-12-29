/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

    if(prices == null || prices.length <= 1) {
        return 0
    }
    
    let min = Number.MAX_VALUE
    let diffProfit = -1
    let pos = -1
    
    for(let i = 0; i < prices.length; i++) {
        if(i != prices.length -1) {
            if(min > prices[i]) {
                min = prices[i]
                pos = i
                
                if(diffProfit < profit(pos, prices)) {
                    diffProfit = profit(pos, prices)
                }
            }
        }
        
    }
    
    return diffProfit
    
};

var profit = function(pos, prices) {
    let diff = 0;
    for(let i = pos + 1; i < prices.length; i++) {
        if(diff < prices[i] - prices[pos]) {
            diff = prices[i] - prices[pos]
        }
    }
    return diff
}

