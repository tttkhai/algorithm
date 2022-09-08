const missingNumber = (arr) => {
    var sum = 0
    for(var a of arr) {
        sum+=a
    }

    const hypo_sum = ((arr.length) * (arr.length+1)) / 2
    const result = hypo_sum - sum
    return result > 0 ? result : arr.length + 1
}

const arr = [0, 3, 1]
console.log(missingNumber(arr));