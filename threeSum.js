//Input: nums = [-1,0,1,2,-1,-4, 3]
// -4,-2-1,-1,0,1,2,3
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = (arr) => {
    let current = 0
    let current_sum = 0
    let threeSumList = []
    
    for(let i=0; i<arr.length-2; i++) {
        current = arr[i]
        let left = i+1
        let right = arr.length - 1
        
        while(left<right) {
            current_sum = current+arr[left]+arr[right]
            console.log( "current: " + current+". arr[left]: "+arr[left] + ". arr[right]: " +arr[right]+ ". current_sum "+current_sum);
            let threeSum = []
            if(current_sum === 0) {
                threeSum=[current, arr[left], arr[right]]
                threeSumList.push(threeSum)
                break
            } else if(current_sum < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return threeSumList
}

let arr = [-1,0,1,2,-1,-4, 3]
arr.sort((a, b)=> {return a-b})
const result = threeSum(arr)
console.log(result);

