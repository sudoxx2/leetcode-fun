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

