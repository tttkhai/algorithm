const circuitInterval = (arr) => {
    const result = []
    let startIndx = 0;
    if(arr[0][0] === 'OFF') {
        result.push([0, arr[0][1]])
        startIndx++;
    }

    for(let i=startIndx; i<arr.length-1; i+=2) {
        result.push([arr[i][1], arr[i+1][1]])
    }
    
    return result;
}

const arr = [["ON", 3], ["OFF", 5], ["ON", 7], ["OFF", 8], ["ON", 9]]
// const arr = [["OFF", 3], ["ON", 5], ["OFF", 7], ["ON", 8], ["OFF", 9]]
// const arr = [["ON", 3], ["OFF", 5], ["ON", 7], ["OFF", 8], ["ON", 9], ["OFF", 10]]
// const arr = [["OFF", 3], ["ON", 5], ["OFF", 7], ["ON", 8], ["OFF", 9], ["ON", 10]]
console.log(circuitInterval(arr))