/* eslint-disable no-useless-assignment */

let x = 22;
x = "Pepe";
console.log(typeof x);

let y = 22;
let z = "22";
let r = y + z; // 2222
console.log(r);
r = y / z; // 1
console.log(r);
r = y / x; // NaN
console.log(r);

function add(a = 0, b) {
    const r = a + b;
    return r;
}

add(); // 0undefined
add(1); // 1undefined
add(1, 23, 4, 5); // 24

function foo() {
    const z1 = document.querySelector("button");

    z1.addEventListener("click", (event) => {
        const element = event.target;
        element.disabled = false;
    });
}

// Recorrer un Array (iterar)

// Iterar un objet

const user = {
    name: "Pepe",
    age: 23,
    job: 'Developer'

};
for (const key in user) {
    const element = user[key];
    console.log(key, element)
}
