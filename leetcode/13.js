/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0
    var lastNum = 0
    for (var i = s.length - 1; i >= 0; i--) {
        let c = s.charAt(i)
        let num = getValue(c)
        if (num < lastNum) {
            result = result - num
        } else {
            result = result + num
        }
    }
    return result
};

var getValue = function(x) {
    switch(x) {
        case "I":
            return 1
            break
        case "V":
            return 5
            break
        case "X":
            return 10
            break
        case "L":
            return 50
            break
        case "C":
            return 100
            break
        case "D":
            return 500
            break
        case "M":
            return 1000
            break
    }
}

let r = romanToInt("XIII")
console.log(r)