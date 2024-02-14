const missingNumber = (arr) => {
    let sum = arr.reduce((a, acc) => a+acc, 0)

    const hypo_sum = ((arr.length) * (arr.length+1)) / 2
    const result = hypo_sum - sum
    return result > 0 ? result : arr.length + 1
}

const arr = [0, 3, 1]
console.log(missingNumber(arr));