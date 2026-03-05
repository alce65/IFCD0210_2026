const user1 = {
    name: "John",
    age: 30,
    job: "Developer",
    greet() {
        console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
    },
};

const user2 = {
    name: "Jane",
    age: 25,
    job: "Designer",
    greet() {
        console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
    },
};

const user3 = {
    name: "Jack",
    age: 35,
    job: "Manager",
    greet() {
        console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
    },
};

// Factory

function createUser(name, age, job) {
    const greet = function () {
        console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
    };
    return {
        name,
        age,
        job,
        greet,
    };
}

const user4 = createUser("Jill", 28, "Analyst");

// Constructor

function User(name, age, job) {
    this.id = ++User.countUsers;
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayAgeBad = function () {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    };
}

User.countUsers = 0;
User.showUsersNumber = function () {
    console.log(User.countUsers);
};
User.add = function (a, b) {
    return a + b;
};

User.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
};

const user5 = new User("Jim", 32, "Architect");
const user6 = new User("Jenny", 27, "Consultant");
console.log(user1, user2, user3, user4);
// user5.city = "New York";
// user5.name = "James";
// delete user5.age;
console.log(user5, user6);

user1.greet();
user2.greet();
user3.greet();
user4.greet();

user5.greet();
user6.greet();

user5.sayAgeBad();
user6.sayAgeBad();

User.showUsersNumber();

Object.freeze({});
Array.isArray([]);
Array.isArray(user5); // false

Array.foo = function () {
    console.log("This is a static method on the Object constructor");
};

// Object.freeze = 22;

Array.foo(user5);
Object.freeze(user5);

const fu = function (arg) {
    if (!Array.isArray(arg)) return;
    return arg.map((item) => (isNaN(item) ? item : item * 2));
};

console.log(fu([1, 2, 3]));
console.log(fu(["Pepe", 5]));
