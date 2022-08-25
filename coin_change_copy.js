// DP - Bottom Up
// create an array with length same as amount, calculate and fill with way
// time complexity: O(n^2)
coins = [1, 2, 5]
amount = 11

var coinChange = function(coins, amount) {
    // fill the array with all 0
    const len = amount + 1
    const dp = new Array(len).fill(len)

    dp[0] = 0
    console.log(dp);

    // i = 2, j = 1
    // coins[j] = 2
    // dp[2] = 2-2 => dp[i - coins[j]]
    for(let i=1; i < len; i++) {
        for(let j=0; j < coins.length; j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], 1 + dp[i-coins[j]])
            }
        }
    }

    return dp[amount] ? dp[amount] : 0
}

console.log(coinChange(coins, amount));





































var exampleCoinChange = function(coins, amount) {
    var dp = Array(amount + 1).fill(amount + 1);
    console.log("dp: "+JSON.stringify(dp)); 
  
    if (amount < 0) return -1;
    if (amount === 0) return 0;
  
    dp[0] = 0;
    console.log("coins: "+coins);
  
    for (var i = 1; i <= amount; i++) {
        console.log("i: "+i);
        for (var j = 0; j < coins.length; j++) {
            console.log("j: "+j);
            console.log("coins at j: "+coins[j]);
            console.log("dp[i - coins[j]] + 1 is: "+dp[i - coins[j]] + 1);

            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                console.log("dp[i]: "+dp[i]);
            }
        }
    }
  
    return dp[amount] > amount ? -1 : dp[amount];
  };


// exampleCoinChange(coins, amount)