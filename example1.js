var sampleArr = [10, 20, 15, 5, 12, 25, 13]

var largest = sampleArr[0];
for (let i = 0; i < sampleArr.length; i++) {
    const element = sampleArr[i];
    if (largest < element) {
        largest = element
    }
}
console.log(largest, "=========output")

/********************************************************/ 

const max = Math.max(...sampleArr)
console.log(max, "===================output2")

/********************************************************/ 

