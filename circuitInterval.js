const circuitInterval = (arr) => {
    const result = []
    for(let i=0; i<arr.length-1; i+=2) {
        if(i===0 && arr[i][0] === 'OFF') {
            result.push([0, arr[i][1]])
            i++;
        }
        result.push([arr[i][1], arr[i+1][1]])
    }
    console.log(result);
}

// const arr = [["ON", 3], ["OFF", 5], ["ON", 7], ["OFF", 8], ["ON", 9]]
// const arr = [["OFF", 3], ["ON", 5], ["OFF", 7], ["ON", 8], ["OFF", 9]]
// const arr = [["ON", 3], ["OFF", 5], ["ON", 7], ["OFF", 8], ["ON", 9], ["OFF", 10]]
const arr = [["OFF", 3], ["ON", 5], ["OFF", 7], ["ON", 8], ["OFF", 9], ["ON", 10]]
circuitInterval(arr)