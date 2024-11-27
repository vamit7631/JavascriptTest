let x = 1;
function factorialfn(n){
    for (let i = n; i > 0; i--) {
        x =  x * i
    }
    return x
}

console.log(factorialfn(5))


/***************** Using Recursion ******************************/ 

function secondfactorial(n){
    if(n === 0 || n === 1){
        return 1
    }

    return n * secondfactorial(n - 1);
}

console.log(secondfactorial(5))