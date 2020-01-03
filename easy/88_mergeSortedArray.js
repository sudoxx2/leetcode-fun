/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let i = 0, j = 0
    
    nums1.splice(m, nums1.length)
    
    while(m+n != i && m+n != j) {
        // case where end of first array but second array has finished scanning
        if(nums1.length <= i && nums2.length != j) {
            nums1[i] = nums2[j]
            j++
            i++
        } else if(nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j])
            j++
            i+2
        } else if(nums1[i] < nums2[j]) {
            i++ 
        } else {
            i++
        }
    }
};
