const mammal = {
    hasFur: true,
};

const person = Object.create(mammal);
person.teeth = 32;

const user1 = Object.create(person);
user1.name = 'Pepe';
user1.age = 22;

const user2 = Object.create(person);
user2.name = 'Juan';
user2.age = 23;

console.log(user1.teeth);
console.log(user1.hasFur);

user1.teeth = 30;
console.log(user1.teeth); //30
console.log(user2.teeth); // 32
