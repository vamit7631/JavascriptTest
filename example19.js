input =  ["eat","tea","tan","ate","nat","bat"]

function testfunction(arr){
        word = {}
        for(i = 0; i < arr.length; i++){
            result = arr[i].split("")
            result = result.sort()
            result = result.join("")
            
            if(word[result]){
               word[result].push(arr[i])
            }else{
                word[result] = [arr[i]]
            }
    }
    return Object.values(word)
}

console.log(testfunction(input))  // output : [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]