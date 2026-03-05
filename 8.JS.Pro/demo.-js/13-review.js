
// Objetos literales. Notación JSON
const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    greeting: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Objetos de datos
const person = {
    name: 'Alice',
    age: 25,
    city: 'Los Angeles',
}

// Objetos creados con el patrón factory (closures)
function createPerson(name, age, city) {
    
    // const name = name;
    const _age = age;
    // const city = city;
    
    const greeting = () => {
            console.log(`Hello, my name is ${name} and I am ${_age} years old.`);
        }
    
    return {
        name,
        city,
        greeting
    }
}

const person1 = createPerson('Bob', 40, 'Chicago');
const person2 = createPerson('Eve', 35, 'Miami');

person1.greeting(); // Hello, my name is Bob and I am 40 years old.
person2.greeting(); // Hello, my name is Eve and I am 35 years old.

// Objetos creados con funciones constructoras

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    // this.greeting = function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    // }
}

Person.prototype.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
}

const person3 = new Person('Charlie', 28, 'San Francisco');
const person4 = new Person('Dave', 32, 'Seattle');

console.log(person3.city); // San Francisco

person3.greeting(); // Hello, my name is Charlie and I am 28 years old.
person4.greeting(); // Hello, my name is Dave and I am 32 years old.


person3.hasOwnProperty('greeting'); // false

Object.freeze(person3);
