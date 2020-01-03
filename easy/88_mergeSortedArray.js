/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.splice(0,3)
    
    var sortedMerge = []
    
    let i = 0, j = 0
    
    while(nums1.length != i && nums2.length != j) {
        if(nums1[i] < nums2[j]) {
            sortedMerge.push(nums1[i])
            i++
        } else if(nums1[i] > nums2[j]) {
            sortedMerge.push(nums2[j])
            j++
        } else {
            sortedMerge.push(nums1[i])
            sortedMerge.push(nums2[j])
            i++
            j++
        }
    }
    
    if(i > j) {
        sortedMerge = sortedMerge.concat(nums2.splice(j, nums2.length))
    }
    
    if(i < j){
        sortedMerge = sortedMerge.concat(nums1.splice(i, nums1.length))
    }
    
    console.log(sortedMerge.length)
    console.log(sortedMerge)
    
    
    nums1 = sortedMerge
    
    nums1 = nums1.push(4)
    
    console.log(nums1)
};
