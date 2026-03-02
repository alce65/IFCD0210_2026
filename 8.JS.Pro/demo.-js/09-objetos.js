const user = {
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

const user2 = {
    name: 'Juan',
    age: 24,
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

user.greet();
user2.greet();

console.log(typeof user);
console.log(typeof user.address);

const user3 = new Object({
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
});

console.log(user);
console.log(user3);

const propName = 'name';

console.log(user.name);
console.log(user[propName]);
{
    const obj = {
        name: 'Pepe',
        age: 22,
    };
    // Añadimos propiedades
    obj.lastName = 'Perez';
    // Modificamos propiedades
    obj.name = 'Jose';
    // Eliminamos propiedades
    delete obj.age;
    console.log(obj);
}
{
    let foo;
    console.log(foo); // ReferenceError: foo is not defined
}
{
    let baz = {};
    console.log(baz.address); // undefined
    // console.log(baz.address.x); // TypeError: Cannot read properties of undefined
    console.log(baz.address?.street);
}
{
    const obj = {
        name: 'Pepe',
        age: 22,
    };

    for (const key in obj) {
        const value = obj[key];
        console.log(key, value);
    }

    Object.entries(obj).forEach(([key, value]) => console.log(key, value));
}
