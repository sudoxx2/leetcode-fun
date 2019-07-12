// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  return checkForMatches(nums1, nums2);
};

var checkForMatches = function(nums1, nums2) {
  var matches = [];
  for (var i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      matches.push(nums1[i]);
      var index2 = nums2.indexOf(nums1[i]);
      var index1 = i;
      nums2.splice(index2, 1);
    }
  }
  console.log(matches);
  return matches;
};
