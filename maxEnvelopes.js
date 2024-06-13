// Problem Statement: Given a collection of envelopes, where each envelope is represented as a pair of integers (width, height), find the maximum number of envelopes that can be nested (put one inside another).
// Example:
// Input: [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes that can be nested is [2, 3] -> [5, 4] -> [6, 7]

function maxEnvelopes(nums) {
    nums = nums.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    
    })
    const dp = Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j][1] < nums[i][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
}

const nums = [[5,2],[6,4],[6,7],[2,3]] 
console.log(maxEnvelopes(nums))
// [2,3] [5,2] [6,4] [6,7]
