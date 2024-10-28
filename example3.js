var sampleString = "testString data"

sampleString = sampleString.toLowerCase()
sampleString = sampleString.split(" ").join("")
console.log(sampleString.length)
let count = {}
for (let i = 0; i < sampleString.length; i++) {
    const element = sampleString[i];
    count[element] = count[element] ? count[element] + 1 : 1
}

console.log(count)