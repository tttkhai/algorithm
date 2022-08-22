const a = "5\n5 5\n10 50\n9 9883\n3 995\n65 6752"
const query = a[0]
const input = a.split('\n')
const newInput = []
for(let i=1; i <= query; i++) {
    newInput.push(input[i])
}

const hello = (query, newInput) => {
    let result = []
    for(let i=0; i<query; i++) {
        const [initialLevel, expectedLevel] = newInput[i].split(' ')
        let time = getTime(Number(initialLevel), Number(expectedLevel), 0)
        console.log("initialLevel: "+initialLevel +". expectedLevel: "+expectedLevel+". time: "+ time);
        result.push(time)
    }
    return result
}

const getTime = (c, expectedLevel, time) => {
    // console.log("c: "+c + "expectedLevel: " +expectedLevel+ ". time: " +time);
    if(c >= expectedLevel) {
        return time
    } else {
        if(c >= 0 && c<=10) {
            return getTime(c+10, expectedLevel, time+=1)
        } else if (c >= 11 && c<=230) {
            return getTime(c+5, expectedLevel, time+=1)
        }else if (c >= 231 && c<=559) {
            return getTime(c+8, expectedLevel, time+=1)
        }else if (c >= 560 && c<=1009) {
            return getTime(c+2, expectedLevel, time+=1)
        }else if (c >= 1010 && c<=5000) {
            return getTime(c+7, expectedLevel, time+=1)
        }else if (c >= 5001 && c<=10000) {
            return getTime(c+8, expectedLevel, time+=1)
        }else if (c >= 10001 && c<=1000000000) {
            return getTime(c+3, expectedLevel, time+=1)
        } else {
            return time;
        }
    }

    
}

console.log(hello(query, newInput));


