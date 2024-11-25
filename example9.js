let x = 1;
function factorialfn(n){
    for (let i = n; i > 0; i--) {
        x =  x * i
    }
    return x
}

console.log(factorialfn(5))