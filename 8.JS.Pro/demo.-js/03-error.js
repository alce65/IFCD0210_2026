import { errorDivideZero } from './errors.js';

function divide(a, b) {
    if (b === 0) {
        // const error = new Error('No se puede dividir por 0');
        throw errorDivideZero;
    }
    return a / b;
}

try {
    const r = divide(3, 0);
    console.log(r * 2);
} catch (error) {
    console.error(error.message);
}
console.log('Fin del programa');
