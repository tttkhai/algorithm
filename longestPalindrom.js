// babaabacd
// abaaba
const v = 'babaabacd'
const findLongestPanlindrom = (str) => {
    let longestPanlindromn = ''

    if(str.length < 2) {
        return str;
    }

    for(let i = 0; i < str.length; i++) {
        const pan1 = expandFromMiddleIndex(i, i, str)
        const pan2 = expandFromMiddleIndex(i, i+1, str)
        const pan = pan1.length > pan2.length ? pan1 : pan2

        if(pan.length > longestPanlindromn.length && pan.length > 1) {
            longestPanlindromn = pan;
        }
    }

    return longestPanlindromn;
}

const expandFromMiddleIndex = (l, r, str) => {
    console.log(`first left ${l}`);
    console.log(`first right ${r}`);
    while (l >= 0 && r < str.length && str[l] === str[r]) {
        l--;
        r++;
    }

    l++;
    r--;

    return r - l > 1 ? str.substring(l, r+1) : '';
}

console.log(findLongestPanlindrom(v));
