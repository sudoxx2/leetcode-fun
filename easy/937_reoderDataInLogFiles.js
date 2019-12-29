/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
      
    let digArr = []
    
    for(let i = logs.length - 1; i >= 0; i--) {
        if(logs[i].substr(0,4).includes('dig')) {
            digArr.push(logs[i])
            logs.splice(i, 1)
            i--
        }
    }
    
    digArr.reverse()
    
    logs = logs.sort((elem1, elem2) => {
        return elem1.split(' ')[1] > elem2.split(' ')[1]
    })
    
    logs = logs.concat(digArr)
    
    return logs
};
