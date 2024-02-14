// racecar
const a = 'racecar'

const isPalindrom = (str) => {

    for(let i = 0; i <= Math.round(str.length/2); i++) {
        console.log("i "+ i + ", str[i] " + str[i] + " str[arr.length -1 -i]: " + str[str.length -1 -i]);
        if(str[i] !== str[str.length -1 -i]) {
            return false;
        }
    }

    return true;
}

const result = isPalindrom(a)
console.log(result);