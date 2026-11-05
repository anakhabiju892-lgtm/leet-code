/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let count={};

    for(let num of nums){
        count[num]=(count[num]|| 0)+1;
        if (count[num]>2){
            return false;
        }
    }
    return true;
};