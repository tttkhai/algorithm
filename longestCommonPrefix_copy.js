// const arr = ["a"] 
const arr = ["flower","flow","floght"] 
// const arr = ["flower","flow","floght"] 
// const arr = ["flower","flow","floght"] 

const findLongestCommonPrefix = (arr) =>{
    let prefix = ''
    let longestPrefix = ''
    for(let i=0; i < arr[0].length; i++) {
        prefix = arr[0][i]
        for(let j=0; j < arr.length; j++) {
            console.log(arr[i]);
            console.log(arr[i][j]);
            if(prefix !== arr[j][i]) {
                return longestPrefix
            }
        }
        longestPrefix+=prefix
    }
    return longestPrefix.length ? longestPrefix : ''
}

console.log("result: "+findLongestCommonPrefix(arr))

