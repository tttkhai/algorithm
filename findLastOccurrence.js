          // 0  1  2  3  4  5  6  7
const arr = [1, 2, 3, 4, 4, 4, 5, 6] 
const target = 8
const findLastOccurrence = (l, r, arr, target) => {
    while (l<=r) {
        let mid = Math.round((l+r)/2)
        if((mid === (arr.length-1) && arr[mid] === target) || (arr[mid] === target && arr[mid+1] !==target)) {
            return mid
        } else if(arr[mid] > target) {
            return findLastOccurrence(l, mid-1, arr, target)
        } else {
            return findLastOccurrence(mid+1, r, arr, target)
        }
    }
    return -1;
}

const findFirstOccurrence = (l, r, arr, target) => {
    while (l<=r) {
        let mid = Math.round((l+r)/2)
        if((mid === 0 && arr[mid] === target) || (arr[mid] === target && arr[mid-1] !==target)) {
            return mid
        } else if(arr[mid] < target) {
            return findFirstOccurrence(mid+1, r, arr, target)
        } else {
            return findFirstOccurrence(l, mid-1, arr, target)
        }
    }
    return -1;
}

const findFirstLastOccurrence = (arr, target) => {
    const first = findFirstOccurrence(0, arr.length-1, arr, target)
    const last = findLastOccurrence(0, arr.length-1, arr, target)
    return [first, last]
}

console.log(findFirstLastOccurrence(arr, target));
