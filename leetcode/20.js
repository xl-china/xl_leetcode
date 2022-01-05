/**
 * @param {string} 
 * @return {boolean}
 */
 var isValid = function(s) {

    let leftArr = new Set(["(", "{", "["])
    let rightArr = new Set([")", "]", "}"])
    let stack = []
    for (i = 0; i < s.length; i++) {
        let str = s.charAt(i)
        if (leftArr.has(str)) {
            stack.push(str)
        } else if (rightArr.has(str)) {
            let bracket = returnBrackets(str)
            if (stack < 1) {
                return false
            } else if (stack[stack.length - 1] == bracket) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length == 0
};

var returnBrackets = function(s) {
    switch (s) {
        case ")":
            return "("
        case "]":
            return "["
        case "}":
            return "{"
    }
}

let a = "([]){}"

let b = isValid(a)
console.log(b)