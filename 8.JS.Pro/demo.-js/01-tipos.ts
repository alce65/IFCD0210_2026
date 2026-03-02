'use strict';   
{
    // Datos y sus tipos

    console.log("Primitive types");
    console.log("Pepe", typeof "Pepe");
    console.log(22, typeof 22);
    console.log(true, typeof true);
    console.log(22n, typeof 22n);
    console.log(undefined, typeof undefined);
    console.log(null, typeof null, "MENTIRA, un BUG del lenguaje original");
    console.log(Symbol(), typeof Symbol());
    console.log("Referenced types");
    console.log({}, typeof {});
    console.log(() => {}, typeof (() => {}));

    // Demostración de que null NO ES UN OBJETO

    //console.log(({}.foo = 22), 'Linea 18');
    //console.log(('Pepe'.foo = 22));
    //console.log((22.foo = 22));
    //console.log((true.foo = 22, 'Linea 20'));
    //console.log((undefined.foo = 22));
    //console.log((null.foo = 22));
}
{
    // Variables

    // Declararlas y asignarles valor

    let foo; // Declaración (Inicialización a undefined)
    foo = 22; // Asignación
    console.log({ foo });

    let baz = 22; // Inicialización = Declaración y Asignación
    console.log({ baz });

    const pi = 3.14; // const siempre se inicializan
    // pi = 3.1416; // TypeError: Assignment to constant variable.
}

{
    // Variables con let -> reasignarse y opcionalmente CAMBIAR DE TIPO

    // El tipo depende de el valor
    // El tipo cambia dinámicamente

    // string | number | boolean | bigint | null | undefined | symbol | object | Function;

    let foo: string;

    //console.log({ foo }, typeof foo);
    foo = "Pepe";
    console.log({ foo }, typeof foo);
    // @ts-ignore: Type 'number' is not assignable to type 'string'.
    foo = 22;
    // @ts-ignore: Type 'boolean' is not assignable to type 'string'.
    foo = true;
    // @ts-ignore: Type 'bigint' is not assignable to type 'string'.
    foo = 22n;
    // @ts-ignore: Type 'null' is not assignable to type 'string'.
    foo = null;
    // @ts-ignore: Type 'symbol' is not assignable to type 'string'.
    foo = Symbol();
    // @ts-ignore: Type 'object' is not assignable to type 'string'.
    foo = {};
    // @ts-ignore: Type '() => void' is not assignable to type 'string'.
    foo = () => {};
}

{
    // Inferencia de tipos

    // El tipo depende de el valor
    // El tipo cambia dinámicamente

    // string | number | boolean | bigint | null | undefined | symbol | object | Function;

    let foo = "Pepe"; // Inicialización => inferencia de tipo a string
    console.log({ foo }, typeof foo);

    // @ts-ignore: Type 'number' is not assignable to type 'string'.
    foo = 22;
    // @ts-ignore: Type 'boolean' is not assignable to type 'string'.
    foo = true;
    // @ts-ignore: Type 'bigint' is not assignable to type 'string'.
    foo = 22n;
    // @ts-ignore: Type 'null' is not assignable to type 'string'.
    foo = null;
    // @ts-ignore: Type 'symbol' is not assignable to type 'string'.
    foo = Symbol();
    // @ts-ignore: Type 'object' is not assignable to type 'string'.
    foo = {};
    // @ts-ignore: Type '() => void' is not assignable to type 'string'.
    foo = () => {};
}

{
const IVA_BASE = 1.21;

const IVA_VALUES = {
    base: 1.21, 
    reducido: 1.1,
    superReducido: 1.04,
} as const; 

// Object.freeze(IVA_VALUES);

// IVA_VALUES.base = 1.16; // TypeError: Cannot assign ...

let price = 22;
let total = price * IVA_VALUES.base;
console.log({ total, iva: IVA_VALUES.base });
}

// El operador ! -> Non-null assertion operator (TypeScript)

{
    let foo: string | null;
    console.log(foo!.toLowerCase());
}
