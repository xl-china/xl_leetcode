/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let num = k % nums.length
    while (num > 0) {
        singleRotate(nums)
        num--
    }
    console.log(nums)
};

var singleRotate = function(nums) {
    var point = nums.length - 1
    while (point >= 1) {
        let temp = nums[point]
        nums[point] = nums[point - 1]
        nums[point - 1] = temp
        point--
    }
}

let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)