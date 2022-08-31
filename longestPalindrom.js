// babaabacd
// abaaba
const v = 'babaabacd'
const findLongestPanlindrom = (str) => {
    if(str.length < 2){
        return str
    }

    var currPan=0;
    var left=0;
    var right=0;
    var longestPanlindromn='';
    for(let i=1; i<str.length-1; i++) {
        var pan1=expandFromMiddleIndex(i, i, str)
        var pan2=expandFromMiddleIndex(i, i+1, str)
        currPan = Math.max(pan1, pan2)
        console.log("currPan: "+currPan);
        if(currPan.length>longestPanlindromn.length) {
            longestPanlindromn=currPan
            left=i-((currPan-1)/2)
            right=i+(currPan/2)
        }
    }

    return str.substring(left, right+1);
}

const expandFromMiddleIndex = (l, r,str) => {
    console.log("l: "+l+". r: "+r);
    console.log("str[l]: "+str[l]+". str[r]: "+str[r]);
    while (l >= 0 && r < str.length && str[l] === str[r]) {
        l--;
        r++;
    }
    return r-l-1;
}

console.log(findLongestPanlindrom(v));
