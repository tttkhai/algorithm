
// (1+2)
// 412+3+(4+6/2+5)
// Returns true if 'op2' has higher or same priority as 'op1',
// otherwise returns false.
const calculate = s => {
  s = s.trim(' ')

  const values = []
  const ops = []
  const operations = ['+', '-', '*', '/', '^']

  for(let i = 0; i < s.length; i++) {
    if(!isNaN(Number(s[i])) || s[i] === '.') {
      let num = ''
      while(!isNaN(Number(s[i])) || s[i] === '.') {
        num+=s[i++]
      }
      values.push(Number(num))
      i--
    } else if(s[i] === '(') {
      ops.push(s[i])
    } else if(s[i] === ')') {
      while(ops.length && ops[ops.length-1] !== '(') {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()))
      }
      ops.pop()
    } else if (operations.includes(s[i])) {
      while(ops.length && hasPriority(ops[ops.length-1], s[i])) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()))
      }
      ops.push(s[i])
    }
  }

  while(ops.length) {
    values.push(applyOp(ops.pop(), values.pop(), values.pop()))
  }

  return values.pop()

};

const hasPriority = (op1, op2) => {
  if(op1 === '(' || op1 === ')') {
    return false
  }

  if ((op2 === '*' || op2 === '/' || op2 === '^') && (op1 === '+' || op1 === '-')) {
    return false
  }

  return true
  
}
  
// A utility method to apply an operator 'op' on operands 'a'
// and 'b'. Return the result.
const applyOp = (op, b, a) => {
  switch(op) {
    case '+':
      return a+b
    case '-':
      return a-b
    case '*':
      return a*b
    case '^':
      return Math.pow(a, b)
    case '/':
      if (b===0) {
        console.log("can divided by 0");
        break
      }
      return a/b
    default:
      console.log("invalid");
      break
  }
  return 0
};


console.log(calculate('(1.2+2/2)'));
console.log(calculate('4/2+2/2'));
console.log(calculate('414/3+(4-6/2+5)'));
