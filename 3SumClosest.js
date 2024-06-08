const findThreeSumClosest = (arr, target) => {
    if(arr.length < 3) {
        return [];
    }

    arr=arr.sort((a, b) => a-b)

    let sum = arr[0]+arr[1]+arr[2]
    let result = sum;
    let min = Math.abs(sum - target)

    if(arr.length === 3) {
        return sum;
    }

    for(let i = 0 ; i < arr.length; i++) {
        let left = i+1;
        let right = arr.length - 1;
        while(left < right) {
            sum = arr[i]+arr[left]+arr[right]
            if(Math.abs(sum - target) < min) {
                min = Math.abs(sum - target)
                result = sum
            }
            if (sum < target) {
                left++
            } else if(sum > target) {
                right--
            } else {
                return sum;
            }
        }
    }

    return result
}

const arr = [-1, -2, 0, 1, 2, -4]
const target = 3
const result = findThreeSumClosest(arr, target)
console.log(result);