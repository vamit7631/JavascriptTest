let arr = [1, 4, 6, 67, 23, 22, 13, 34, 36, 56]
let evenarr = []
let oddarr = []

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if((element & 1) == 0){
        evenarr.push(element)
    }else{
        oddarr.push(element)
    }
}
console.log(evenarr,"================",oddarr)