/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((sum, n) => sum + n, 0);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let sum = 0;
        let count = 1;

        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                count++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }

        if (count > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};