function countIncreasingSubsequences(nums, k) {
    const n = nums.length;
    if (k == 1) return n;

    const dp = Array.from({ length: n }, () => Array(k + 1).fill(0));

    // Base case: Subsequences of length 1
    for (let i = 0; i < n; i++) {
        dp[i][1] = 1;
    }

    // Fill dp array
    for (let length = 2; length <= k; length++) {
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i][length] += dp[j][length - 1];
                }
            }
        }
    }
    console.log(dp);

    // Sum up all dp[i][k] for the answer
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += dp[i][k];
    }

    return result;
}

// Example usage
const nums = [1, 2, 3, 4, 2, 5];
const k = 3;
console.log(countIncreasingSubsequences(nums, k)); // Output: 10