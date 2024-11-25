arr = ["Nancy", "Amit", "Ankit","Akhil", "Ankur", "Anu", "nikhil"]
arr = arr.slice(-1).concat(arr.slice(0,-1))
console.log(arr) // output  ['nikhil', 'Nancy', 'Amit', 'Ankit', 'Akhil', 'Ankur', 'Anu']