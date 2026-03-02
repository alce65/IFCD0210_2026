{
    // Datos y sus tipos

    console.log('Pepe', typeof 'Pepe');
    console.log(22, typeof 22);
    console.log(true, typeof true);
    console.log(22n, typeof 22n);
    console.log(undefined, typeof undefined);
    console.log(null, typeof null, 'MENTIRA, un BUG del lenguaje original');
    console.log(Symbol(), typeof Symbol());
    console.log({}, typeof {});
    console.log(() => {}, typeof (() => {}));

    // Demostración de que null NO ES UN OBJETO

    console.log(({}.foo = 22));
    // console.log(('Pepe'.foo = 22));
    //console.log((22.foo = 22));
    // console.log((undefined.foo = 22));
    // console.log((null.foo = 22));
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
}

{
    // Variables con let -> reasignarse y opcionalmente CAMBIAR DE TIPO

    // El tipo depende de el valor
    // El tipo cambia dinámicamente

    let foo;
    console.log({ foo }, typeof foo);
    foo = 'Pepe';
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

//console.log(foo); // ReferenceError: foo is not defined

{
    const IVA_VALUES = {
        base: 1.21,
        reducido: 1.1,
        superReducido: 1.04,
    };

    Object.freeze(IVA_VALUES);

    // IVA_VALUES.base = 1; TypeError: Cannot assign ...

    let price = 22;
    let total = price * IVA_VALUES.base;
    console.log(total);

    const data = [1, 2, 3];
}
{
    // undefined y null -> nullish

    let foo; //implícito, no intencional -> undefined
    console.log({ foo });
    let baz = (() => {})();
    console.log({ baz });

    // Intencional
    foo = 'Pepe';
    foo = null;
    console.log({ foo });
    baz = (() => null)();
    console.log({ baz });
}
{
    // strings

    let user = 'Pepe "El tuerto"';
    user = "Pepe \n 'El tuerto'";

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
    console.log(isNaN('Pepe')); //true
    // Sin conversion de tipos
    console.log(Number.isNaN('Pepe')); //false

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
    let x = '2';

    let result = n / Number(x); // casting
    console.log(result);

    // Tipado débil => SIEMPRE hace coerción

    result = n + x; // coerción
    console.log(result); // 12
}
{
    // truly v. falsy v. nullish

    // falsy -> false
    console.log(Boolean(false));
    console.log(Boolean(0));
    console.log(Boolean(-0));
    console.log(Boolean(0n));
    console.log(Boolean(''));
    console.log(Boolean(NaN));
    // nullish (??)
    console.log(Boolean(undefined));
    console.log(Boolean(null));
}
{
    // Coerción de primitivos a objetos
    let foo = 'Pepe';
    // foo.to = 9; // TypeError
    console.log(foo.toLowerCase());
}
{
    // functions
    function foo() {} // Declaración
    const baz = function () {}; // asignación de expresión funcional (anónima)
    const arrowFoo = () => {}; // asignación de arrow function (anónima)

    // Uso (ejecuto, invoco, run) la función
    // operador de invocación: ()

    foo();
    baz();
    arrowFoo();

    // Son objetos de primera clase

    foo.title = 'Función declarada';
    baz.title = 'Función por asignación';
    arrowFoo.title = 'Arrow function';

    console.log(foo, baz, arrowFoo);
}
{
    // objects
    const obj1 = new Object(); // No se usa

    // Objeto literal (JSON): Douglas Crockford
    const obj = {
        name: 'Juan',
        age: 45,
        isUser: true,
    };

    obj1.name = 'Juan';
    obj1.age = 45;
    obj1.isUser = true;

    // obj1 = {}; TypeError: Assignment
    console.log(obj1, obj);

    obj.name = 'Pepe';
    delete obj.isUser;

    console.log(obj);
}
{
    // Acceso a las propiedades

    const obj = {
        name: 'Juan',
        age: 45,
        isUser: true,
    };

    // Notación por puntos
    console.log(obj.age);
    // console.log(obj['age']);

    // Notación []

    const propertyName = 'name';

    console.log(obj[propertyName]);

    for (const key in obj) {
        console.log(`La propiedad ${key} vale ${obj[key]}`);
    }
}
{
    // Arrays
    const data = [1, 2, 3];
    const data2 = new Array(1, 2, 3);

    console.log(typeof data, typeof data2);

    data.name = 'Array de números';
    console.log(data, data2);
}
{
    // Mutabilidad

    // Reasignación de valores INMUTABLES
    let z = 22;
    let x = 22;
    x = 24;

    // const + valor primitivo (INMUTABLE) = CONSTANTE
    const c = 23;
    // c = 33; // Error TypeError: Assignment

    // const + objeto -> NO ES CONSTANTE: es MUTABLE

    const obj = {};
    obj.name = 'Pepe';
    // obj = {}; // Error TypeError: Assignment

    // const + objeto + Object.freeze = CONSTANTE

    const EMPRESA = { brand: 'CAS', address: '' };
    Object.freeze(EMPRESA);

    // EMPRESA.brand = 'New Empresa'; // TypeError: Cannot assign to read only
}
{
    //  Métodos (de instancia)
    const greet = () => 'Hola Mundo';
    const obj = {
        greet: function () {
            return 'Hola Mundo';
        },
    };

    console.log(obj.greet());
    [].at(-1);
    ''.toLowerCase();
}
{
    // Métodos estáticos (de clase)
    const obj = {
        greet: function () {
            return 'Hola Mundo';
        },
    };

    Object.freeze(obj);

    const data = [];
    console.log(typeof data);

    Array.isArray(data); // true

    Math.random();
    // new JSON();
}
{
    // Wrapper objects de los primitivos

    const d = '2';
    console.log(22 / d);

    let foo = 'Hola';

    // const z = new String()

    // Ejemplo de coercion a String
    console.log(foo.toLowerCase());
    console.log(foo);

    let n = 22;
    console.log(n.toFixed(2));

    let big = 2n;
    big.toString();
}
