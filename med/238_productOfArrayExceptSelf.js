/**
 * @param {number[]} nums
 * @return {number[]}
 * // brute force O(n^2)
 */
var productExceptSelf = function(nums) {
    if(nums == null) {
        return []
    }
    
    let ansArr = []
    
    for(let i = 0; i < nums.length; i++) {
        productArr = []
        for(let j = 0; j < nums.length; j++) {
            if(i != j) {
                productArr.push(nums[j])
            }
        }
        // console.log(productArr)
        ansArr[i] = productArr.reduce( (accumulator, elem) =>  accumulator * elem )
    }
    
    return ansArr
    
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * Accepted answer
 */
var productExceptSelf = function(nums) {
    let left = [1], right = [1], ansArr = []
    
    
    let prod = 0
    for(let i = 0; i < nums.length - 1; i++) {
        prod = left[i] * nums[i]
        left.push(prod)
    }
    
    prod = 0
    
    for(let i = nums.length - 1, j = 0; i > 0; i--, j++) {
        prod = right[j] * nums[i]
        right.push(prod)
    }
    
    right = right.reverse()
    
    for(let i = 0; i < nums.length; i++) {
        ansArr.push(left[i] * right[i])
    }
    
    return ansArr
};
