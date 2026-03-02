// Expresiones --------------> ¿? --> valor

22 / 11;

// Sentencias (statements) -> ordenes

const r = 33 / 7;
console.log(r.toFixed(2));

// Expresiones: operadores

// Unarios
console.log(!true);

// Binario
console.log(2 + 2);

// Ternario
console.log(true ? 'True' : 'False');

// Poco recomendable
// const x = 34, z = 22

const x = 34;
const z = 22;

// Igualdad

let a = 22;
let b = 22;
console.log(Object.is(a, b)); // true
a = {};
b = {};
console.log(Object.is(a, b)); // false
a = null;
b = null;
console.log(Object.is(a, b)); // true
a = undefined;
b = undefined;
console.log(Object.is(a, b)); // true
a = NaN;
b = NaN;
console.log(Object.is(a, b)); // true
a = 0;
b = -0;
console.log(Object.is(a, b)); // false

// Operador de identidad (=== / !==)
NaN === NaN; //false
0 === -0; // true

if (Object.is(x, NaN)) {
    console.log('Valor no valido');
}

if (isNaN(x)) {
    console.log('Valor no valido');
}

// No se usa == / !=
