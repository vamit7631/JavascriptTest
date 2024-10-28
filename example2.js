var sampleArr = [10, 20, 10, 15, 15, 12, 25, 13, 10, 25]

var count = {}

for (let i = 0; i < sampleArr.length; i++) {
    const element = sampleArr[i];
    count[element] = count[element] ? count[element] + 1 : 1
}

console.log(count)