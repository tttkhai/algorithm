const findThreeSumClosest = (arr, target) => {
    arr=arr.sort((a, b) => a-b)
    var result = []
    console.log("arr: "+arr);

    var sum = arr[0]+arr[1]+arr[2]
    var min = Math.abs(sum - target)
    console.log("min: "+min);
    result = [arr[0], arr[1], arr[2]]
    for(let i= 0 ; i< arr.length; i++) {

        var left = i+1;
        var right = arr.length - 1;
        while(left < right) {
            sum = arr[i]+arr[left]+arr[right]
            if(Math.abs(sum - target) < min) {
                min = Math.abs(sum - target)
                result= [arr[i], arr[left], arr[right]]
            }
            if(sum < target) {
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

const arr = [-1,-2 ,0,1,2,-4]
const target = 3
const result = findThreeSumClosest(arr, target)
console.log(result);