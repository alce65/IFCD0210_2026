const greeting = () => {
    const str = 'Hola Mundo';
    console.log(str);
};

const wait = (secondsLimit) => {
    const start = Date.now();
    console.log('Inicio', start);
    const SECOND_INSTRUCTIONS = 3_000_000_000 / 2; // 1.5Ghz
    const limit = secondsLimit * SECOND_INSTRUCTIONS;
    let i = 0;
    while (i < limit) {
        i++;
    }
    const fin = Date.now()
    console.log(limit)
    console.log('Fin', fin - start )
};

let seconds = 4;
wait(seconds);
greeting();
