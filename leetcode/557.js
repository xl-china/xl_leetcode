/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = "s[right]"
        s[right] = temp
        left++
        right--
    }
    console.log(s)
};

let s = "Let's take LeetCode contest"
reverseWords(s)