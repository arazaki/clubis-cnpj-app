const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Fabio',
            age: 35
        });
        // reject('Something went wrong. ');
    }, 2000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my new promise');
        }, 2000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');