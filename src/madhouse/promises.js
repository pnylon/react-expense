
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            data: 'Some data',
            stuff: 'and stuff'
        });
        //reject('Something went wrong');
    }, 1500);
});

console.log('Before promise');
promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from new promise');
        }, 1500);
    });
}).then((str) => {
    console.log('Chained promise will run if resolved: ', str);
}).catch((error) => {
    console.log('error: ', error);
});
// Alt error method
// promise.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log('error: ', error);
// });
console.log('After promise');
