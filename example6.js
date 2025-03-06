function testfunction(...args) {
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

testfunction(1);               // Output: 1
testfunction(1, 2);            // Output: 3
testfunction(1, 2, 4, 5, 1);   // Output: 13