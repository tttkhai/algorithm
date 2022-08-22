// price: 12.68
// pay: 15
// change: 3.32 
// Expected result: [ 'TWO DOLLAR', 'QUARTER', 'NICKLE', 'PENNY', 'PENNY' ]

const getChange = (price, paid) => {
    const result = []
    const change = getDollarBillChange(price - paid, result)
    console.log(change);
}

const getDollarBillChange = (money, result) => {
    money = money.toFixed(2)
    if(money <= 0) {
        return result;
    }

    if(money >= 100) {
        result.push('ONE HUNDRED DOLLAR')
        return getDollarBillChange(money - 100, result)
    } else if(money >= 50) {
        result.push('FIFTY DOLLAR')
        return getDollarBillChange(money - 50, result)
    } else if(money >= 10) {
        result.push('TEN DOLLAR')
        return getDollarBillChange(money - 10, result)
    } else if(money >= 5) {
        result.push('FIVE DOLLAR')
        return getDollarBillChange(money - 5, result)
    } else if(money >= 2) {
        result.push('TWO DOLLAR')
        return getDollarBillChange(money - 2, result)
    } else if(money >= 1) {
        result.push('ONE DOLLAR')
        return getDollarBillChange(money - 1, result)
    } else {
        return getCoinChange(money, result);
    }
}

const getCoinChange = (money, result) => {
    if(money <= 0) {
        return result;
    }
    console.log("money 2: "+money);

    if(money >= 0.25) {
        result.push('QUARTER')
        return getCoinChange(money - 0.25, result)
    } else if(money >= 0.10) {
        result.push('DIME')
        return getCoinChange(money - 0.1, result)
    } else if(money >= 0.05) {
        result.push('NICKLE')
        return getCoinChange(money - 0.05, result)
    } else {
        money = money.toFixed(2)
        result.push('PENNY')
        return getCoinChange(money - 0.01, result);
    }
}

getChange(15, 12.68)