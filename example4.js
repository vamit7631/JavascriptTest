/***************
 * print 1
 *       1 2
 *       1 2 3
 *       1 2 3 4
 * ****************************/

let num = 6
let pattern = '';
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
        pattern += '';
    }

    for (let k = 1; k <= i; k++) {
        pattern += k + ' ';
    }
    pattern = pattern.trim() + '\n';
}

console.log(pattern)
