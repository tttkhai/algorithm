const mapLetters = {
    '2':"abc",
    '3':"def",
    '4':"ghi",
    '5':"jkl",
    '6':"mno",
    '7':"pqrs",
    '8':"tuv",
    '9':"wxyz"
}

var letterCombinations = function(digit) {
    let len = digit.length, ans = []
    if (!len) {
        return []
    }
    
    const bfs = (pos, str) => {
        if (pos === len) {
            ans.push(str)
            return
        } 

        let letters = mapLetters[digit[pos]]
        for (let i = 0; i < letters.length; i++) {
            bfs(pos+1,str+letters[i])
        }
    }
    bfs(0,"")
    return ans
};

console.log(letterCombinations('2354'));