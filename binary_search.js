const binarySearch = (l, r, arr, target) => {
    const mid = Math.round((l+r)/2)

    while(l <= r) {
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            return binarySearch(l , mid-1, arr, target)
        } else {
            return binarySearch(mid+1 , r, arr, target)
        }
    }

    return -1
}

const arr = [0,2,5,3,6,7]
arr.sort()
const target = 0
console.log(binarySearch(0, arr.length-1, arr, target)); 

// target : 2
 // 0 1 2 3