// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s == null || s.length == 0) {
    return -1;
  }

  var map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], { val: 0 });
    } else if (map.has(s[i])) {
      map.get(s[i]).val++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]).val < 1) {
      return i;
    }
  }

  return -1;
};
