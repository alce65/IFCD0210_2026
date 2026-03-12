class Person {
    static foo = 22;

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`,
        );
    }
}

const person1 = new Person("Alice", 30);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


class CalculatorError extends Error {

}

export class Calculator {
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new CalculatorError('Division by zero is not allowed.'); // Lanza una excepción
    }
    return a / b;
  }
}

new Calculator().divide(3, 0)


class Car {
    brand: string

    constructor(brand: string) {
        this.brand = brand
    }
}

function updateCarToyota(car: Car): void {
  car.brand = 'Toyota';
}

const myCar = new Car('Honda');
updateCarToyota(myCar);

console.log(myCar.brand); // Toyota


// --------------
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function updateCarToyota(car: any): void {
        //const internalCar = {...car}
        car.brand = 'Toyota';
    }
    
    const myCar = { brand: 'Honda'}
    updateCarToyota(myCar);
    
    console.log(myCar.brand); // Toyota
}
