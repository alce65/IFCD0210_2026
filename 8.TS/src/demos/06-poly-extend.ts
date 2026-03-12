/* eslint-disable @typescript-eslint/no-unused-vars */
// Polimosfismo por herencia

abstract class Vehicle {
    #speed = 0;

    stop(): void {
        // Impmementacion
        this.#speed = 0
        console.log(this.#speed)
        
    }
    increaseSpeed(value: number): void {
        if(value < 0) return
        this.#speed += value
    }

    abstract move(): void 
}


class Car extends Vehicle {
    move(): void {
        // Haz cosas de coche
        this.increaseSpeed(10)
    }
}

class Moto extends Vehicle{
    move(): void {
       this.increaseSpeed(20)
    }
}

const obj1 = new Moto()
const obj2 = new Car()

obj1.move()
obj2.move()
obj1.stop()
obj2.stop()
