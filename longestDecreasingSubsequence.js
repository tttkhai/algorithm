var longestDecreasingSubsequence = function (num) {
    const lis = Array(num.length).fill(1);

    for(let i = 1; i < num.length; i++) {
        console.log(`i ${i}`)
        for(let j = 0 ; j < i; j++) {
            console.log(`i, j ${num[i]}, ${num[j]}`)
            if(num[j] > num[i]) {
                lis[i] = Math.max(lis[i], lis[j] + 1)
            }
            console.log(lis)
        }
    }

    return Math.max(...lis)
};

console.log(longestDecreasingSubsequence([80, 60, 41, 50, 21, 33, 9, 22, 10]));