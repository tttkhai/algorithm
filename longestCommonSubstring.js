// O(n.m)

const lcs = (str1, str2) => {
    const dp = Array(str2.length+1).fill(Array(str1.length+1).fill(0))
    console.log("look: "+ JSON.stringify(dp));

    // if (dp[i][j] != undefined) {
    //     return dp[i][j]
    // }
    // if (i === 0 || j === 0) {
    //     result = 0
    // }
    // else if (str1[i] === str2[j]) {
    //     dp[i][j] = 1 + lcs(str1, str2, i-1, j-1)
    // } else {
    //     var tmp1 = lcs(str1, str2, i-1, j)
    //     var tmp2 = lcs(str1, str2, i, j-1)
    //     dp[i][j] = Math.max(tmp1, tmp2)
    // }

    
    for(let i = str1.length; i > -1; i--) {
        for(let j = str2.length; j > -1; j--) {
            if(str1[i] === str2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1]
            } else {
                var tmp1 = dp[i+1][j]
                var tmp2 = dp[i][j+1]
                dp[i][j] = Math.max(tmp1, tmp2)
            }
        }
    }
    console.log("look: "+ JSON.stringify(dp));

    return dp[0][0]
}  

const str1 = 'BAD'
const str2 = 'ABACD'
console.log(lcs(str1, str2));