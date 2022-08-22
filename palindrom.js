// racecar
const a = 'racecar'

const isPalindrom = (str) => {
    for(let i = 0; i < str.length/2; i++) {
        if(str.charAt(i) !== str.charAt(str.length -i -1)) {
            return false
        }
    }
    return true
}

const result = isPalindrom(a)
console.log(result);