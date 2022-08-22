def hasPriority(op1, op2):
    print("op1 "+ op1)
    print("op2 " + op2)
    """"""
    if op1 == '(' or op1 == ')':
        return False
    if (op1 == '*' or op1 == '/') and (op2 == '+' or op2 == '-'):
        return False

    return True


def operations(op, a, b):
    """"""
    if op == '+':
        return a+b
    elif op == '-':
        return a-b
    elif op == '*':
        return a*b
    elif op == '/':
        if b == 0:
            print("cannot divided by 0")
        else:
            return a/b
    elif op == '^':
        return pow(a, b)
    else:
        print("Invalid Operation")


def calculate(string):
    """"""
    operators = ['+', '-', '*', '/', '^']
    values = []
    ops = []
    i=0
    while i < len(string):
        if string[i].isdigit():
            buffer = ''
            print("buffer 1: "+ str(buffer))
            while(string[i].isdigit()):
                buffer += string[i]
                i+=1
            i-=1
            print("buffer "+ str(buffer))
            print("look at i "+ str(i))
            values.append(buffer)
        elif string[i] == '(':
            ops.append(string[i]) 
        elif string[i] == ')':
            while(ops and hasPriority(string[i], ops[-1])):
                values.append(operations(ops.pop(), values.pop(), values.pop()))
            ops.pop()
        elif string[i] in operators:
            print(string[i])
            while(ops and hasPriority(string[i], ops[-1])):
                values.append(operations(string[i], values.pop(), values.pop()))
                print("look: "+ str(values))
            ops.append(string[i])
        i+=1

    while ops:
        values.append(operations(ops.pop(), values.pop(), values.pop()))

    return values.pop() or None

print(calculate('412/4+(3+4/2+5)'))
