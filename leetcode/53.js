/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var total = nums[0]
    var max = nums[0]
    for (var i = 1; i < nums.length; i++) {
        if (total < 0) {
            total = nums[i]
        } else {
            total = total + nums[i]
        }
        if (total > max) {
            max = total
        }
    }
    return max
};

let a = maxSubArray([-1, -2])
console.log(a)



[-2,1,-3,4,-1,2,-11,1,10,-5,4]