// babaabacd
// abaaba
const v = 'babaabacd'
const findLongestPanlindrom = (str) => {
    if(str.length < 2){
        return str
    }

    var pan1=0;
    var pan2=0;
    var currPan=0;
    var left=0;
    var right=0;
    var longestPanlindromn='';
    for(let i=1; i<str.length-1; i++) {
        pan1=expandFromMiddleIndex(i, i, str)
        pan2=expandFromMiddleIndex(i, i+1, str)
        currPan = Math.max(pan1, pan2)
        console.log("currPan: "+currPan);
        if(currPan.length>longestPanlindromn.length) {
            longestPanlindromn=currPan
            left=i-currPan
            right=i+currPan
        }
    }

    return str.substring(left, right);
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




















const findLongestPanlindromString = (str) => {
    let maxSubString = "";
    let max = 0;
    for(let i=1; i< str.length -1; i++) {
        console.log("i: " + i);
        let sub1 = expandFromMiddle(i, i+1, str)
        let sub2 = expandFromMiddle(i, i, str)
        let string = Math.max(sub1, sub2)
        if(string > max) {
            maxSubString = str.substring(i-(string-1)/2+1, i+string/2)
            max=maxSubString.length
        }

        
        console.log("sub1 "+sub1);
        console.log("sub2 "+sub2);
        console.log("str "+string);
        console.log("maxSubString "+maxSubString);
    }
    return maxSubString
}

const expandFromMiddle = (l, r, str)=> {
    if (str.length <=0 || l >r ) {
        return 0;
    }

    while (l>0 && r < str.length-1 && str.charAt(l) === str.charAt(r)) {
        l--;
        r++;
        console.log("left "+l);
        console.log("r: "+r);
    }

    return r-l-1;
}

// console.log(findLongestPanlindromString('babaabacd')); 
 