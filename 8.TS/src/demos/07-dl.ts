class Animal {
    makeSound(): void {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    override makeSound(): void {
        console.log("Dog barks.");
    }
}

class Cat extends Animal {
    override makeSound(): void {
        console.log("Cat meows.");
    }
}

class Ant {
    makeSound(): void {
        console.log("Makes a sound of ant.");
    }
}

let animal: Animal;

// Tipado estructural duck typing
animal = new Ant();
animal.makeSound()

animal = new Dog();
animal.makeSound(); // Dog barks (enlace dinámico)

animal = new Cat();
animal.makeSound(); // Cat meows (enlace dinámico)



// const animal1 = new Ant();
// animal1.makeSound()

// const animal2 = new Dog();
// animal2.makeSound(); // Dog barks 

// const animal3 = new Cat();
// animal3.makeSound(); // Cat meows 
