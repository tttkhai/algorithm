const missingNumber = (arr) => {
    var sum = 0
    for(var a of arr) {
        sum+=a
    }

    const lastNum = Math.max(...arr)
    const hypo_sum = ((lastNum) * (lastNum+1)) / 2
    const result = hypo_sum - sum
    return result > 0 ? result : lastNum + 1
}

const arr = [0, 3, 1, 2]
console.log(missingNumber(arr));