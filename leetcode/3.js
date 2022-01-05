/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var set = new Set();
    var left = 0
    var right = 0
    var max = 0
    while (right < s.length) {
        const rightStr = s[right]
        const leftStr = s[left]
        if (set.has(rightStr) && left != right) {
            left++
            set.delete(leftStr)
        } else {
            set.add(rightStr)
            right++
        }
        if (set.size > max) {
            max = set.size
        }
    }
    return max
};

s = "abcabcbb"
let a = lengthOfLongestSubstring(s)
console.log(a)