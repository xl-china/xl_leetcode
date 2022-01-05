/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var result = 0
    var divNum = 10
    var curX = x
    while (curX != 0) {
        let last = curX % divNum
        result = last * divNum / 10 + result * 10
        curX = parseInt(curX / 10)
    }
    return result
};


let result = reverse(-1234523)
console.log(result)