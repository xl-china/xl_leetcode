/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate1 = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        let firNum = nums[i]
        for (var j = i + 1; j < nums.length; j++) {
            let secNum = nums[j]
            if (firNum == secNum) {
                return true
            }
        }
    }
    return false
};

var containsDuplicate2 = function(nums) {
    let dic = new Set();

    for (var i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (dic.has(num)) {
            return true
        }
        dic.add(num)
    }
    return false
}

let a = containsDuplicate2([1,2,3,4,5])
console.log(a)