class Person {
    
    static countPersons = 0;
    static get countPersons() {
       return Person.countPersons
    };

    #id;
    #name;
    #age;
    #city;
    job;

    // setters y getters

    get id() { // Propiedad readonly
        return this.#id
    }

    set city(city) {
        this.#city = city.toUpperCase()
    }


    // constructor

    constructor(name, age, city) {
        this.#id = ++Person.countPersons;
        this.#name = name;
        this.#age = age;
        this.#city = city;
        this.job = 'No definido'
    }

    // métodos

    greeting() { 
        console.log(`Hola, soy ${this.#name}, tengo ${this.#age} años y vivo en ${this.#city}`);  
    }
}


const person1 = new Person('Charlie', 28, 'San Francisco');
const person2 = new Person('Dave', 32, 'Seattle');

console.log(person1)

// malas prácticas
// person1.name = 'Ramón'
// person1.age = 34
// person1.job = "Developer"

console.log(person1, person2); 

person1.city = 'Burgos'

person1.greeting()
console.log(person1.id)
// person1.id = 3


class User extends Person {

    role; 

    constructor(name, age, city, role) {
        super(name, age, city)
        this.role = role
    };

    greeting(){
        // super.greeting()
        console.log(`And my role is ${this.role}`)
    }
}


const user1 = new User('Pepe', 22, 'Cádiz', 'Admin')
user1.greeting()
console.log(user1)

// Asociación (agregación, composición)

// class Vehicle
// class Car extends Vehicle -> relación ES (to BE)
// class Vehicle -> Motor -> relación TIENE (to HAVE)
// class Owner -> Vehicle -> relación TIENE (to HAVE)

class Personae   {
    pet
    constructor() {
        this.pet = []
    }

    adopt(pet) {
        this.pet.push(pet)
    }
}

class Pet {
    name
    specie
    constructor(name, specie) {
        this.name = name 
        this.specie = specie
    }
}

const pepe = new Personae()
const fu = new Pet('Fu', 'Pez')
pepe.adopt(fu)
pepe.adopt(new Pet('Rufus', 'Pez'))

console.log(fu === pepe.pet[0])
pepe.pet[1]
