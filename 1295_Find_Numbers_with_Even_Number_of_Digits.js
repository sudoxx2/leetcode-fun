/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    // read the data through a loop
    // set conditionals for single, double, and triple digit counts
    // have a counter for each even number array
    
    count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 10 && nums[i] < 100) {
            count++;
        } else if(nums[i] >= 1000 && nums[i] < 10000 ) {
            count++;
        } else if(nums[i] >= 100000) {
            count++;
        }
    }
    
    return count;
};
