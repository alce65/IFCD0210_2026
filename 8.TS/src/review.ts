/* eslint-disable */

const sumar = (x: number, y: number): number => {
    const r = x + y
    return r
}

console.log('2 mas 2', sumar(2,2))


class User {
    readonly name: string

    constructor(name: string) {
        this.name = name
        Object.freeze(this)
    }
}

const x = 22 // Inmutable y no reasignable
const z: any = {} // Mutable y no reasignable
z.name = 'Pepe' // -> Mutar

Object.freeze(z)
// z.age = 23 // Error de JS

const w = new User('Pepe')// Mutable y no reasignable
// w.name = 'Juan'
// w.age = 22
// delete w.name
console.log(w)
