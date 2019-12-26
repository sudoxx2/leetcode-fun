/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // loop through string to match "." and replace with "[.]"
    let build_str = ""
    for(let i = 0; i < address.length; i++) {
        if(address[i] == ".") {
            build_str = build_str.concat("[.]")
        } else {
            build_str = build_str.concat(address[i])
        }
    }
    
    console.log(build_str)
    return build_str
};
