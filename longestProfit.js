// Input: [-1, 9, 0 ,-2, 8 , -5, 6, -24]
// Output: 3 because longest subsequence is [-1, 0, 8] or [-1, 0, 6]
function longestProfit(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const lis = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        console.log(`i ${i}`)
        for (let j = 0; j < i; j++) {
            console.log(`i, j ${nums[i]}, ${nums[j]}`)
            if (nums[i] > nums[j]) {
                console.log(`lis[i] ${lis[i]}`)
                console.log(`lis[j] + 1 ${lis[j] + 1}`)
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
            console.log(lis)
        }
    }

    return Math.max(...lis);
}

const num = [-1, 9, 0 ,-2, 8 , -5, 6, -24]
console.log(longestProfit(num))