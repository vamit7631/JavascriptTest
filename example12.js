// program to find the HCF or GCD of two integers
num1 = 60
num2 = 72
let hcf;
function twonumhcf(num1, num2){
    for (i = 1; i <= num1 && i <= num2; i++) {
        if(num1 % i == 0 && num2 % i == 0){
            hcf = i
        }
    }
    return hcf
}

console.log(twonumhcf(num1, num2))