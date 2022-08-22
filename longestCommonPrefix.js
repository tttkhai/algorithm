const arr = ["a"] 
// const arr = ["flower","flow","floght"] 
// const arr = ["flower","flow","floght"] 
// const arr = ["flower","flow","floght"] 

const findLongestCommonPrefix = (arr) =>{
    let prefix = ''
    if(arr.length === 0){
        return ""
    }

    for(let i=0; i < arr[0].length; i++){
        const char=arr[0][i]
        for(let j=0; j<arr.length; j++) {
            if(char !== arr[j][i]){
                return prefix
            }
        }
        prefix += char
    }
    return prefix
}

console.log("result: "+findLongestCommonPrefix(arr)); 