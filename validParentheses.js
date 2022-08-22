const isValidParentheses = (arr) => {
    const stack = []
    if(!arr.length) {
        return false
    }

    for(let i=0; i<arr.length; i++) {
        if(['{', '(','['].includes(arr[i])){
            stack.push(arr[i])
        } else {
            const top = stack.pop()
            const equivalentParentheses = {'}' : '{', ')': '(', ']': '['}
            if(equivalentParentheses[arr[i]] !== top) {
                return false;
            }

        }
    }

    return stack.length === 0;
}

const arr = ['{', '(',')', '}',  '{', '}',  '(', ')']
const result = isValidParentheses(arr)
console.log(result);