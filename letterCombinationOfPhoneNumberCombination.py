def backtrack(i, curStr, digit, res):
    digitToChar = { 
        '2': 'abc', 
        '3': 'def',
        '4': 'ghi', 
        '5': 'jkl', 
        '6': 'mno', 
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    if len(digit) == len(curStr):
        res.append(curStr)
        print(res)
        return

    print("here 1")
    for index, c in enumerate(digitToChar[digit[i]]):
        print("here 2: "+ str(i) + ". digit[i]: "+digit[i] +". c: "+str(c) +". index: "+str(index))
        print("curStr: "+curStr)
        backtrack(i+1, curStr+c, digit, res)
        print("important")


def letterCombination(digit):
    res = []

    if digit:
        print("alo")
        backtrack(0, '', digit, res)
    print("done")
    return res

print(letterCombination('293'))
