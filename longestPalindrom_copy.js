// babaabacd
// abaaba
const v = 'babaabacd'
const findLongestPanlindrom = (str) => {
    
}

const expandFromMiddleIndex = (l, r,str) => {
    console.log("l: "+l+". r: "+r);
    console.log("str[l]: "+str[l]+". str[r]: "+str[r]);
    while (l >=0 && r < str.length && str[l] === str[r]) {
        l--;
        r++;
    }
    return r-l-1;
}

console.log(findLongestPanlindrom(v));
