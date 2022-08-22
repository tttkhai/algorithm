// 4!
// 1*2*3*4
const num = 5
// recursion O(2^n)
const facRecursion = (num) =>{
    if(num === 0) {
        return 1
    } else {
        return num * facRecursion(num-1)
    }
}

const a = facRecursion(num)
console.log(a);

// bottom-up O(n)
const facBottomUp = (num) => {
    n=[]
    n[0]=1
    if(num === 0) {
        return 1
    }

    for(let i=1; i <= num; i++) {
        n[i] = n[i-1] * i
    }
    return n[num]
}

const b = facBottomUp(num, [])
console.log(b);

// memoization O(n)
const facMemoize = (num, cache) => {
    if(cache[num]){
        return cache[num]
    }

    if(num === 0) {
        return 1
    }

    value = num * facMemoize(num-1, cache)
    cache[num] = value

    return value
}

const d = facMemoize(num, [])
console.log(d);

