let foo = 22;
let bar = foo;
console.log(foo, bar);

bar = bar + 5;
console.log(foo, bar); // 22 27

const obj1 = { name: "Pepe", isUser: true };
const obj2 = obj1;
console.log(obj1, obj2); // { name: "Pepe", isUser: true } { name: "Pepe", isUser: true }
console.log(obj1 === obj2); // true
obj2.name = "Juan";
console.log(obj1, obj2); // { name: "Juan", isUser: true } { name: "Juan", isUser: true }

const user1 = { name: "Pepe", isUser: true };
// const user2 = { name: "Pepe", isUser: true };
const user2 = { ...user1 }; // Spread operator
console.log(user1, user2); // { name: "Pepe", isUser: true } { name: "Pepe", isUser: true }
console.log(user1 === user2); // false
user1.name = "Juan";
console.log(user1, user2); // { name: "Juan", isUser: true } { name: "Pepe", isUser: true }

const pet1 = new Object();
pet1.name = "Firulais";
const pet2 = { ...pet1, age: 5 };
console.log(pet1, pet2); // { name: "Firulais" } { name: "Firulais", age: 5 }
pet1.name = "Rex";
console.log(pet1, pet2); // { name: "Rex" } { name: "Firulais", age: 5 }


const student1 = new Object();
student1.name = "Firulais";
const student2 = student1;
console.log(student1, student2); // { name: "Firulais" } { name: "Firulais" }
student1.name = "Rex";
console.log(student1, student2); // { name: "Rex" } { name: "Rex" }

const student3 = { 
    name: "Firulais",
    grades: [5, 6, 7],
    school: {
        name: "IES Al-Ándalus",
        city: "Sevilla",
    },
};
const student4 = structuredClone(student3);
