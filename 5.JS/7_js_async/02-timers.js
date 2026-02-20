const makeAsync = (time, callback) => {
    return setTimeout(() => {
        const n = Math.random();
        callback(n);
    }, time);
};

let time = 1000;
makeAsync(time, (n) => {
    console.log(n);
});

time *= 2
makeAsync(time, (n) => {

    console.log(n, n*n);
});

// function handleTime(n) {
//      console.log(n);
// }

// makeAsync(time, handleTime);
