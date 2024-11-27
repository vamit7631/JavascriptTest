// Traversing a Nested Object (Recursive function)

const nestedObject = {
    name: "John",
    details: {
        age: 30,
        hobbies: ["reading", "traveling"],
        address: {
            city: "New York",
            zip: "10001"
        }
    }
};


function printNestedValues(obj){
    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            printNestedValues(obj[key])
        }else{
            console.log(key + ":" + obj[key])
        }
    }
}

printNestedValues(nestedObject);