// const arr = ["a"] 
// const arr = ["flower","flow","floght"] 
const arr = ["flower","flow","flowet"] 

const findLongestCommonPrefix = (arr) => {
    var longestCommonPrefix = ''
    for(var i = 0; i < arr[0].length; i++) {
        var prefix = arr[0][i]
        for(var j = 0; j < arr.length; j++) {
            if(prefix !== arr[j][i]) {
                return longestCommonPrefix
            }
        }

        longestCommonPrefix += prefix
    }

    return longestCommonPrefix
}

console.log("result: "+findLongestCommonPrefix(arr)); 
