/*eslint-disable */

class User {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }
    static {
        console.log("Load class USER");
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

const user1 = new User("Pepe", 22, ["Rufo"]);
const user2 = new User("Juan", 24);

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
            console.log("Load class USER");
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

    const u = new User("Luisa", 63);
}
{
    class Person {
        public name: string;
        protected age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años`;
        }
    }

    class Employee extends Person {
        public salary: number;
        constructor(name = "", age: number, salary: number) {
            super(name, age);
            this.salary = salary;
        }

        override greet() {
            return `${super.greet()} y cobro ${this.salary}€`;
        }

        birthday() {
            this.age++;
        }

        // override greet() {
        //     return `cobro ${this.salary}€`;
        // }
    }

    const e = new Employee("Pepe", 23, 2_000);
}
{
    interface User {
        account: string;
        createAccount: () => string;
    }

    type UserT = {
        account: string;
        createAccount: () => string;
    };

    const u: User = {
        account: "",
        createAccount: function () {
            return "";
        },
    };

    class Admin implements UserT {
        account: string;
        id: string;
        constructor(account: string) {
            this.account = account;
            this.id = "";
        }

        createAccount() {
            return "";
        }

        changeId(id: string) {
            this.id = id;
        }
    }

    abstract class Person {
        public name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        eat() {
            return "Estoy comiendo";
        }

        abstract greet(): string;
    }

    class Employee extends Person implements User {
        account: string = "";
        salary: number;
        constructor(name: string, age: number, salary: number) {
            super(name, age);
            this.salary = salary;
        }

        createAccount(): string {
            return "";
        }

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años y cobro ${this.salary}€`;
        }

        override eat(): string {
            return super.eat() + " ......";
        }
    }

    const e1 = new Employee("Pepe", 34, 40_000);
    console.log(e1.eat());
    console.log(e1.greet());
}

// Interfaz/type como tipo de data
{
    interface User {
        name: string;
        age: number;
    }

    type UserT = {
        name: string;
        age: number;
    };

    function foo(param: User) {
        console.log(param.name, param.age);
    }

    const u = { name: "Pepe", age: 23, c: 9 };
    // foo({ name: 'Pepe', age: 23, c: 9 });
    foo(u);
}
// Interfaz/type como implements
{
    interface Person {
        name: string;
        age: number;
    }

    class User implements Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }

    const p: Person = new User("Pepe", 23, "Calle Falsa 123");
    p.name;
    (p as User).address;
}
// Herencia -> jerarquía (de abstracción) de clases
{
    abstract class Animal {
        makeSound(): void {
            console.log("Animal makes a sound.");
        }
        abstract eat(): void;
    }

    interface CanMove {
        move: (p: number) => string;
    }

    class Dog extends Animal implements CanMove {
        override makeSound(): void {
            console.log("Dog barks.");
        }
        eat(): void {
            // TODO comer como un perro
        }

        move(p: number) {
            return "Me muevo como un perro";
        }
        makeDogThinks() {
            return ''
        }
    }

    class Cat extends Animal implements CanMove {
        override makeSound(): void {
            console.log("Cat meows.");
        }
        eat(): void {
            // TODO comer como un gato
        }
        move(p: number) {
            return "Me muevo como un gato";
        }
        makeCatThinks() {
            return ''
        }
    }

    let animal: Animal & CanMove; // No de si será Dog o Cat

    animal = new Dog();
    console.log(animal instanceof Dog); // true
    console.log(animal instanceof Animal); // true

    animal.makeSound(); // Dog barks (enlace dinámico)
    // (animal as Dog).makeDogThinks();

    if (animal instanceof Dog) {
        animal.makeDogThinks()
    } else if (animal instanceof Cat ) {
        animal.makeCatThinks()
    }
    animal = new Cat();
    animal.makeSound(); // Cat meows (enlace dinámico)

}

// Firma de una función
/*eslint-disable */

type Options = "success" | "error";
type StringUtility = (a: string, b?: number) => string;

const truncate: StringUtility = function (a, limit = 10) {
    const z = a.length;
    let r = a;
    if (z > limit) {
        r = a.substring(1, 10) + "...";
    }
    return r;
};
