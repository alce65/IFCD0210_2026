const handleChange = function () {
    if (this.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector("#theme-toggle");
    toggle.addEventListener("change", handleChange);
});

const user = {
    name: "Pepe",
    address: {
        street: "",
    },
    friends: [
        {
            name: "Juan",
            address: {
                street: "",
            },
        },
        {
            name: "Rosa",
            address: {
                street: "",
            },
        },
    ],
};

console.log("Loaded main");
console.log(user);
console.dir(document);
console.log("ChildNodes", document.childNodes);
console.log("Children", document.children);

const htmlElement = document.children[0];
console.dir(htmlElement);
console.log("ChildNodes", htmlElement.childNodes);
console.log("Children", htmlElement.children);

console.log("Children", document.body.children);

const link1 = document.body.children[2].children[0].children[0].children[0];
console.log(link1);
link1.previousElementSibling;
link1.nextElementSibling;
link1.parentElement;
link1.href = "https://github.com/alce65";

// Accesos directos al dom

// document.getElementById('x')
// document.getElementsByClassName('foote')
// document.getElementsByTagName('li')
// document.getElementsByName()

const home = document.querySelector("#home");
document.querySelector(".home");
document.querySelector("[aria-label=home]");
//document.querySelector("main>section::nth-of-type(1)")
const p = home.querySelector("p");
const hoy = new Date();
p.textContent = "Aprendiendo a manipular el DOM " + hoy;

const newP = document.createElement("p");
newP.textContent = "Hola Amigos";
console.dir(newP);
home.appendChild(newP);

const user2 = "Pepe";

home.innerHTML += `
    <ul>
        <li>Horror ${user2}</li>
        <li>Horror</li>
    </ul> 
`;
