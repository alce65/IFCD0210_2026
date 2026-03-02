// Patrones de ejecución

const foo = function () {
    console.log('Soy foo');
    console.log('this:', this);
};

const fooArrow = () => {
    console.log('Soy fooArrow');
    console.log('this:', this);
};

// Function pattern

foo();
fooArrow();
//console.log(globalThis);

// Method pattern

const obj1 = {
    title: 'Soy obj1',
    foo: foo,
    fooArrow: fooArrow,
};

obj1.foo();
obj1.fooArrow();

// Constructor pattern

const nObj = new foo();
console.log(nObj);

// error new fooArrow();

// Apply pattern

const obj2 = {
    title: 'Soy obj2',
};

foo.apply(obj2);
fooArrow.apply(obj2);
