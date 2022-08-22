// DP - Bottom Up
coins = [1, 2, 5]
amount = 11

var coinChange = function(coins, amount) {
    
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