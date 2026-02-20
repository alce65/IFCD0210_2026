const makeAsync = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.random();

            if (n > 0.5) {
                // acierto
                resolve(`Data: ${n}`);
            } else {
                // error
                reject(new Error(`Error: ${n}`));
            }
        }, time);
    });
};


// const users = [];
makeAsync(1000)
    .then((data) => {
        //users = data;
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Proceso teminado");
    });

console.log("Esto no va de promesas");
