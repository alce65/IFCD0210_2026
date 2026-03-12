/* eslint-disable @typescript-eslint/no-unused-vars */
// Polimosfismo por herencia

// abstract class NoSe {
//     #speed = 0;

//     stop(): void {
//         // Impmementacion
//         this.#speed = 0
//         console.log(this.#speed)

//     }
//     increaseSpeed(value: number): void {
//         if(value < 0) return
//         this.#speed += value
//     }

//     abstract
// }

interface Movible {
    move(): void;
    stop(): void;
}

class Car implements Movible {
    #speed = 0;
    stop(): void {
        // Impmementacion
        this.#speed = 0;
        console.log(this.#speed);
    }
    move(): void {
        // Haz cosas de coche
    }
}

class Dog implements Movible {
    #speed = 0;
    stop(): void {
        // Impmementacion
        this.#speed = 0;
        console.log(this.#speed);
    }

    move(): void {
        //this.increaseSpeed(20)
    }
}

const obj1 = new Car();
const obj2 = new Dog();

obj1.move();
obj2.move();
obj1.stop();
obj2.stop();
