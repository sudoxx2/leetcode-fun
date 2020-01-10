/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var minDominoRotations = function(A, B) {
    let domObj = {}
    
    for(let i = 0; i < A.length; i++) {
        // console.log(A[i])
        if(!(A[i] in domObj)) {
            // console.log("1condi")
            domObj[A[i]] = 1
            // console.log(domObj.2)
        } else {
            // console.log("2condi")
            domObj[A[i]] = domObj[A[i]] + 1
        }
    }
    
    for(let i = 0; i < B.length; i++) {
        if(!(B[i] in domObj) && (A[i] != B[i])) {
            domObj[B[i]] = 1
            // console.log(domObj.2)
        } else if(A[i] != B[i]) {
            domObj[B[i]] = domObj[B[i]] + 1
        } else {
            continue
        }
    }
    
    console.log(domObj)
    
    if(!isSolvable(A, B, domObj)) {
        return -1
    } 
    
    let targetVal = Number.MIN_VALUE
    let target = -1
    
    for(key in domObj) {
        if(targetVal < domObj[key]) {
            targetVal = domObj[key]
            target = key
        }
    }
    
    console.log(target)
    
    let rotationsA = 0, rotationsB = 0
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] != target) {
            rotationsA++
        }
    }
    
    for(let i = 0; i < B.length; i++) {
        if(B[i] != target) {
            rotationsB++
        }
    }
    
    if(rotationsA < rotationsB) {
        return rotationsA
    } else {
        return rotationsB
    }
    
};

var isSolvable = function(A, B, domObj) {
    for(key in domObj) {
        console.log(key + ' - ' +domObj[key])
        if(domObj[key] >= A.length) {
            return true
        }
    }
    
    return false
}
