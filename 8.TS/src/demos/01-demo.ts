/* eslint-disable @typescript-eslint/no-unused-vars */

// Inferencia de tipos
// Chequeo de tipos

// Declaración const / let
let x = 22;
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
x = "Pepe";

// Tipo inferido es any
let z;
z = 22;
z = "Pepe";

// Tipos fuertes (strong) => no hay coerción
{
    // eslint-disable-next-line prefer-const
    let x = 22;
    // eslint-disable-next-line prefer-const
    let y = "22";

    const r = x / Number(y);
    console.log({ r });
}

// let v. const: const y tipos literales
{
    const x = "Pepe";
    // x = 'Juan'; ERROR DE JS
}

// let y tipos literales as const

{

    // let z = 'Developer' as const
    // eslint-disable-next-line prefer-const, @typescript-eslint/prefer-as-const
    let x: "Pepe" = "Pepe";
    // x = 'Juan'; // Error de TS
    console.log(x);

    let state: "idle" | "loading" | "success" | "error" = "idle";
    state = "loading";

    let id: string | number = 12;
    id = "12";
}

// conversión / casting / aserción de tipos

{
    function foo(): void {
        const z1 = document.querySelector("#button1") as HTMLButtonElement;
        const z2 = document.querySelector("h1") as unknown as number;

        z1.addEventListener("click", (event) => {
            const element = event.target as HTMLButtonElement;
            element.disabled = false;
        });
    }
}

// Anotación de tipo --> : tipo
{
    let z: number;
    // eslint-disable-next-line prefer-const
    z = 22;
    // z = 'Pepe'; Error de TS
}

// Declaración const / let NO SE ANOTA
{
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types, prefer-const
    let x: number = 22; // SOBRA number
}

// Anotamos los parámetros

function add(a: number, b = 0): number {
    const r = a + b;
    return r;
}

function showAdd(a: number, b = 0): void {
    const r = a + b;
    console.log(r);
}

const s = (a: number, b: number): number => a - b;

add(2);

// Objetos Arrays y Tuplas

const user1 = {
    name: "Pepe",
    age: 23,
};

const user: {
    readonly name: string;
    age: number;
    job?: string;
} = {
    name: "Pepe",
    age: 23,
};

// user.name = 'Ramón'
user.age = 24;
user.job = "Developer";
delete user.job;


// Objeto inmutable
{
    const config = {
        api_url: 'http://hkshjkf.com/api',
        api_key: '349247ay6383'
    } as const
    Object.freeze(config)

    // config.api_key = '22'
    // config.api_url = 'fuu'

    const user1: {
        readonly id: string | number,
        name: string,
        age: number
    } = {
        id: 15151,
        name: 'Pepe',
        age: 23
    }

    const user2: {
        readonly id: string | number,
        name: string,
        age: number
    } = {
        id: 213244,
        name: 'Luisa',
        age: 25
    }
}

// Propiedades opcionales
{
    user.job = "developer";
    delete user.job;

    if (user.job) {
        console.log(`Trabajo de ${user.job}`);
    } else {
        console.log(`Ahora no trabajo`);
    }

    // Parámetros opcionales
    // Narrowing: restricción del tipo
    const foo = (a?: string): string => {
        if (!a) return "Todo bien";
        const r = a.toLocaleLowerCase();
        console.log(r);
        return r;

        // if (a) {
        //     console.log(a.toLocaleLowerCase());
        // }
    };

    foo();
}

// Arrays
{
    const data = [1, 2, 3];
    data.push(23);
    // data.push('Pepa') //Error de tipo

    const foo = (data: number[]) : number[] => {
        return data.map((item): number => item * item);
    };

    // No se usa
    // const foo2 = (data: Array<number>) => {
    //     data.map((item) => item * item);
    // };
}
{
    const numbers: number[] = [];
    numbers.push(12);
}

{
    const t: (number | string)[] = [1, 2];
    t.push("Luis");
}
// Tupla (Tuple)
{
    const t1: [string, number] = ["Pepe", 2];
    const t2: readonly [string, number] = ["Juan", 4];

    t1[1] = 5;
    // t1[2] = 8

    t1.push("Pepe");
    console.log(t1.length);
}
