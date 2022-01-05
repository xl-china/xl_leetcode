var isPalindrome = function(x) {
    if (x <= 0) {
        return false
    }
    var result = 0
    var divNum = 10
    var curX = x
    while (curX != 0) {
        let last = curX % divNum
        result = last * divNum / 10 + result * 10
        curX = parseInt(curX / 10)
    }
    return result == x
};


let a = isPalindrome(122321)
console.log(a)
