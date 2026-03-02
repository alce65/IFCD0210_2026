const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer',
    address: {
        street: 'c/ Pez',
        city: 'Soria',
    },
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const data = [
    ['name', 'Juan'],
    ['age', 28],
    ['job', 'designer'],
];

const user2 = Object.fromEntries(data);
console.log(user2);

console.log(typeof []); // object
console.log(typeof new Error()); // object
console.log(typeof new Date()); // object

{
    const data = [1, 2, 3];
    data.prop = 'Estoy en un array';
    console.log(data.length);
    data.iterate = () => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    };

    console.log(data);
    data.iterate();
}
{
    const data = new Array(20);
    console.log(data); // [ <20 empty items> ]
    console.log(data.length);
}
{
    const data = [1, 2, 3];
    data[20] = 23;
    console.log(data);
    console.log(data.length);
}
{
    // string es iterable de lectura
    const text = 'string es iterable de lectura';
    console.log(text[10]);
    // text[10] = 'I';
}
{
    // array iterables de lectura y escritura

    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    data[5] *= 10;
    console.log(data);
}
{
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(data.length);
    data.length = 4;
    console.log(data);
}
{
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    data.push(23);
    console.log(data);
    const data2 = data.concat([45, 78]);
    console.log(data);
    console.log(data2);
}
{
    const data = [10, 20, 30, 40, 50];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log(item);
    }

    for (const item of data) {
        console.log(item);
    }

    data.forEach((item, i) => console.log(i, item));
    // const x1 = data.map();
    // const x2 = data.filter();
    // const x3 = data.find()

    const reductor = (p, c, i) => {
        const value = i + 1;
        return p + c * value;
    };

    const r = data.reduce(reductor);
    console.log(r);
}
{
    const data = Array.of(1, 2, 3);
    console.log(data);
    const data2 = Array.from(data); // [...data]
    data2.push(4);
    console.log(data);
    console.log(data2);
}
{
    const data = [1, 1, 1, 2, 3, 3, 3];
    // const set1 = new Set(data);
    // console.log(set1);
    // const dataFinal = [...set1];
    const dataFinal = [...new Set(data)];
    console.log(dataFinal);
}
