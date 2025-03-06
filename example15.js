const promise = new Promise(res => res(2));
promise.then(i => {
        console.log(i);
        return i * 2;
    })
    .then(i => {
        console.log(i);
        return i * 2;
    })
    .finally(i => {
        console.log(i);
        return i * 2;
    })
    .then(i => {
        console.log(i);
    });	