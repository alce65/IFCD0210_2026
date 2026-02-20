const greeting = () => {
    const str = "Hola Mundo";
    console.log(str);
};

const wait = (secondsLimit) => {
    const start = Date.now();
    console.log("Inicio", start);
    
    const limit = secondsLimit * 1000;
    setTimeout(() => {
        const fin = Date.now();
        console.log("Fin", fin - start);
    }, limit);
};

let seconds = 4;
wait(seconds);
greeting();
