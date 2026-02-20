console.log('Tarea1');
console.log('Tarea2');
setTimeout(() => {
    console.log('Tarea3'); // asíncrono - diferido
}, 3000);
console.log('Tarea4');
setTimeout(() => {
    console.log('Tarea5'); // asíncrono - diferido
}, 3000);
setTimeout(() => {
    console.log('Tarea6'); // asíncrono - inmediato
}, 0);
console.log('Tarea7');
Promise.resolve('Tarea8').then(console.log); // asíncrono - inmediato


// 1
// 2
// ------3
// 4
// ------5
// ------6
// 7
// ------8
// 8
// 6
// 3
// 5

// 1. promesas
// 2. callbacks

// el **bucle de eventos** (event loop)
// las **APIs** del entorno (Web / Node)
// la **cola de callbacks** (callback queue)
// la **cola de microtareas** (microtask queue)

// core JS - motor de JS - estándar ES
// las **APIs** del entorno (Web / Node)
