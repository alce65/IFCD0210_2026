"use strict";

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
    //console.log((Number(22).foo = 22));
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

    let foo;
    console.log({ foo }, typeof foo);
    foo = "Pepe";
    console.log({ foo }, typeof foo);
    foo = 22;
    console.log({ foo }, typeof foo);
    foo = true;
    console.log({ foo }, typeof foo);
    foo = 22n;
    console.log({ foo }, typeof foo);
    foo = null;
    console.log({ foo }, typeof foo);
    foo = Symbol();
    console.log({ foo }, typeof foo);
    foo = {};
    console.log({ foo }, typeof foo);
    foo = () => {};
    console.log({ foo }, typeof foo);
}

// El scope de let y const es el BLOQUE en el que se definen
// let foo2 = 22;
{
    let foo2 = 250;
    console.log(foo2, "Dentro del bloque");
}
// console.log(foo2, "Fuera del bloque"); // ReferenceError: foo2 is not defined
{
    const IVA_VALUES = {
        base: 1.21,
        reducido: 1.1,
        superReducido: 1.04,
    };

    Object.freeze(IVA_VALUES);

    // IVA_VALUES.base = 1.16; // TypeError: Cannot assign ...

    let price = 22;
    let total = price * IVA_VALUES.base;
    console.log({ total });

    const data = [1, 2, 3];
    Object.freeze(data);

    // data = []

    // data.push(4); // TypeError: Cannot add property 3, object is not extensible
    // data[0] = 0; // TypeError: Cannot assign to read only property '0' of object '[object Array]'
    console.log({ data });
}
{
    // undefined y null -> nullish

    let foo; //implícito, no intencional -> undefined
    console.log({ foo });
    let baz = (() => {})();
    console.log({ baz });

    // Intencional
    foo = "Pepe";
    foo = null;
    console.log({ foo });
    baz = (() => null)();
    console.log({ baz });
}
{
    // strings

    let user = 'Pepe "El tuerto"';
    user = "Pepe \n 'El tuerto'";
    user = 'Pepe \n \'El tuerto\'';
    

    console.log(user);

    // template string

    const title = `El tesoro de
    ${user}`;
    console.log(title);
}
{
    // numbers

    let n = 1;
    n = -1;
    n = 2.4;
    n = 1_200_300;
    n = 1.2e6;
    console.log(n);

    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);

    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);

    n = 9_007_199_254_740_991;
    console.log(n);
    console.log(n + 1);
    console.log(n + 2);

    // BigNumber

    n = 9_007_199_254_740_991n;
    console.log(n);
    console.log(n + 1n);
    console.log(n + 2n);
}
{
    // Números "raritos"

    // cCon bignumber -> lo habitual en programación
    // const rare = 0n / 0n; // RangeError

    let rare = 0 / 0;
    console.log(rare, typeof rare); //NaN

    console.log(isNaN(rare)); //true
    console.log(Number.isNaN(rare)); //true

    // Con conversion de tipos
    console.log(isNaN("Pepe")); //true
    // Sin conversion de tipos
    console.log(Number.isNaN("Pepe")); //false

    // rare = 1n / 0n; // RangeError: Division by zero

    rare = 1 / 0;
    console.log(rare); // Infinity

    rare = -1 / 0;
    console.log(rare); // -Infinity

    rare = -0;
    console.log(rare); // -0
}

{
    // casting y coercion
    // coercion -> implícita
    // casting -> explícita

    let n = 1;
    let x = "2";

    let resultDivision = n / x; // coerción
    console.log(resultDivision); // 0.5
    
    // Tipado débil => SIEMPRE hace coerción
    
    let result = n + x; // coerción
    console.log(result); // 12
  
    result = n + Number(x); // casting
    console.log(result); // 3

    console.log(typeof n, typeof x); 
}
{
    // truly v. falsy v. nullish

    // falsy -> false
    console.log(Boolean(false));
    console.log(Boolean(0));
    console.log(Boolean(-0));
    console.log(Boolean(0n));
    console.log(Boolean(""));
    console.log(Boolean(NaN));
    // nullish (??)
    console.log(Boolean(undefined));
    console.log(Boolean(null));
}
{
    // Condicionales 

    const b = true;
    let x;
    if (b) {
        //algo
        x = "Es true";
    } else {
        //otro algo
        x = "No es true";
    }
    console.log(x);

    const y = !b ? "No Es true" : "Es true"; // operador ternario
    console.log(y);

    
    // A OR B -> false si A es falsy y B es falsy, true en cualquier otro caso
}
{
    // Operadores lógicos
    
    // || // OR lógico

    // && // AND lógico

    const a = () => {
        console.log("Ejecutando a");
        return "Pepe";
    };
    
    const b = () => {
        console.log("Ejecutando b");
        return 22;
    };

    // A || B -> true si A es truthy o B es truthy, false en cualquier otro caso
    
    const r = a() || b(); //  Ejecuta a, devuelve 'Pepe', no ejecuta b
    console.log({ r });

    // A && B -> true si A es truthy y B es truthy, false en cualquier otro caso

    const r2 = a() && b() // Ejecuta a, devuelve 22, no ejecuta b
    console.log({ r2 });

    if (a() || b()) {
        console.log("Es verdad uno de los dos");
    } else {
        console.log("Son los dos falsos");
    }

    if (a() && b()) {
        console.log("Son verdad los dos");
    } else {
        console.log("Al menos uno es falso");
    }

    // ?? // nullish coalescing operator

    // A ?? B -> devuelve A si A no es nullish, devuelve B en cualquier otro caso

    const r3 = a() ?? 'Default'; // Ejecuta a, devuelve 'Pepe', no ejecuta b
    // const r4 = a() ? a() : 'Default'; // No ejecuta a, devuelve 'Default'

    // El operador .? -> Optional chaining operator

    const obj = {
        name: "Pepe",
        address: {
            city: "Madrid",
        },
    };

    console.log("Comprobando city:", obj.address?.city);
    console.log("Comprobando JOB:", obj.job);
    console.log("Comprobando JOB:", obj.job?.job);

    // El operador ! -> Non-null assertion operator (TypeScript)

}
{
    // Coerción de primitivos a objetos
    let foo = "Pepe";
    // foo.to = 9; // TypeError
    console.log(foo.toLowerCase());
}
