let word1 = "abc"
let word2 = "pqrs"

function testfunction(word1, word2){
    len1 = word1.length
    len2 = word2.length
    arr = []
    maxval = Math.max(len1, len2)
    for(i = 0; i < maxval ; i ++){
        if(i < len1){
            arr.push(word1[i])
        }
        if(i < len2){
            arr.push(word2[i])
        }
            
    }
    result = arr.join("")
    return result
}


console.log(testfunction(word1, word2))