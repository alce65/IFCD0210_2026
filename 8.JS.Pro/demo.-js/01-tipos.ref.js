console.log("------------------------------------------------");
console.log("Referenciados");
console.log("------------------------------------------------");
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

    foo.title = "Función declarada";
    baz.title = "Función por asignación";
    arrowFoo.title = "Arrow function";

    console.log(foo, baz, arrowFoo);
}
{
    // objects
    const obj1 = new Object(); // No se usa
    obj1.name = "Juan";
    obj1.age = 45;
    obj1.isUser = true;

    // Objeto literal (JSON): Douglas Crockford
    const obj = {
        name: "Juan",
        age: 45,
        isUser: true,
    };

    // obj1 = {}; TypeError: Assignment
    console.log(obj1, obj);

    obj.name = "Pepe";
    obj.job = "Developer";
    delete obj.isUser;

    console.log(obj);
}
{
    // Acceso a las propiedades

    const obj = {
        name: "Juan",
        age: 45,
        isUser: true,
    };

    // Notación por puntos
    console.log(obj.age);
    // console.log(obj['age']);

    // Notación []

    const propertyName = "name";

    console.log(obj[propertyName]);

    for (const key in obj) {
        const value = obj[key];
        console.log(`La propiedad ${key} vale ${value}`);
    }
}
{
    // Arrays
    const data = [1, 2, 3];
    const data2 = new Array(1, 2, 3);

    console.log(typeof data, typeof data2);

    data.name = "Array de números";
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
    obj.name = "Pepe";
    // obj = {}; // Error TypeError: Assignment

    // const + objeto + Object.freeze = CONSTANTE

    const EMPRESA = { brand: "CAS", address: "" };
    Object.freeze(EMPRESA);

    // EMPRESA.brand = 'New Empresa'; // TypeError: Cannot assign to read only
}
{
    //  Métodos (de instancia)
    const greet = () => "Hola Mundo";
    const obj = {
        name: "Pepe",
        greet: function () {
            return "Hola Mundo, soy " + this.name;
        },
    };
    console.log('Usando un método:', obj.greet());
    
    
    [].at(-1);
    "".toLowerCase();
}
{
    // Métodos estáticos (de clase)
    const obj = {
        greet: function () {
            return "Hola Mundo";
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

    const d = "2";
    console.log(22 / d);

    let foo = "Hola";

    // const z = new String()

    // Ejemplo de coercion a String
    console.log(foo.toLowerCase());
    console.log(foo);

    let n = 22;
    console.log(n.toFixed(2));

    let big = 2n;
    big.toString();
}
