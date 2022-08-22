str = [1,2,4,2,3,5]
const removeDup = (a) => {
    const b = {}
    const c = []
    for(let i=0; i< a.length; i++) {
        if(a[i] in b) {
            b[a[i]] = b[a[i]]++
        } else {
            c.push(a[i])
            b[a[i]] = 1
        }
    }
    return c
}

const noDup = removeDup(str)
console.log(noDup);

const removeDupBySet = (a) => {
    return [...new Set(a)]
}

const noDupBySet = removeDupBySet(str)
console.log(noDupBySet);


const removeDupBySort = (a) => {
    const b = []
    a.sort()
    b.push(a[0])
    for(let i=1; i<a.length; i++){
        if(a[i] !== a[i-1]){
            b.push(a[i])
        }
    }

    return b
}

const noDupBySort = removeDupBySort(str)
console.log(noDupBySort);
