const findMaxSumContiguousSubarray = (arr) => {
    let maxSum = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(sum < 0) {
            sum = 0;
        }

        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}
let arr = [-2, 3, -4, 2, 1]
// let arr = [5,4,-1,7,8]
// let arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(findMaxSumContiguousSubarray(arr)); 
