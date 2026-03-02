class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
}

class User extends Person {
    static usersNumber = 0;
    static countUsers = function () {
        User.usersNumber++;
    };

    constructor({ name, age = 22, role }) {
        super(name, age);
        this.role = role;
        User.countUsers();
    }

    greet() {
        super.greet();
        console.log(`Mi nivel de usuario es ${this.role}`);
    }
}

const user1 = new User({ role: 'admin', name: 'Pepe' });
const user2 = new User({ name: 'Juan', role: 'use', age: 24 });

// console.log(user1, user2);
// user1.address = 'Soria';
// user1.name = 'Jose';
// delete user1.age;
console.log(user1, user2);

user1.greet();
user2.greet();

// console.log(User.usersNumber);
