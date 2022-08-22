const find_max_sub_array = (arr) => {
    let max = arr[0]
    let current_sum = 0
    for(let i=0; i<arr.length; i++) {
        if (arr[i] <0) {
            current_sum = 0
        } else {
            console.log("current_sum: "+current_sum);
            current_sum+=arr[i]
            max = Math.max(max, current_sum)
            console.log("max "+max);
        }
        
    }

    return max
}
const arr = [-2, 3,2,1]
console.log(find_max_sub_array(arr)); 
