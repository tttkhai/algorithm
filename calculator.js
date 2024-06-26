const calculate = s => {
    // Stack for numbers: 'values'
    s = s.trim(' ')
    const values = []
    // Stack for Operators: 'ops'
    const ops = []
  
    for (let i = 0; i < s.length; i++) {
      // Current token is a number, push it to stack for numbers
      if (s[i] >= '0' && s[i] <= '9') {
        let buffer = ''
        // There may be more than one digits in number
        while (i < s.length && (s[i] >= '0' && s[i] <= '9') || s[i]  == '.') {
          buffer += s[i++]
        }
        values.push(Number(buffer))
        i-- 
      } else if (s[i] === '(') { // Current token is an opening brace, push it to 'ops'
        ops.push(s[i])
      } else if (s[i] === ')') {
        while (ops[ops.length - 1] !== '(') { // Closing brace encountered, solve entire brace
          values.push(applyOp(ops.pop(), values.pop(), values.pop()))
        }
        ops.pop()
      } else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') { // Current token is an operator.
        // While top of 'ops' has same or greater precedence to current
        // token, which is an operator. Apply operator on top of 'ops'
        // to top two elements in values stack
        while (ops.length && hasPrecedence(s[i], ops[ops.length - 1])) {
          values.push(applyOp(ops.pop(), values.pop(), values.pop()))
        }
        // Push current token to 'ops'.
        ops.push(s[i])
      }
    }
  
    // Entire expression has been parsed at this point, apply remaining
    // ops to remaining values
    while (ops.length) {
      values.push(applyOp(ops.pop(), values.pop(), values.pop()))
    }
  
    // Top of 'values' contains result, return it
    return values.pop()
}
  
  // Returns true if 'op2' has higher or same precedence as 'op1',
  // otherwise returns false.
const hasPrecedence = (op1, op2) => {
  if (op2 === '(' || op2 === ')') {
    return false
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false
  }
  return true
}
  
  // A utility method to apply an operator 'op' on operands 'a'
  // and 'b'. Return the result.
const applyOp = (op, b, a) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) {
        throw 'Cannot divide by zero'
      }
    return Math.floor(a / b)
  }
  return 0
}

console.log(calculate('123.2+2*1+3+2/2'))
console.log(calculate('4/2+(2+2/2+2)'))
