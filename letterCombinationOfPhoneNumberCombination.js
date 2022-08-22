const backtrack = (index, currStr, digit, res) => { 
    const table = { 
        '2': 'abc', 
        '3': 'def',
        '4': 'ghi', 
        '5': 'jkl', 
        '6': 'mno', 
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    if(currStr.length === digit.length) {
        res.push(currStr)
        return
    }

    for(let i=0; i < digit.length; i++) {
        backtrack(index+1, currStr+table[digit[index]][i], digit, res)
    }
}

const letterCombinationOfPhoneNumberCombination = (digit) => {
    if(digit.length <1) {
        return
    }

    const res = []
    backtrack(0, '', digit, res)
    console.log(res);
}

letterCombinationOfPhoneNumberCombination('23');