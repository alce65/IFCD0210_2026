import promptSync from 'prompt-sync';
const prompt = promptSync();
const name = prompt('Dime tu nombre? ');
console.log(`Hola ${name}`);
console.log('Fin del programa')
