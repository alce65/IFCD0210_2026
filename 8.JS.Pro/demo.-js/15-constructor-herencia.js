function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
};


const p1 = new Person('Pepe', 23) 
const p2 = new Person('Juan', 34) 



function User(name, age, role) {
    this.role = role;
    User.countUsers();
    Person.call(this, name, age);
    // this.name = name;
    // this.age = age;
}

User.prototype.greet = function () {
    Person.prototype.greet.apply(this);
    console.log(`Hola soy ${this.role}`);
};

User.usersNumber = 0;
User.countUsers = function () {
    User.usersNumber++;
};

Object.setPrototypeOf(User.prototype, Person.prototype);
// User.prototype.__proto__ = Person.prototype;

const user1 = new User('Pepe', 22, 'admin');
const user2 = new User('Juan', 24, 'user');

// console.log(user1, user2);
// user1.address = 'Soria';
// user1.name = 'Jose';
// delete user1.age;
console.log(user1, user2);

user1.greet();
user2.greet();

// console.log(User.usersNumber);
