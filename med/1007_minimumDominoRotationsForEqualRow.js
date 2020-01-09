/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  let domObj = {}
  
  for(let i = 0; i < A.length; i++) {
      if(!(A[i] in domObj)) {
          domObj[A[i]] = 1
          // console.log(domObj.2)
      } else {
          domObj[A[i]] = domObj[A[i]] + 1
      }
  }
  
  for(let i = 0; i < B.length; i++) {
      if(!(B[i] in domObj)) {
          domObj[B[i]] = 1
          // console.log(domObj.2)
      } else {
          domObj[B[i]] = domObj[A[i]] + 1
      }
  }
  
  Object.keys(domObj).forEach(key => {
      console.log(domObj[key])
  })
  
  console.log(domObj)
};

  
//     for(let i = 0; i < A.length ; i++) {
//         if(dominoMap.has(A[i])) {
//             dominoMap.set(A[i], (dominoMap.get(A[i]) + 1))
//         } else {
//             dominoMap.set(A[i], 1)
//         }
//     }
  
//     for(let i = 0; i < B.length ; i++) {
//         if(dominoMap.has(B[i])) {
//             dominoMap.set(B[i], (dominoMap.get(A[i]) + 1))
//         } else {
//             dominoMap.set(B[i], 1)
//         }
//     }
  
  