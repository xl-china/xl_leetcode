/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var result = ""
    var commonS
    var index = 0
    for (var i = 0; i < strs.length; i++) {
        
        if (i == 0) {
            commonS = strs[i].charAt(index)
            continue
        }

        let curS = strs[i].charAt(index)
        let diff = curS == commonS
        if (!diff) {
            return result
        } else (i == strs.length - 1) {
            result = result + commonS
        }
        return result
    }
};

let str = ["flower","flow","flight"]

let a = longestCommonPrefix(str)
console.log(a)