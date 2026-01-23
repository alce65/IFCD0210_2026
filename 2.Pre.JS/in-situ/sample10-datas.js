let z = undefined;
console.log(z);

let x = null;
console.log(typeof x); // error de typeof desde JS original

let n = 9_000_000_000_000_000_000n;
console.log(n + 1n);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

// Objects

const obj1 = {};
const obj2 = new Object();

const data1 = [];
const data2 = new Array();

const today = new Date();

obj1.name = 'Pepe';
obj1.age = 22;

obj2.name = 'Ernestina';
obj2.age = 35;

console.log(obj1);
console.log(obj2);

obj1.age += 1;
obj1.address = {
    street: 'c/ Paz',
    number: '12',
    city: 'Cádiz',
};
obj1.skills = ['JS', 'Python'];

console.log(obj1);
console.log(obj1.skills[0]);

const users = [obj1, obj2];
obj1.skills = null;
console.log(users);

delete obj1.skills;
console.log(users);

const table = [
    ['a', 2, 3],
    [1, 't', 3],
    [1, 2, 3],
];

table[1][1] = 'y';

const texts = [];

for (let i = 0; i < table.length; i++) {
    const line = table[i];
    for (let j = 0; j < line.length; j++) {
        const element = line[j];
        if (typeof element === 'string') {
            texts.push(element);
        }
    }
}

console.log(texts);

// Metodos

let element = texts.pop();
console.log(texts);
console.log(element);
texts.unshift('z');
console.log(texts);
element = texts.shift();
console.log(texts);
console.log(element);

const friends = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
// friends.sort();
const ordered = friends.toSorted();
console.log(friends);
console.log(ordered);

friends.includes('Ramón');

//

const numbers = [3, 7, 2, 8, 4, 1];
// deep clone 
const original = structuredClone(numbers);
// shallow clone 
// [...numbers];
numbers.sort();
console.log(original);
console.log(numbers);

const lastFriend = friends.pop()
const namesText = friends.join(', ') + ' y ' + lastFriend + '.'
console.log(`Mis amigos son ${namesText}`)


