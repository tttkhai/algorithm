const num = 3
// recursion O(2^n)
const fibRecursion = (num) =>{
    if(num < 2) {
        return num
    }
    return fibRecursion(num-1) + fibRecursion(num-2)
}

const a = fibRecursion(num)
console.log(a);

// bottom-up O(n)
const fibBottomUp = (num) => {
    n=[]
    n[0] = 0
    n[1] = 1
    if(num < 2){
        return num
    }

    for(let i=2; i <= num; i++) {
        n[i] = n[i-1] + n[i-2]
    }
    return n[num]
}

const b = fibBottomUp(num, [])
console.log(b);

// memoization O(n)
const fibMemoize = (num, cache) => {
    if(cache[num]) {
        return cache[num]
    }

    if(num < 2){
        return num
    }

    value = fibMemoize(num-1, cache) + fibMemoize(num-2, cache)
    cache[num] = value
    return value
}

const d = fibMemoize(num, [])
console.log(d);

