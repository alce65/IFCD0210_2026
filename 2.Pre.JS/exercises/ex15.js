import promptSync from 'prompt-sync';
const prompt = promptSync();

const name = prompt('What is your name? ');
console.log(`Hey there ${name}`);
