/*eslint-disable */

class User {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }
    static {
        console.log('Load class USER');
    }

    #name: string;
    private _age: number;
    pets?: string[];
    constructor(name: string, age: number, pets: string[] = []) {
        this.#name = name;
        this._age = age;
        this.pets = pets;
        User.countUsers();
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    greet(): void {
        console.log(`Hola, soy ${this.#name} y tengo ${this._age} años`);
    }

    grow(): void {
        this._age++;
    }
}

const user1 = new User('Pepe', 22, ['Rufo']);
const user2 = new User('Juan', 24);

console.log(user1, user2);

console.log(user1, user2);

user1.grow();
user1.greet();
user2.greet();

console.log(User.usersNumber);

// user1.name = 'Jose';
// console.log(user1.name);

// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

// Propiedades de parámetros

{
    class User {
        static usersNumber = 0;
        static countUsers() {
            User.usersNumber++;
        }
        static {
            console.log('Load class USER');
        }

        // private _name: string;
        // private _age: number;
        // public pets?: string[];
        constructor(
            // @ts-ignore
            private _name: string,
            // @ts-ignore
            private _age: number,
            // @ts-ignore
            public pets: string[] = [],
        ) {
            // this._name = name;
            // this._age = age;
            // this.pets = pets;
            User.countUsers();
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        greet(): void {
            console.log(`Hola, soy ${this._name} y tengo ${this._age} años`);
        }

        grow(): void {
            this._age++;
        }
    }

    const u = new User('Luisa', 63);
}
{
    class Person {
        public name: string
        protected age: number
        constructor(
            name: string,
            age: number,
        ) {
            this.name = name
            this.age = age
        }

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años`;
        }
    }

    class Employee extends Person {
        public salary: number
        constructor(
            name: string,
            age: number,
            salary: number,
        ) {
            super(name, age);
            this.salary = salary
        }

        override greet() {
            return `${super.greet()} y cobro ${this.salary}€`;
        }

        birthday() {
            this.age++
        }

        // override greet() {
        //     return `cobro ${this.salary}€`;
        // }
    }
    
    const e = new Employee('Pepe', 23, 2_000)
    e.
}

{
    interface User {
        account: string;
        createAccount: () => string;
    }

    const u: User = {
        account: '',
        createAccount: function () {
            return '';
        },
    };

    abstract class Person {
        constructor(
            public name: string,
            public age: number,
        ) {}

        abstract greet(): string;
        eat() {
            return 'Estoy comiendo';
        }
    }

    class Employee extends Person implements User {
        account: string = '';
        constructor(
            name: string,
            age: number,
            public salary: number,
        ) {
            super(name, age);
        }

        createAccount(): string {
            return '';
        }

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años y cobro ${this.salary}€`;
        }

        override eat(): string {
            return super.eat() + ' ......';
        }
    }

    const e1 = new Employee('Pepe', 34, 40_000);
    console.log(e1.eat());
    console.log(e1.greet());
}
{
    type Item = {};
    type PartialItem = {};

    interface Repository {
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: PartialItem) => Item;
        update: (id: string, data: PartialItem) => Item;
        delete: (id: string) => Item;
    }

    class RepoNotesSQL implements Repository {
        read() {
            return [];
        }

        readById(id: string) {
            return {};
        }

        create(data: PartialItem) {
            return {};
        }

        update(id: string, data: PartialItem) {
            return {};
        }

        delete(id: string) {
            return {};
        }

        generateSQL() {
            return '';
        }
    }

    class RepoNotesMongo implements Repository {
        read() {
            return [];
        }

        readById(id: string) {
            return {};
        }

        create(data: PartialItem) {
            return {};
        }

        update(id: string, data: PartialItem) {
            return {};
        }

        delete(id: string) {
            return {};
        }
    }

    const repo: Repository = new RepoNotesMongo();

    repo.read();
    (repo as RepoNotesSQL).generateSQL();
}
// Interfaz/type como tipo de data
{
    interface User {
        name: string;
        age: number;
    }

    function foo(param: User) {
        console.log(param.name, param.age);
    }

    const u = { name: 'Pepe', age: 23, c: 9 };
    // foo({ name: 'Pepe', age: 23, c: 9 });
    foo(u);
}
// Interfaz/type como implements
{
    type Person = {
        name: string;
        age: number;
    };
    class User implements Person {
        constructor(
            public name: string,
            public age: number,
            public address: string,
        ) {}
    }

    const p: Person = new User('Pepe', 23, 'Calle Falsa 123');
    (p as User).address;
}
{
    class Animal {
        makeSound(): void {
            console.log('Animal makes a sound.');
        }
    }

    class Dog extends Animal {
        override makeSound(): void {
            console.log('Dog barks.');
        }
        eat(): void {}
    }
    class Cat extends Animal {
        override makeSound(): void {
            console.log('Cat meows.');
        }
    }

    let animal: Animal;

    animal = new Dog();
    console.log(animal instanceof Dog); // true
    console.log(animal instanceof Animal); // true

    animal.makeSound(); // Dog barks (enlace dinámico)
    (animal as Dog).eat();

    animal = new Cat();
    animal.makeSound(); // Cat meows (enlace dinámico)
}
