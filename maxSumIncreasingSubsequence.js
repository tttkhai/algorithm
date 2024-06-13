const maxSumIncreasingSubsequence = (nums) => {
    const dp = [...nums];
    console.log(dp);

    for(let i=1; i<nums.length; i++) {
        for(let j=0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], nums[j] + dp[j])
            }
        }
    }

    return Math.max(...dp)
}

console.log(maxSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5]));