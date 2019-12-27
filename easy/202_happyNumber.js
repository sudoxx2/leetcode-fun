/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let seen = new Map()
    
    let i = 0
    
    while(n != 1) {
        let current = n
        let sum = 0
        while(current != 0) {
            sum += (current % 10) * (current % 10)
            current = Math.trunc(current / 10)
        }

        if(findInMap(seen, sum)) {
            return false
        }
        
        seen.set(i++, sum)
        n = sum
    }
    
    return true
};

const findInMap = (map, val) => {
  for (let [k, v] of map) {
    if (v === val) { 
      return true; 
    }
  }  
  return false;
}
