---
title: OOP con TypeScript
Description: Conceptos generales de Programación Orientada a Objetos (OOP) y su implementación en TypeScript. Apéndice para le Curso de TypeScript
---

- [Introducción a la OOP](#introducción-a-la-oop)
  - [Comparación con la programación estructurada](#comparación-con-la-programación-estructurada)
  - [Perspectiva histórica](#perspectiva-histórica)
- [Principios o pilares de la OOP](#principios-o-pilares-de-la-oop)
  - [1. Abstracción](#1-abstracción)
  - [2. Encapsulación](#2-encapsulación)
  - [3. Herencia](#3-herencia)
  - [4. Polimorfismo](#4-polimorfismo)
  - [Resumen de conceptos](#resumen-de-conceptos)
- [Detalles sobre las Clases](#detalles-sobre-las-clases)
  - [Atributos, variables de estado y variables de clase](#atributos-variables-de-estado-y-variables-de-clase)
  - [Métodos. Requisitos e invariantes](#métodos-requisitos-e-invariantes)
  - [Gestión de excepciones](#gestión-de-excepciones)
- [Relaciones entre objetos y clases](#relaciones-entre-objetos-y-clases)
  - [Relaciones entre objetos. Paso de mensajes](#relaciones-entre-objetos-paso-de-mensajes)
  - [Relaciones entre clases](#relaciones-entre-clases)
    - [Asociación](#asociación)
    - [Agregación y Composición](#agregación-y-composición)
      - [Agregación](#agregación)
      - [Composición](#composición)
    - [Resumen de las diferencias](#resumen-de-las-diferencias)
- [Objetos](#objetos)
  - [Creación y destrucción de objetos](#creación-y-destrucción-de-objetos)
    - [Creación de objetos](#creación-de-objetos)
    - [Destrucción de objetos](#destrucción-de-objetos)
  - [Llamada a métodos de un objeto](#llamada-a-métodos-de-un-objeto)
  - [Visibilidad y uso de las variables de estado](#visibilidad-y-uso-de-las-variables-de-estado)
    - [Visibilidad de las variables de estado](#visibilidad-de-las-variables-de-estado)
  - [Referencias a objetos](#referencias-a-objetos)
    - [Paso de referencias](#paso-de-referencias)
  - [Persistencia de objetos](#persistencia-de-objetos)
  - [Optimización de memoria y recolección de basura (garbage collection)](#optimización-de-memoria-y-recolección-de-basura-garbage-collection)
    - [Optimización de memoria](#optimización-de-memoria)
    - [Recolección de basura (Garbage Collection)](#recolección-de-basura-garbage-collection)
    - [Evitar fugas de memoria](#evitar-fugas-de-memoria)
  - [Resumen: Objetos en OOP](#resumen-objetos-en-oop)
- [Herencia](#herencia)
  - [Concepto de herencia. Superclases y subclases](#concepto-de-herencia-superclases-y-subclases)
  - [Herencia múltiple](#herencia-múltiple)
  - [Clases abstractas](#clases-abstractas)
  - [Tipos de herencia](#tipos-de-herencia)
  - [Polimorfismo y enlace dinámico (dynamic binding)](#polimorfismo-y-enlace-dinámico-dynamic-binding)
    - [Polimorfismo](#polimorfismo)
    - [Enlace dinámico (dynamic binding)](#enlace-dinámico-dynamic-binding)
  - [Directrices para el uso correcto de la herencia](#directrices-para-el-uso-correcto-de-la-herencia)
  - [Resumen: Herencia en OOP](#resumen-herencia-en-oop)
- [Modularidad](#modularidad)
  - [Librerías de Clases](#librerías-de-clases)
  - [Ámbito de Utilización de Nombres (Namespace)](#ámbito-de-utilización-de-nombres-namespace)
    - [Namespace en TypeScript](#namespace-en-typescript)
  - [Ventajas de la Utilización de Módulos o Paquetes](#ventajas-de-la-utilización-de-módulos-o-paquetes)
    - [Ventajas del Uso de Módulos o Paquetes:](#ventajas-del-uso-de-módulos-o-paquetes)
  - [Conclusión: Modularidad en OOP](#conclusión-modularidad-en-oop)
- [Genericidad y Sobrecarga](#genericidad-y-sobrecarga)
  - [Concepto de Genericidad](#concepto-de-genericidad)
  - [Concepto de Sobrecarga](#concepto-de-sobrecarga)
    - [Sobrecarga de funciones/métodos](#sobrecarga-de-funcionesmétodos)
    - [Sobrecarga de operadores](#sobrecarga-de-operadores)
  - [Comparación entre Genericidad y Sobrecarga](#comparación-entre-genericidad-y-sobrecarga)
    - [Diferencias](#diferencias)
    - [Similitudes](#similitudes)
  - [Conclusión: Genericidad vs. Sobrecarga](#conclusión-genericidad-vs-sobrecarga)
- [Lenguaje unificado de modelado (UML)](#lenguaje-unificado-de-modelado-uml)
  - [¿Qué es UML?](#qué-es-uml)
  - [Diagramas en UML](#diagramas-en-uml)
    - [Diagramas Estructurales](#diagramas-estructurales)
    - [Diagramas de Comportamiento](#diagramas-de-comportamiento)
  - [Beneficios de Utilizar UML](#beneficios-de-utilizar-uml)
  - [4. Herramientas UML](#4-herramientas-uml)
  - [Mermaid](#mermaid)
  - [Conclusión: UML en el Desarrollo de Software](#conclusión-uml-en-el-desarrollo-de-software)
- [Temario del certificado](#temario-del-certificado)

## Introducción a la OOP

La **Programación Orientada a Objetos** (OOP) es un **paradigma** de programación que se basa en los conceptos de "clases" y "objetos" para modelar juntos datos y comportamientos. Ambas son entidades que agrupan tanto datos como funciones relacionadas, lo que permite **modelar** problemas del mundo real, representando entidades y conceptos de una manera más natural y organizada.

- Las clases **encapsulan** datos y comportamientos relacionados, actuando como **plantillas** que definen las **propiedades** (atributos) y **métodos** (comportamientos) que los objetos pueden tener.

- Los objetos son **instancias** de "**clases**", representando cada uno de ellos una **entidad concreta** que posee los atributos y métodos definidos por la clase. Los objetos **interactúan** entre sí mediante mensajes o métodos, lo que permite modelar sistemas complejos de manera más cercana a la realidad.

```typescript
class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`The car ${this.make} ${this.model} is starting.`);
  }
}

// Creating an object (instance) of the class
const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Output: The car Toyota Corolla is starting.
```

Este enfoque facilita la reutilización del código y la creación de sistemas complejos mediante la combinación de objetos más simples, permitiendo a los desarrolladores crear aplicaciones más organizadas, modulares y fáciles de mantener.

Además, la OOP promueve

- la **abstracción** (clases)
- la **encapsulación** (objetos)
- la **herencia** y
- el **polimorfismo**

Estos principios ayudan a gestionar la complejidad del software y a mejorar su flexibilidad y extensibilidad. Habitualmente son denominados los **cuatro pilares de la OOP**.

La OOP es ampliamente utilizada en lenguajes como Python, Java, C++, PHP y muchos más, para el desarrollo de aplicaciones complejas. Como paradigma es un conocimiento esencial para los desarrolladores de software.

### Comparación con la programación estructurada

La **programación estructurada** se enfoca principalmente en la división de un programa en **procesos** definidos como secuencias, decisiones (if, else) y bucles (for, while) para organizar el flujo de control del programa. En lugar de agrupar datos y comportamientos en un objeto, la programación estructurada **separa** los datos de las funciones. Esto puede dificultar el manejo de sistemas complejos, ya que el código tiende a ser menos modular y más propenso a errores.

Comparación:

- Orientación a objetos: Los programas están centrados en objetos que combinan datos y métodos. Es útil para sistemas complejos, permite mayor reutilización de código y ofrece más flexibilidad.
- Programación estructurada: Los programas están centrados en funciones y procedimientos que operan sobre datos. Es útil para problemas más simples o bien estructurados, pero tiende a ser más difícil de manejar a medida que los sistemas se vuelven más grandes y complejos.

### Perspectiva histórica

La Programación Orientada a Objetos (OOP) tiene sus raíces en la década de 1960 y ha evolucionado considerablemente a lo largo de las décadas. A continuación, te ofrezco un resumen de su historia:

1. **Años 60**: Simula y el nacimiento del concepto
   La OOP surgió de la necesidad de modelar sistemas complejos en simulaciones. En 1962, en el **Centro de Cálculo de los Laboratorios Bell**, el lenguaje **Simula** fue desarrollado por los noruegos **Ole-Johan Dahl** y **Kristen Nygaard**. Simula fue diseñado para simular sistemas físicos y se considera el primer lenguaje orientado a objetos. Introdujo conceptos como **clases** y **objetos**, que permitieron organizar el código de manera modular y facilitar la simulación de sistemas reales.

2. **Años 70**: Smalltalk y la formalización de la OOP
   En la década de 1970, el lenguaje **Smalltalk**, creado por el biólogo **Alan Kay** y su equipo en **Xerox PARC**, consolidó la OOP como un paradigma completo. Smalltalk introdujo muchos de los principios clave de la OOP, como la **herencia**, el **polimorfismo** y el **paso de mensajes**. Alan Kay describió a los objetos como "pequeñas máquinas que interactúan entre sí mediante el envío de mensajes", un concepto que influyó profundamente en la visión de los sistemas distribuidos y la interacción entre objetos.

3. **Años 80**: Popularización de la OOP
   En la década de 1980, la OOP ganó terreno gracias a la creciente popularidad de lenguajes como **C++** (creado por **Bjarne Stroustrup**), que combinaba la eficiencia de C con los principios de la OOP. A diferencia de los anteriores lenguajes orientados a objetos, **C++** fue ampliamente adoptado por la **industria** del software y ayudó a que la OOP se convirtiera en un estándar para el desarrollo de aplicaciones complejas, como sistemas operativos y videojuegos.

   Al mismo tiempo, lenguajes como **Objective-C** (1984), utilizado más tarde por Apple en el desarrollo de iOS y macOS, también aplicaron los principios de la OOP, expandiendo aún más su uso.

4. **Años 90**: Java y la OOP moderna
   En 1995, **Java**, creado por **James Gosling** y su equipo en **Sun Microsystems**, consolidó la OOP como el enfoque dominante en el desarrollo de software. Java fue diseñado con un fuerte enfoque en la portabilidad y la seguridad, y adoptó por completo los principios de la OOP. Su eslogan, "escribe una vez, ejecútalo en cualquier lugar", impulsó su adopción en la web y en aplicaciones empresariales, lo que fortaleció la reputación de la OOP como paradigma clave.

   Además, la OOP se extendió a otros lenguajes y plataformas. **Python**, lanzado a principios de los años 90 por **Guido van Rossum**, también incorporó principios de la OOP, haciendo que este paradigma fuera accesible a más desarrolladores.

5. Siglo XXI: OOP en todos los niveles
   Con el advenimiento del nuevo milenio, la OOP se consolidó aún más, apareciendo en casi todos los lenguajes de programación modernos, desde lenguajes de alto nivel hasta lenguajes usados en desarrollo web y móvil. **C#**, desarrollado por **Microsoft** en 2000, se inspiró en Java y C++ y rápidamente se convirtió en un lenguaje esencial para la plataforma .NET.

   Además, lenguajes como **JavaScript**, inicialmente creado para la programación web en el lado del cliente, también adoptaron características de la OOP, lo que permitió el desarrollo de aplicaciones web más complejas y modulares.

6. Evolución de la OOP y nuevos paradigmas
   A pesar de su éxito, la OOP no ha estado exenta de críticas. Algunos han señalado que puede complicar el diseño de sistemas y que el manejo de la **herencia múltiple** y las dependencias puede generar software rígido. Como respuesta a estas críticas, surgieron enfoques como la **programación orientada a componentes** y los **paradigmas funcionales**, que buscan complementar la OOP.

Hoy en día, muchos lenguajes modernos, como **Scala** y **Rust**, son multiparadigma, integrando elementos de OOP con otros paradigmas como la programación funcional. Lo mismo sucede en lenguajes asentados hace tiempo, como **Python** y **JavaScript**, que también permiten el uso flexible de la OOP junto con enfoques funcionales.

En resumen:

- Años 60: Nace la OOP con Simula para modelar simulaciones.
- Años 70: Se formalizan los conceptos clave con Smalltalk.
- Años 80: C++ populariza la OOP en la industria.
- Años 90: Java consolida la OOP en el desarrollo web y empresarial.
- Siglo XXI: La OOP es el enfoque dominante, aunque se combina con otros paradigmas.

La OOP ha revolucionado la forma en que desarrollamos software, permitiendo construir sistemas más modulares, mantenibles y escalables, y sigue siendo una de las piedras angulares del desarrollo de software moderno.

## Principios o pilares de la OOP

### 1. Abstracción

La abstracción consiste en **simplificar la complejidad** del mundo real al modelar objetos en términos de sus atributos y comportamientos esenciales. Se refiere a la capacidad de definir los detalles esenciales mientras **se ocultan** las complejidades innecesarias. Esto facilita la creación de estructuras más simples y manejables. Esto se puede lograr mediante el uso de clases abstractas o interfaces.

- Las clases representan la abstracción de todos los objetos (instancias) que pertenecen a ella.
- Las clases abstractas y las interfaces suponen una mayor abstracción de las clases que los extienden o implementan.

En TypeScript, las clases se utilizan para definir estos modelos, y se crean usando la palabra clave `class`, similar a otros lenguajes OOP.

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I am ${this.name} and I am ${this.age} years old.`;
  }
}
```

En el ejemplo anterior, estamos reduciendo la complejidad de todas las personas a una "persona" abstracta con su nombre y edad, y proporcionando un método para saludar. Los detalles internos de cómo se almacenan y gestionan estos datos se ocultan al usuario de la clase.

### 2. Encapsulación

La encapsulación es el principio de

- agrupar los datos (atributos) y los comportamientos (métodos) relacionados en un único objeto
- ocultar los detalles internos de implementación del objeto
- exponer solo lo necesario a través de métodos públicos.

La encapsulación protege el estado interno del objeto de accesos no autorizados. Esto permite **controlar** cómo se accede y se modifica el estado interno del objeto, evitando cambios inesperados y asegurando la **integridad** de los datos.

Este principio de la OOP se conoce también como Ocultación de información (information hiding)

En typescript esto se logra utilizando **objetos** con modificadores de acceso como

- `private`: Los miembros declarados como private solo son accesibles dentro de la clase en la que se definen. Cualquier instancia de la clase puede acceder a un miembro privado de cualquier otra instancia de la clase.
- `protected`: los miembros protected son accesibles dentro de la clase y sus subclases.
- `public`: Los miembros public son accesibles desde cualquier parte del programa. Por defecto, los miembros son públicos si no se especifica un modificador.

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

En el ejemplo, la propiedad `balance` se declara como `private`, lo que significa que solo se puede acceder a ella desde dentro de la clase. Los métodos `deposit` y `getBalance` se utilizan para modificar y acceder al saldo de la cuenta, respectivamente. Esto evita que los usuarios de la clase modifiquen directamente el saldo sin pasar por los métodos definidos.

No se implementan getters y setters en sentido estricto, sino métodos cuyo nombre tiene un significado semántico ligado a la lógica de negocio, y que pueden realizar operaciones adicionales, como comprobaciones de seguridad o validaciones.

Otra forma de referirse a la encapsulación esta en el concepto de **Tipo Abstracto de Datos** (ADT, por sus siglas en inglés), que define una forma de organizar datos y operaciones sobre esos datos sin preocuparse por la implementación interna. Los ADT especifican qué operaciones pueden realizarse sobre los datos, pero no revelan cómo están implementados.

La encapsulación de datos en un ADT es la práctica de proteger los detalles internos de cómo están almacenados o gestionados los datos. Los usuarios del ADT solo interactúan con él a través de una interfaz pública, lo que permite cambios en la implementación interna sin afectar el uso del ADT.

Ejemplo de un ADT:
Supongamos que estamos implementando una pila (stack) como un ADT. El comportamiento de la pila es que los elementos se apilan uno encima de otro y solo el último en entrar puede salir (LIFO: Last In, First Out).

```typescript
class Stack<T> {
  private items: T[] = [];

  // Push a new item onto the stack
  public push(item: T): void {
    this.items.push(item);
  }

  // Pop the top item from the stack
  public pop(): T | undefined {
    return this.items.pop();
  }

  // Check if the stack is empty
  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}
```

En este ejemplo, el almacenamiento interno de los elementos (el array items) está encapsulado. Los usuarios de la clase solo pueden interactuar con la pila a través de los métodos públicos push, pop y isEmpty. Esto protege la integridad de la pila y evita que los usuarios accedan directamente a los elementos almacenados.

### 3. Herencia

La herencia permite crear nuevas clases (subclase o clase derivada) basadas en clases existentes (superclase o clase base). Se puede decir que una clase "**hija**" hereda propiedades y métodos de una clase "**padre**". Esto permite la **reutilización** de código y la **extensión** de funcionalidades, En TypeScript, se utiliza la palabra clave `extends` para indicar que una clase hereda de otra.

```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}
```

En el ejemplo, la clase `Dog` hereda de la clase `Animal`, lo que significa que `Dog` tiene todas las propiedades y métodos de `Animal`. La clase `Dog` puede **sobrescribir** el método `makeSound` para proporcionar un comportamiento específico para los perros.

La clase padre o superclase puede ser **abstracta**, como en este caso, lo que significa que no se pueden crear instancias de ella, sino que se utilizan como plantillas para crear subclases o clases hijas.

### 4. Polimorfismo

El polimorfismo permite que una clase o método se comporte de diferentes maneras según el contexto. Esto se logra mediante

- el uso de una misma **interfaz** para diferentes tipos de datos o clases (polimorfismo basado en interfaces)
- la **sobreescritura** de métodos en clases derivadas a partir de una clase común (polimorfismo basado en herencia)

De ambas formas, diferentes clases pueden tener métodos con el mismo nombre, pero con **implementaciones diferentes** y por tanto comportamientos distintos.

```typescript
class Vehicle {
  move(): void {
    console.log('The vehicle moves.');
  }
}

class Car extends Vehicle {
  move(): void {
    console.log('The car moves on wheels.');
  }
}

class Boat extends Vehicle {
  move(): void {
    console.log('The boat sails on water.');
  }
}

const vehicles: Vehicle[] = [new Car(), new Boat()];
vehicles.forEach((vehicle) => vehicle.move());
```

En el ejemplo, las clases `Car` y `Boat` heredan de la clase `Vehicle` y sobrescriben el método `move`. Al recorrer un array de vehículos, cada vehículo se comporta de manera diferente según su tipo, lo que demuestra en acción el polimorfismo basado en clases.

### Resumen de conceptos

- Clase: Se usa para **crear** objetos (instancias) que agrupan datos y comportamientos.
- Objeto: Una **instancia** concreta de una clase.
  . Abstracción: Se puede usar una **clase abstracta** que define un comportamiento general que luego es implementado por clases concretas.
- Encapsulación: Se logra con los modificadores de acceso `private`, `protected` y `public`.
- Herencia: Usa `extends` para heredar comportamientos y propiedades de otra clase.
  . Polimorfismo: Diferentes clases pueden **implementar** el mismo método de diferentes formas.

## Detalles sobre las Clases

Una clase en OOP es una plantilla o molde que define la estructura y el comportamiento de los **objetos** que se crean a partir de ella. Los objetos son instancias de una clase, y cada uno de ellos tiene un conjunto de atributos (datos) y métodos (comportamientos) que están definidos por la clase.

Ejemplo de clase en TypeScript:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Atributos, variables de estado y variables de clase

Los **atributos** (también llamados **propiedades**) son las variables que se definen dentro de una clase y que representan el estado de los objetos de esa clase. Cada objeto tiene su propio conjunto de atributos, que pueden tomar diferentes valores.

Las **variables de estado** son los atributos de un objeto que mantienen información sobre el estado actual del objeto. Estos valores pueden cambiar a lo largo de la vida del objeto en función de las operaciones que se realicen sobre él. En el ejemplo anterior, `name` y `age` son variables de estado del objeto Person.

Las **variables de clase** (o **propiedades estáticas**) son variables que se comparten entre todas las instancias de la clase. Son definidas a nivel de clase en lugar de nivel de objeto. Esto significa que, a diferencia de las variables de estado, que son únicas para cada instancia, las variables de clase son comunes a todos los objetos de la clase.

Ejemplo de variables de clase:

```typescript
class Person {
  name: string;
  age: number;
  static species: string = 'Homo sapiens'; // Variable de clase compartida por todas las instancias

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static describeSpecies() {
    console.log(`We are all part of the species: ${Person.species}.`);
  }
}

const person1 = new Person('Bob', 25);
const person2 = new Person('Alice', 30);

Person.describeSpecies(); // Output: We are all part of the species: Homo sapiens.
```

En este caso, la propiedad species es una variable de clase, lo que significa que no pertenece a ningún objeto en particular, sino a la clase en sí. Todas las instancias de la clase Person comparten esta propiedad.

### Métodos. Requisitos e invariantes

Los **métodos** son las funciones que definen el comportamiento de un objeto. Los métodos se definen dentro de la clase y pueden operar sobre los atributos de la clase para modificar el estado del objeto o realizar operaciones.

Los métodos también pueden clasificarse en:

- Métodos de instancia: Actúan sobre los atributos de una instancia particular de la clase.
- Métodos de clase (estáticos): Pertenecen a la clase en sí y no actúan sobre los atributos de ninguna instancia.

**Requisitos**. Un método puede tener requisitos o precondiciones, que son condiciones que deben cumplirse antes de que el método sea ejecutado. Estas precondiciones aseguran que el método se utilice en un contexto válido. Si no se cumplen las precondiciones, la ejecución del método podría fallar o generar resultados incorrectos.

**Invariantes**. Un invariante es una condición que siempre debe ser verdadera antes y después de que se ejecute un método. Los invariantes aseguran que el objeto se mantenga en un estado coherente. Por ejemplo, si tenemos una clase que representa una cuenta bancaria, un invariante podría ser que el saldo de la cuenta nunca debe ser negativo.

Ejemplo con precondiciones e invariantes:

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative.'); // Requisito (precondición)
    }
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive.'); // Precondición
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient funds.'); // Precondición
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

En este ejemplo, los requisitos están representados por las precondiciones que verifican si los valores de entrada son válidos. Un posible invariante es que el saldo de la cuenta siempre debe ser mayor o igual a cero.

### Gestión de excepciones

La gestión de excepciones en OOP es el proceso de manejar errores o condiciones excepcionales de manera controlada. Cuando algo va mal durante la ejecución de un programa, se puede lanzar una excepción (throw) para indicar que ha ocurrido un error. Las excepciones se pueden capturar (catch) y manejar de forma adecuada para evitar que el programa se detenga abruptamente.

En TypeScript y muchos otros lenguajes, se usa la estructura try-catch-finally para gestionar excepciones:

- try: Código que puede lanzar una excepción.
- catch: Bloque que captura y maneja la excepción si se lanza.
- finally: Bloque que se ejecuta siempre, independientemente de si hubo una excepción o no (opcional).

Ejemplo de gestión de excepciones:

```typescript
class Calculator {
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.'); // Lanza una excepción
    }
    return a / b;
  }
}

const calculator = new Calculator();

try {
  console.log(calculator.divide(10, 0)); // Esto lanza una excepción
} catch (error) {
  console.error(error.message); // Manejo de la excepción
} finally {
  console.log('Operation attempted.');
}
```

En este ejemplo, si intentas dividir por cero, se lanza una excepción, que es capturada por el bloque catch. El bloque finally siempre se ejecuta, independientemente de si se produjo una excepción.

Conclusión:

- Clases de objetos: Las clases definen la estructura y el comportamiento de los objetos.
- Atributos y variables de clase: Los atributos son las propiedades del objeto, y las variables de clase son compartidas entre todas las instancias.
- Métodos: Definen el comportamiento de los objetos; pueden tener precondiciones e invariantes.

## Relaciones entre objetos y clases

### Relaciones entre objetos. Paso de mensajes

En la orientación a objetos, el **paso de mensajes** se refiere a la forma en que los objetos se **comunican** e **interactúan** entre sí. En lugar de llamar directamente a funciones, los objetos envían mensajes a otros objetos. Estos mensajes son esencialmente llamadas a métodos, en los cuales se especifica el nombre del método y los parámetros necesarios.

El concepto de paso de mensajes proviene de los primeros lenguajes orientados a objetos como **Smalltalk**, donde la interacción entre objetos se modelaba de manera explícita como un proceso de envío y recepción de mensajes.

```typescript
class Car {
  public start() {
    console.log('The car is starting.');
  }
}

class Driver {
  public drive(car: Car) {
    car.start(); // Paso de mensaje: el objeto 'car' recibe el mensaje 'start'
  }
}

const myCar = new Car();
const driver = new Driver();

driver.drive(myCar); // Output: The car is starting.
```

En este ejemplo, el objeto driver envía un mensaje al objeto myCar al invocar el método start a través del mensaje car.start(). En términos de OOP, este es el paso de mensajes.

### Relaciones entre clases

Las relaciones entre clases en OOP se refieren a cómo las clases se **conectan** y **comunican** entre sí para modelar sistemas complejos. Estas relaciones pueden ser de diferentes tipos, como **asociación**, **agregación** y **composición**, y se utilizan para definir cómo las clases interactúan y se relacionan entre sí.

La **asociación** es el término **general** que se utiliza para describir **cualquier tipo de relación** entre objetos de clases.

Sin embargo, hay dos **tipos específicos** de asociación que a menudo se mencionan: **agregación** y **composición**. Estos términos reflejan la fortaleza de la relación entre los objetos.

#### Asociación

**Asociación** (relación más general) la relación entre dos unidades separadas (clases), pero que pueden existir de manera independiente
La asociación no implica propiedad ni dependencia estricta entre los objetos. Se busca el punto en común entre las entidades y se establecen vínculos entre ellas. La asociación permite realizar conexiones lógicas a través de una referencia continua. Se representa con una linea (——)
Ejemplo: Un Driver (conductor) y un Car (auto). El Driver utiliza el Car, pero ambos pueden existir de manera separada.

#### Agregación y Composición

**Agregación** y **Composición** son dos tipos específicos de asociación que implican relaciones más fuertes entre las clases.

##### Agregación

**Agregación** (relación "tiene un") es un tipo específico de asociación que implica que una clase "contiene" o "agrega" objetos de otra clase, pero los objetos agregados pueden existir por sí mismos.
Una clase es parte de otra clase.
Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas).
Habitualmente se da con mayor frecuencia que la composición.
Una clase (la clase contenedora o "agregadora") tiene referencias a instancias de otras clases (clases agregadas)

- Es una relación más débil que la composición (composición **débil**)
- Es un tipo de relación `tiene un` (`has-a`)
- La vida de los objetos agregados es independiente de la clase contenedora.
- Se representa con un rombo abierto (—————◇)
- Ejemplo: Un Library (biblioteca) y los Books (libros). La Library contiene varios Books, pero los Books pueden existir sin necesidad de la Library.

```typescript
class Book {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class Library {
  books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }
}

const book1 = new Book('1984');
const book2 = new Book('To Kill a Mockingbird');

const library = new Library();
library.addBook(book1);
library.addBook(book2);

// Los libros pueden existir fuera de la biblioteca.
```

##### Composición

**Composición** (relación "es parte de") Es un tipo más fuerte de asociación, en la que una clase "compone" o "posee" instancias de otra clase. (OP en el otro sentido, las clases perteneces a otra, la construyen). Supone que la vida de la clase contenida debe coincidir con la vida de la clase contenedor. Los componentes constituyen una parte del objeto compuesto. De esta forma, los componentes no pueden ser compartidos por varios objetos compuestos. La supresión del objeto compuesto conlleva la supresión de los componentes.

- es una relación más fuerte que la agregación (composición **fuerte**).
- los objetos compuestos no pueden existir independientemente de la clase que los contiene;
- Si la clase contenedora se destruye, los objetos agregados también se destruyen.
- Se representa con un rombo lleno (—————◆)
- Ejemplo: Un House (casa) y las Rooms (habitaciones). Las Rooms no pueden existir por sí solas sin la House. Si la House es destruida, las Rooms también lo son.

```typescript
class Room {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class House {
  rooms: Room[];

  constructor() {
    this.rooms = [new Room('Living Room'), new Room('Bedroom')];
  }

  displayRooms() {
    this.rooms.forEach((room) => {
      console.log(`This house has a ${room.name}.`);
    });
  }
}

const myHouse = new House();
myHouse.displayRooms();
// Output:
// This house has a Living Room.
// This house has a Bedroom.
```

En este ejemplo, las habitaciones (Room) son parte de la casa (House), y no pueden existir sin ella. Si la casa se destruye, las habitaciones también desaparecen, lo que es característico de una composición.

#### Resumen de las diferencias

| Relación   | Definición                         | Independencia de los objetos |
| Asociación | Relación general entre dos clases. | Los objetos pueden existir independientemente.|
| Agregación | Una clase "contiene" a otras, pero los objetos agregados pueden existir por sí mismos. | Los objetos agregados son independientes|
| Composición | Una clase "posee" a otras, y los objetos compuestos dependen de la existencia de la clase contenedora. | Los objetos compuestos no pueden existir independientemente |

Conclusión:

- **Asociación** es el término más general que se refiere a la relación entre objetos de diferentes clases.
- **Agregación** y **composición** son tipos específicos de asociación que implican relaciones más fuertes, pero difieren en si los objetos asociados pueden o no existir por sí solos.
- Estos conceptos permiten modelar relaciones complejas en sistemas orientados a objetos, lo que facilita la creación de software modular, mantenible y estructurado.

## Objetos

En Programación Orientada a Objetos (OOP), un **objeto** es una instancia de una clase, que es una entidad que agrupa tanto el estado (atributos) como el comportamiento (métodos). Los objetos interactúan entre sí llamando a los métodos y utilizando las variables de estado (atributos) de otros objetos.

### Creación y destrucción de objetos

#### Creación de objetos

En la mayoría de los lenguajes orientados a objetos, los objetos se crean a partir de una clase utilizando la palabra clave `new` (o constructores específicos del lenguaje). Un **constructor** es un método especial que se llama automáticamente cuando se crea una nueva instancia de una clase.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Alice', 30); // Creación de un objeto de tipo 'Person'
```

En este ejemplo, se crea un objeto `person1` a partir de la clase `Person`, y se asignan los valores de `name` y `age` a través del constructor.

#### Destrucción de objetos

En algunos lenguajes de programación, como C++, la destrucción de objetos puede ser manual y explícita mediante destructores. Sin embargo, en otros lenguajes como JavaScript, TypeScript, Java, y Python, la **recolección de basura** (garbage collection) gestiona automáticamente la destrucción de objetos que ya no están en uso, liberando la memoria que ocupaban.

### Llamada a métodos de un objeto

Los **métodos** son funciones definidas dentro de una clase que actúan sobre los atributos (estado) de los objetos. La llamada a métodos de un objeto se realiza utilizando el operador de punto `.`.

Ejemplo de llamada a métodos:

```typescript
class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  start() {
    console.log(`${this.model} is starting.`);
  }
}

const myCar = new Car('Toyota');
myCar.start(); // Llamada al método 'start' del objeto 'myCar'
```

En este caso, la llamada a `myCar.start()` invoca el método `start` para el objeto `myCar`.

---

### Visibilidad y uso de las variables de estado

Las **variables de estado** (también conocidas como **atributos** o **propiedades**) son los datos que representan el estado interno de un objeto.

#### Visibilidad de las variables de estado

La visibilidad de las variables de estado se refiere a su nivel de acceso desde dentro y fuera de la clase. Normalmente, las variables de estado se clasifican como:

- **Públicas** (`public`): Accesibles desde cualquier parte del programa.
- **Protegidas** (`protected`): Accesibles solo desde dentro de la clase y sus subclases.
- **Privadas** (`private`): Solo accesibles desde dentro de la clase que las define.

Ejemplo

```typescript
class Account {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance; // La variable 'balance' es privada, solo accesible desde dentro de la clase
  }
}

const myAccount = new Account(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
// myAccount.balance; // Error: la propiedad 'balance' es privada y no accesible desde fuera de la clase
```

En este ejemplo, `balance` es una variable de estado privada, lo que significa que solo puede ser accedida o modificada a través de los métodos públicos de la clase `Account`.

### Referencias a objetos

Una **referencia** a un objeto es un puntero o una dirección de memoria que indica la ubicación del objeto en la memoria. En la mayoría de los lenguajes de OOP, las variables que contienen objetos en realidad contienen una referencia al objeto en lugar del objeto en sí.

Ejemplo:

```typescript
const car1 = new Car('Honda');
const car2 = car1; // car2 es una referencia al mismo objeto que car1

car2.start(); // Honda is starting.
```

En este ejemplo, `car2` no es una nueva instancia de `Car`, sino que es una referencia al mismo objeto que `car1`. Si se modifican los atributos de `car2`, también se modificarán en `car1`, ya que ambos hacen referencia al mismo objeto.

#### Paso de referencias

Cuando pasas un objeto como argumento a una función o método, lo que realmente se pasa es una **referencia** a ese objeto, no una copia del objeto.

```typescript
function updateCar(car: Car): void {
  car.model = 'Toyota';
}

const myCar = new Car('Honda');
updateCar(myCar);

console.log(myCar.model); 
```

### Persistencia de objetos

La **persistencia de objetos** se refiere a la capacidad de un objeto de seguir existiendo más allá de la ejecución actual del programa. Para hacer persistentes los objetos, normalmente se guardan en algún tipo de almacenamiento secundario, como archivos, bases de datos, o sistemas de almacenamiento.

Ejemplo: serialización y deserialization

Una forma común de lograr la persistencia de objetos es mediante la **serialización**, que convierte un objeto en una representación que se puede almacenar (por ejemplo, en JSON o XML) y luego deserializarse para restaurar el objeto en una ejecución futura.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Serialización a JSON
const person = new Person('Alice', 30);
const serializedPerson = JSON.stringify(person);
console.log(serializedPerson); // {"name":"Alice","age":30}

// Deserialización desde JSON
const deserializedPerson = JSON.parse(serializedPerson);
console.log(deserializedPerson); // { name: 'Alice', age: 30 }
```

Aquí, el objeto `person` se convierte en un formato de cadena JSON que puede almacenarse en un archivo o base de datos. Más tarde, este JSON puede convertirse nuevamente en un objeto utilizando la deserialización.

### Optimización de memoria y recolección de basura (garbage collection)

#### Optimización de memoria

Cuando trabajas con objetos, es importante gestionar adecuadamente el uso de la memoria, especialmente cuando se crean y destruyen muchos objetos. Algunos lenguajes permiten que los programadores liberen manualmente la memoria que ya no se está utilizando, pero en muchos lenguajes modernos, la memoria se maneja automáticamente.

#### Recolección de basura (Garbage Collection)

La **recolección de basura** es un proceso automático que gestiona la memoria liberando objetos que ya no están en uso. Un objeto se considera "no utilizado" cuando ya no tiene ninguna referencia activa en el programa. En lenguajes como JavaScript, Python o Java, el recolector de basura rastrea los objetos y elimina aquellos que no están referenciados para liberar memoria.

Ejemplo de recolección de basura:

```typescript
let car1 = new Car('Ford');
car1 = null; // La referencia a 'car1' se elimina

// El recolector de basura liberará la memoria utilizada por el objeto 'car1'
// si no hay más referencias activas al objeto.
```

En este caso, al asignar `null` a `car1`, eliminamos la referencia al objeto `Car`. En algún momento posterior, el recolector de basura liberará la memoria del objeto `Car` que ya no está siendo referenciado.

#### Evitar fugas de memoria

Aunque la recolección de basura es automática, los desarrolladores deben prestar atención a evitar situaciones de **fugas de memoria** (memory leaks), que ocurren cuando los objetos no se liberan porque aún existen referencias a ellos, aunque ya no sean necesarias en el programa.

### Resumen: Objetos en OOP

- **Creación y destrucción de objetos**: Los objetos se crean usando constructores y, en muchos lenguajes, se destruyen automáticamente mediante la recolección de basura.
- **Llamada a métodos**: Los métodos de los objetos se llaman utilizando el operador `.`.
- **Visibilidad de las variables de estado**: Los atributos pueden ser públicos, protegidos o privados, dependiendo del nivel de acceso permitido.
- **Referencias a objetos**: Las variables que contienen objetos en realidad contienen referencias a ellos, lo que permite compartir un mismo objeto en diferentes partes del programa.
- **Persistencia de objetos**: Los objetos pueden hacerse persistentes mediante serialización y almacenamiento en archivos o bases de datos.
- **Optimización de memoria y recolección de basura**: La recolección de basura es un mecanismo automático para gestionar la memoria, liberando objetos que ya no están en uso.

¡Claro! Vamos a profundizar en los conceptos relacionados con **herencia** en OOP, abordando cada tema solicitado.

## Herencia

La **herencia** es un principio fundamental de la Programación Orientada a Objetos (OOP), que permite que una clase (llamada subclase o clase derivada) herede propiedades y comportamientos (atributos y métodos) de otra clase (llamada superclase o clase base). La herencia facilita la reutilización del código y el modelado jerárquico.

### Concepto de herencia. Superclases y subclases

- **Superclase (Clase base o Padre)**: Es la clase de la cual otras clases heredan. Contiene atributos y métodos que pueden ser compartidos por las subclases.
- **Subclase (Clase derivada o Hija)**: Es la clase que hereda de una superclase. Puede utilizar los atributos y métodos de la superclase, y también puede tener sus propios métodos y atributos adicionales. Además, puede sobrescribir métodos heredados para proporcionar una funcionalidad específica.

Ejemplo:

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Subclase que hereda de 'Animal'
class Dog extends Animal {
  constructor(name: string) {
    super(name); // Llamada al constructor de la superclase
  }

  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex');
myDog.makeSound(); // Rex barks.
```

En este ejemplo:

- `Animal` es la **superclase**.
- `Dog` es la **subclase** que hereda de `Animal`.
- El método `makeSound` es sobrescrito en `Dog` para proporcionar un comportamiento específico para los perros.

### Herencia múltiple

La **herencia múltiple** ocurre cuando una subclase hereda de más de una superclase. Sin embargo, muchos lenguajes de programación modernos (como Java, TypeScript y C#) **no permiten herencia múltiple directa**, ya que puede conducir a problemas de ambigüedad (por ejemplo, el **problema del diamante**).

En lugar de herencia múltiple directa, estos lenguajes suelen usar **interfaces** o **mixins** para lograr un comportamiento similar.

Ejemplo de herencia con interfaces (en TypeScript):

```typescript
interface Swimmer {
  swim(): void;
}

interface Runner {
  run(): void;
}

class Athlete implements Swimmer, Runner {
  swim(): void {
    console.log('The athlete swims.');
  }

  run(): void {
    console.log('The athlete runs.');
  }
}

const athlete = new Athlete();
athlete.swim(); // The athlete swims.
athlete.run(); // The athlete runs.
```

En este ejemplo:

- `Athlete` implementa dos interfaces (`Swimmer` y `Runner`) para proporcionar el comportamiento de ambos sin la necesidad de herencia múltiple.

### Clases abstractas

Una **clase abstracta** es una clase que no puede instanciarse directamente, y está destinada a ser una base para otras clases. Las clases abstractas pueden contener tanto métodos concretos (con implementación) como métodos abstractos (sin implementación), los cuales deben ser implementados por las subclases.

Ejemplo:

```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Método abstracto que debe implementarse en las subclases
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex');
myDog.makeSound(); // Rex barks.
// const animal = new Animal("Generic Animal"); // Error: no se puede instanciar una clase abstracta.
```

En este ejemplo, `Animal` es una **clase abstracta** con un método abstracto `makeSound`, que debe ser implementado por las subclases como `Dog`.

### Tipos de herencia

Existen diferentes tipos de herencia según la relación jerárquica entre las clases:

1. **Herencia simple**: Una subclase hereda de una única superclase.

   - Ejemplo: `Dog` hereda de `Animal`.

2. **Herencia múltiple**: Una subclase hereda de múltiples superclases (no permitida en muchos lenguajes modernos).

   - Alternativa: Usar **interfaces** o **mixins**.

3. **Herencia jerárquica**: Una única superclase tiene múltiples subclases.

   - Ejemplo: `Dog`, `Cat`, y `Bird` heredan de `Animal`.

4. **Herencia multinivel**: Una subclase hereda de otra subclase.

   - Ejemplo:

   ```typescript
   class Animal {
     makeSound(): void {
       console.log('Animal makes a sound.');
     }
   }

   class Dog extends Animal {
     makeSound(): void {
       console.log('Dog barks.');
     }
   }

   class Puppy extends Dog {
     makeSound(): void {
       console.log('Puppy yelps.');
     }
   }

   const myPuppy = new Puppy();
   myPuppy.makeSound(); // Puppy yelps.
   ```

5. **Herencia híbrida**: Es una combinación de dos o más tipos de herencia. Este tipo de herencia no se suele utilizar en lenguajes que no soportan herencia múltiple directa.

### Polimorfismo y enlace dinámico (dynamic binding)

#### Polimorfismo

El **polimorfismo** es la capacidad de un objeto de tomar diferentes formas. En OOP, el polimorfismo se refiere a la capacidad de usar una interfaz común para acceder a objetos de diferentes clases. Los dos tipos principales de polimorfismo son:

- **Polimorfismo de compilación (sobrecarga de métodos)**: Varios métodos con el mismo nombre, pero diferentes tipos o números de parámetros.
- **Polimorfismo de ejecución (sobrescritura de métodos)**: Un método en una subclase anula o sobrescribe el método de la superclase.

#### Enlace dinámico (dynamic binding)

El **enlace dinámico** es la capacidad de enlazar un método con una llamada específica en tiempo de ejecución, en lugar de en tiempo de compilación. Esto permite que el método sobrescrito de una subclase se llame correctamente, incluso cuando el tipo de la variable es de la superclase.

Ejemplo:

```typescript
class Animal {
  makeSound(): void {
    console.log('Animal makes a sound.');
  }
}

class Dog extends Animal {
  override makeSound(): void {
    console.log('Dog barks.');
  }
}

class Cat extends Animal {
  override makeSound(): void {
    console.log('Cat meows.');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Dog barks (enlace dinámico)

animal = new Cat();
animal.makeSound(); // Cat meows (enlace dinámico)
```

Aquí, el tipo de la variable `animal` es `Animal`, pero gracias al enlace dinámico, se llama al método correcto (`makeSound`) según la instancia a la que hace referencia (`Dog` o `Cat`).

### Directrices para el uso correcto de la herencia

La herencia debe usarse con cuidado para evitar diseños incorrectos o innecesariamente complicados. Algunas directrices importantes son:

1. **Evitar la herencia para reutilización de código genérico**: Si solo necesitas reutilizar código, considera utilizar **composición** o **delegación** en lugar de herencia.

2. **Diseño basado en relaciones "es-un"**: Utiliza herencia solo cuando exista una relación natural de "es-un" entre las clases. Ejemplo: Un `Dog` es un `Animal`.

3. **Evitar herencias profundas**: Las jerarquías de herencia muy profundas pueden volverse difíciles de mantener. Prefiere herencias simples o jerárquicas limitadas.

4. **Usar clases abstractas para comportamiento común**: Las clases abstractas pueden ser útiles para definir comportamientos comunes que deben ser implementados por las subclases.

5. **Prefiere la composición sobre la herencia**: Este es un principio de diseño común (conocido como "favor composition over inheritance"). La composición permite crear relaciones "tiene-un" en lugar de "es-un" y es más flexible para cambios en el diseño.

Ejemplo de Composición en lugar de Herencia:

```typescript
class Engine {
  start(): void {
    console.log('Engine starts.');
  }
}

class Car {
  engine: Engine;

  constructor() {
    this.engine = new Engine(); // Composición: Car "tiene un" Engine
  }

  startCar(): void {
    this.engine.start();
  }
}

const myCar = new Car();
myCar.startCar(); // Engine starts.
```

Aquí, en lugar de heredar `Engine` en `Car`, hemos utilizado **composición**. Esto hace que `Car` sea más flexible y modular.

### Resumen: Herencia en OOP

- **Herencia**: Permite que una clase herede atributos y métodos de otra clase

, promoviendo la reutilización del código.

- **Herencia múltiple**: No es soportada directamente en muchos lenguajes, pero puede lograrse con interfaces o mixins.
- **Clases abstractas**: Son clases que no pueden instanciarse y están diseñadas para ser heredadas.
- **Tipos de herencia**: Incluyen herencia simple, múltiple (con limitaciones), jerárquica, multinivel, y híbrida.
- **Polimorfismo**: Permite que un mismo método tenga diferentes comportamientos en diferentes clases.
- **Enlace dinámico**: Vincula métodos en tiempo de ejecución en función del tipo real del objeto.
- **Directrices de uso**: Incluyen evitar la herencia innecesaria, favorecer la composición y garantizar que exista una relación "es-un" al usar herencia.

## Modularidad

La **modularidad** es un principio de diseño que promueve la división de un sistema de software en partes más pequeñas y manejables llamadas **módulos**. Cada módulo tiene una responsabilidad bien definida y se puede desarrollar, probar y mantener de forma independiente. Este enfoque facilita la organización del código, la reutilización de componentes y la reducción de la complejidad.

### Librerías de Clases

Las **librerías de clases** son colecciones de clases y funciones relacionadas que se agrupan en un paquete o módulo para facilitar su reutilización en múltiples proyectos o contextos. Una librería de clases proporciona abstracciones comunes para resolver problemas específicos, lo que reduce la necesidad de escribir código desde cero.

Por ejemplo, en lenguajes como Java o TypeScript, hay muchas librerías estándar (y de terceros) que agrupan funcionalidades comunes como manipulación de cadenas, operaciones matemáticas, manejo de colecciones, entre otros.

Ejemplo de una librería de clases en TypeScript

```typescript
// Una simple librería de clases para operaciones matemáticas
export class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

// Otra clase dentro de la misma librería
export class GeometryUtils {
  static calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }
}
```

En este ejemplo, `MathUtils` y `GeometryUtils` son parte de una posible librería que agrupa funcionalidades matemáticas.

### Ámbito de Utilización de Nombres (Namespace)

Cuando los programas crecen y tienen múltiples clases y funciones, es importante controlar el **ámbito de utilización de nombres** para evitar conflictos. Dos elementos en un programa no deberían tener el mismo nombre si están en diferentes contextos, y aquí es donde entran en juego los **namespaces** o **módulos**.

#### Namespace en TypeScript

```typescript
namespace MathOperations {
  export class Addition {
    static perform(a: number, b: number): number {
      return a + b;
    }
  }

  export class Subtraction {
    static perform(a: number, b: number): number {
      return a - b;
    }
  }
}

// Utilizando las clases del namespace
let result = MathOperations.Addition.perform(10, 5);
console.log(result); // 15
```

En este ejemplo, las clases `Addition` y `Subtraction` están contenidas en un **namespace** llamado `MathOperations`. Esto ayuda a agrupar el código relacionado y evita conflictos de nombres si existen otras clases `Addition` o `Subtraction` en otras partes del programa.

### Ventajas de la Utilización de Módulos o Paquetes

Los **módulos** o **paquetes** son unidades de código reutilizables y autocontenidas que pueden agrupar clases, funciones, y otras entidades relacionadas. Estos módulos se pueden importar y utilizar en otros módulos o proyectos, promoviendo la organización y reutilización del código.

#### Ventajas del Uso de Módulos o Paquetes:

1. **Reutilización de código**: Los módulos permiten encapsular y reutilizar funcionalidades en diferentes partes de un proyecto o incluso en proyectos completamente distintos. Esto evita la duplicación de código y promueve la eficiencia.

2. **Organización**: Los módulos agrupan funcionalidades relacionadas, lo que facilita la navegación y el mantenimiento del código. Es más fácil entender y gestionar un sistema cuando el código está dividido en partes lógicas.

3. **Encapsulación**: Los módulos permiten ocultar detalles internos del funcionamiento de las clases o funciones. Solo las partes explícitamente exportadas estarán disponibles para otros módulos, mientras que los detalles de implementación pueden permanecer privados.

4. **mantenibilidad**: Como los módulos están separados y bien definidos, es más sencillo realizar cambios en una parte del sistema sin afectar otras. Esto es especialmente útil en grandes proyectos donde diferentes equipos pueden trabajar en distintos módulos.

5. **Control de dependencias**: Los módulos permiten gestionar y declarar explícitamente las dependencias que tienen unos módulos con otros. Esto asegura que todas las partes del sistema estén correctamente conectadas y funcionando.

6. **Evitación de conflictos de nombres**: Al agrupar el código en módulos y namespaces, se evita la colisión de nombres entre clases, funciones o variables. Esto es crucial en grandes proyectos donde pueden existir múltiples desarrolladores o bibliotecas externas.

7. **Carga eficiente**: En sistemas como **JavaScript** o **TypeScript**, los módulos permiten la **carga modular** del código. Esto significa que solo se cargan y ejecutan las partes del código que son necesarias en un momento determinado, mejorando el rendimiento de las aplicaciones.

Ejemplo de Módulos en TypeScript:

```typescript
// mathOperations.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
```

```typescript
// geometry.ts
import { add, subtract } from './mathOperations';

export function calculateRectanglePerimeter(
  length: number,
  width: number
): number {
  return 2 * add(length, width);
}
```

En este ejemplo:

- **`mathOperations.ts`** contiene dos funciones que se exportan y que pueden ser utilizadas por otros módulos.
- **`geometry.ts`** importa las funciones de `mathOperations.ts` para calcular el perímetro de un rectángulo.

### Conclusión: Modularidad en OOP

La **modularidad** en la programación orientada a objetos es esencial para mantener el código limpio, organizado, reutilizable y fácil de mantener. Al dividir el código en **módulos** o **librerías de clases**, se promueve el encapsulamiento, se evitan conflictos de nombres y se facilita el control de dependencias. Los beneficios incluyen una mejor organización del código, mayor capacidad de reutilización, y la posibilidad de escalar proyectos de manera más sencilla y eficiente.

## Genericidad y Sobrecarga

### Concepto de Genericidad

La **genericidad** (o **generics**) es un mecanismo que permite definir clases, interfaces, y funciones de una manera que sea independiente de los tipos de datos concretos. En lugar de trabajar con tipos específicos, se define un "tipo genérico" que puede ser especificado cuando se instancie o utilice una clase, interfaz o función. Esto permite escribir código más reutilizable y robusto.

En **TypeScript**, por ejemplo, los **genéricos** permiten que las clases, funciones o interfaces trabajen con tipos que se especifican en el momento de su uso, en lugar de estar definidos previamente.

Ejemplo de Genericidad en una Función (TypeScript)

```typescript
// Función genérica que funciona con cualquier tipo T
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42); // T es inferido como number
let str = identity<string>('Hello'); // T es inferido como string

console.log(num); // 42
console.log(str); // Hello
```

- `T` es un **tipo genérico** que será reemplazado con un tipo concreto cuando la función se invoque. Esto permite reutilizar la función `identity` para cualquier tipo de dato.

Ejemplo de Genericidad en Clases (TypeScript)\*

```typescript
// Clase genérica que almacena valores de cualquier tipo
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('Hello');

console.log(numberBox.getContent()); // 123
console.log(stringBox.getContent()); // Hello
```

En este caso, `Box` es una **clase genérica** que puede almacenar cualquier tipo de valor, ya sea `number`, `string`, u otro tipo.

### Concepto de Sobrecarga

La **sobrecarga** es un mecanismo en OOP mediante el cual se pueden definir múltiples versiones de un método o función con el mismo nombre, pero con diferentes parámetros (diferente número o tipos de argumentos). Esto permite utilizar el mismo nombre para realizar operaciones similares, pero con diferentes entradas o comportamientos.

Existen dos tipos principales de sobrecarga:

#### Sobrecarga de funciones/métodos

La **sobrecarga de funciones** ocurre cuando definimos múltiples versiones de una función o método con el mismo nombre, pero con firmas diferentes (diferente número o tipos de parámetros). En TypeScript, esto se puede hacer definiendo las firmas de las funciones antes de implementar una única función que maneje todas las versiones.

Ejemplo de Sobrecarga de Métodos en TypeScript

```typescript
class Printer {
  print(value: string): void;
  print(value: number): void;
  print(value: boolean): void;

  // Implementación de la función sobrecargada
  print(value: any): void {
    console.log(`Printing: ${value}`);
  }
}

const printer = new Printer();
printer.print('Hello'); // Printing: Hello
printer.print(42); // Printing: 42
printer.print(true); // Printing: true
```

En este ejemplo, el método `print` está **sobrecargado** para aceptar diferentes tipos de parámetros (`string`, `number`, `boolean`), pero la implementación final utiliza un tipo genérico `any` para manejar todos los casos.

#### Sobrecarga de operadores

La **sobrecarga de operadores** es un concepto común en lenguajes como C++ (pero no en TypeScript), que permite definir comportamientos personalizados para operadores estándar (`+`, `-`, `*`, etc.) en función de los tipos de objetos sobre los que operan.

Ejemplo en C++

```cpp
class Complex {
public:
    double real, imag;

    Complex(double r, double i) : real(r), imag(i) {}

    // Sobrecarga del operador +
    Complex operator + (const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }
};

int main() {
    Complex c1(1.0, 2.0), c2(2.0, 3.0);
    Complex result = c1 + c2;  // Sobrecarga del operador +
    // Resultado será (3.0, 5.0)
}
```

En este ejemplo, se sobrecarga el operador `+` para que funcione con objetos de la clase `Complex`.

### Comparación entre Genericidad y Sobrecarga

#### Diferencias

1. **Propósito**:

   - **Genericidad**: Está diseñada para crear componentes (clases, funciones, interfaces) que puedan funcionar con diferentes tipos sin depender de un tipo específico. Su objetivo principal es la **reutilización de código**.
   - **Sobrecarga**: Permite definir varios métodos o funciones con el mismo nombre pero con diferentes firmas (parámetros o tipos de retorno). Su objetivo es la **flexibilidad en el comportamiento** dependiendo de los argumentos que se pasen.

2. **Aplicación**:

   - **Genericidad**: Se usa para crear implementaciones que son independientes del tipo de datos y pueden trabajar con diferentes tipos al mismo tiempo.
   - **Sobrecarga**: Se usa cuando queremos definir múltiples comportamientos para una misma operación, dependiendo del tipo o cantidad de argumentos.

3. **Forma**:
   - **Genericidad**: Utiliza **parámetros de tipo genérico** (`T`, `K`, `V`, etc.) que se reemplazan por tipos concretos al momento de instanciar la clase o invocar la función.
   - **Sobrecarga**: Utiliza varias definiciones de métodos con el mismo nombre, pero con diferentes firmas de parámetros.

Ejemplo comparativo

- **Genericidad**:

```typescript
function add<T>(a: T, b: T): T {
  // Esta función puede sumar cualquier tipo que soporte la operación + (string, number, etc.)
  return (a as any) + (b as any);
}

console.log(add<number>(1, 2)); // 3
console.log(add<string>('a', 'b')); // ab
```

- **Sobrecarga**:

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3 (números)
console.log(add('a', 'b')); // ab (cadenas)
```

En el ejemplo de **genericidad**, la función `add` utiliza un tipo genérico `T`, y la operación `+` funciona tanto para números como para cadenas. En el ejemplo de **sobrecarga**, la función `add` tiene múltiples definiciones dependiendo del tipo de los parámetros (`number` o `string`), pero solo una implementación final.

#### Similitudes

1. **Reutilización de código**: Ambos mecanismos (genericidad y sobrecarga) permiten que los desarrolladores reutilicen código para manejar diferentes tipos o casos.
2. **Flexibilidad**: Tanto los **genéricos** como la **sobrecarga** permiten mayor flexibilidad al escribir código, adaptándose a diferentes escenarios sin duplicar la lógica.

### Conclusión: Genericidad vs. Sobrecarga

- La **genericidad** se utiliza para escribir código que puede funcionar con múltiples tipos sin saber cuáles serán esos tipos en tiempo de compilación. Proporciona una forma flexible y reutilizable de definir clases, funciones, y métodos que pueden trabajar con cualquier tipo de dato.
- La **sobrecarga** permite definir múltiples versiones de una función o método con el mismo nombre, pero con diferentes parámetros, lo que proporciona flexibilidad para manejar diferentes tipos de entradas o diferentes comportamientos de una misma operación.

Aunque ambos conceptos proporcionan flexibilidad y reutilización de código, **la genericidad es más adecuada para manejar casos con múltiples tipos genéricos**, mientras que **la sobrecarga se utiliza cuando se necesitan múltiples implementaciones para una operación específica** según los parámetros.

## Lenguaje unificado de modelado (UML)

### ¿Qué es UML?

El **Lenguaje Unificado de Modelado (UML)** es un estándar de modelado gráfico que se utiliza para especificar, visualizar, construir y documentar los componentes de un sistema de software. Es un lenguaje de diseño que permite a los desarrolladores y arquitectos representar de manera visual la estructura, el comportamiento y la interacción de los diferentes elementos de un sistema.

**UML** fue desarrollado a mediados de la década de 1990 por **Grady Booch**, **Ivar Jacobson** y **James Rumbaugh** con el objetivo de unificar los diferentes métodos de modelado existentes en ese momento. Desde entonces, ha evolucionado hasta convertirse en una herramienta estándar de diseño de sistemas.

### Diagramas en UML

UML proporciona un conjunto de diagramas que se utilizan para representar diferentes aspectos de un sistema. Estos diagramas se pueden dividir en dos categorías principales: **diagramas estructurales** y **diagramas de comportamiento**.

#### Diagramas Estructurales

Los diagramas estructurales describen la organización estática de un sistema. Ayudan a modelar la estructura interna de un sistema, es decir, cómo se relacionan los componentes entre sí.

1. **Diagrama de Clases**:

   - Representa las clases del sistema, sus atributos, métodos y las relaciones entre ellas (herencia, asociación, composición, agregación, etc.).
   - Es uno de los diagramas más importantes en OOP, ya que modela la estructura estática del sistema.

   **Ejemplo básico de diagrama de clases**

   ```sh
   +-----------------+       +------------------+
   |      Animal      |       |     Persona      |
   +-----------------+       +------------------+
   | - nombre: string |<>---->| - edad: number   |
   | - especie: string|       | - nombre: string |
   +-----------------+       +------------------+
   | + comer()        |       | + hablar()       |
   +-----------------+       +------------------+
   ```

2. **Diagrama de Objetos**:

   - Representa instancias concretas de clases en un momento específico, mostrando objetos y sus relaciones.
   - Es una instancia del diagrama de clases en un contexto específico.

3. **Diagrama de Componentes**:

   - Describe la organización de los componentes físicos del sistema (módulos, librerías, servicios) y sus interacciones.
   - Es útil para mostrar cómo se distribuyen los componentes a lo largo de la arquitectura del software.

4. **Diagrama de Paquetes**:
   - Agrupa elementos relacionados dentro de paquetes (módulos) y describe las dependencias entre ellos.
   - Los paquetes ayudan a organizar y gestionar el sistema en términos de sus diferentes módulos o sub-sistemas.

#### Diagramas de Comportamiento

Los diagramas de comportamiento representan cómo se comporta el sistema en el tiempo. Muestran la dinámica del sistema, como la interacción entre los componentes o el flujo de trabajo.

1. **Diagrama de Casos de Uso**:

   - Muestra la interacción entre los **actores** externos (usuarios u otros sistemas) y el sistema en sí, en términos de **casos de uso**.
   - Ayuda a visualizar qué funcionalidades ofrece el sistema y quién las utiliza.

   **Ejemplo de diagrama de casos de uso**

   ```cmd
   +-------------+        +----------------------+
   |   Usuario   |        |  Sistema de Reservas  |
   +-------------+        +----------------------+
       |                               |
       |----> (Hacer Reserva)          |
       |                               |
       |----> (Consultar Reserva)      |
   ```

2. **Diagrama de Secuencia**:

   - Muestra cómo interactúan diferentes objetos entre sí a lo largo del tiempo para llevar a cabo una funcionalidad específica.
   - Se utiliza para modelar el flujo de mensajes entre objetos o clases durante la ejecución de un proceso.

   **Ejemplo de diagrama de secuencia**:

   ```cmd
   Usuario --> Sistema : Hacer Reserva()
   Sistema --> BaseDatos : Consultar Disponibilidad()
   BaseDatos --> Sistema : Retornar Disponibilidad()
   Sistema --> Usuario : Confirmar Reserva()
   ```

3. **Diagrama de Actividades**:

   - Representa el flujo de actividades o tareas en el sistema, similar a un diagrama de flujo. Muestra el proceso de negocio o el flujo de trabajo.
   - Es útil para visualizar los procesos dentro de un sistema o aplicación.

4. **Diagrama de Estados**:
   - Muestra los estados por los que pasa un objeto a lo largo de su ciclo de vida, así como los eventos que provocan las transiciones entre esos estados.
   - Es útil para modelar el comportamiento de objetos con un ciclo de vida complejo.

### Beneficios de Utilizar UML

El uso de UML proporciona varios beneficios en el desarrollo de software:

1. **Comunicación Efectiva**:

   - UML es un lenguaje visual y estandarizado que facilita la comunicación entre los diferentes miembros del equipo de desarrollo, como desarrolladores, arquitectos, y clientes.

2. **Especificación Clara**:

   - Los diagramas UML ayudan a especificar y documentar claramente los requisitos del sistema y cómo se deben implementar.

3. **Reducción de la Complejidad**:

   - Al descomponer un sistema en diagramas que representan diferentes aspectos del mismo, UML ayuda a gestionar la complejidad del software, haciéndolo más fácil de entender.

4. **Diseño y Arquitectura**:

   - UML permite diseñar y visualizar la arquitectura de un sistema antes de comenzar con la implementación. Esto permite detectar errores y problemas de diseño desde las primeras etapas del desarrollo.

5. **Facilita el Mantenimiento**:
   - Una vez que el sistema está en producción, los diagramas UML sirven como documentación que facilita el mantenimiento y la evolución del sistema.

### 4. Herramientas UML

Existen muchas herramientas que permiten crear diagramas UML de manera visual y colaborativa. Algunas de las más populares son:

- [Enterprise Architect](https://sparxsystems.com/): Una herramienta de modelado UML ampliamente utilizada que permite la creación de múltiples tipos de diagramas.
- [StarUML](https://staruml.io/): Una herramienta de modelado UML de código abierto, ligera y con soporte para diversos tipos de diagramas.
- [Lucidchart](https://www.lucidchart.com/) y [Draw.io](https://www.drawio.com/): Herramientas en línea que permiten crear diagramas UML de manera colaborativa y fácil.
- [Visual Paradigm](https://www.visual-paradigm.com/): Ofrece herramientas avanzadas para el diseño de UML y otros diagramas de arquitectura.

### Mermaid

[mermaid](https://mermaid.ai/web/)

Ejemplo de diagrama de clases UML

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal: -string name
    Animal : +number age
    Animal : +string gender
    Animal: +boolean isMammal()
    Animal: +void mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
      +fly()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
```

### Conclusión: UML en el Desarrollo de Software

El **Lenguaje Unificado de Modelado (UML)** es una herramienta poderosa y flexible para el diseño y la especificación de sistemas de software. través de una variedad de diagramas estructurales y de comportamiento, UML permite representar tanto la arquitectura como la dinámica de un sistema de manera clara y comprensible. Esto facilita la comunicación entre los equipos, ayuda a mantener la documentación actualizada y asegura un diseño sólido antes de comenzar con la implementación del código.

Con UML, es posible modelar cualquier sistema complejo y asegurar que todos los involucrados en el proceso de desarrollo tengan una comprensión compartida de cómo debería funcionar el sistema final.

## Temario del certificado

[2.] La orientación a objetos

- Principios de la orientación a objetos. Comparación con la programación
  estructurada.
  - Ocultación de información (information hiding).
  - El tipo abstracto de datos (ADT). Encapsulado de datos.
  - Paso de mensajes.
- Clases de objetos.
  - Atributos, variables de estado y variables de clase.
  - Métodos. Requisitos e invariantes.
  - Gestión de excepciones.
  - Agregación de clases.
- Objetos.
  - Creación y destrucción de objetos.
  - Llamada a métodos de un objeto.
  - Visibilidad y uso de las variables de estado.
  - Referencias a objetos.
  - Persistencia de objetos.
  - Optimización de memoria y recolección de basura (garbage collection).
- Herencia.
  - Concepto de herencia. Superclases y subclases.
  - Herencia múltiple.
  - Clases abstractas.
  - Tipos de herencia.
  - Polimorfismo y enlace dinámico (dynamic binding).
  - Directrices para el uso correcto de la herencia.
- Modularidad.
  - Librerías de clases. Ámbito de utilización de nombres.
  - Ventajas de la utilización de módulos o paquetes.
- Genericidad y sobrecarga.
  - Concepto de genericidad.
  - Concepto de Sobrecarga. Tipos de sobrecarga.
  - Comparación entre genericidad y sobrecarga.
- Desarrollo orientado a objetos.
  - Lenguajes de desarrollo orientado a objetos de uso común.
  - Herramientas de desarrollo.
- Lenguajes de modelización en el desarrollo orientado a objetos.
  - Uso del lenguaje unificado de modelado (UML) en el desarrollo orientado
    a objetos.
  - Diagramas para la modelización de sistemas orientados a objetos.

[4.] Lenguajes de programación de aplicaciones web en el lado servidor

- Características de los lenguajes de programación web en servidor.
- Tipos y características de los lenguajes de uso común.
  - Interpretados orientados a servidor.
  - Lenguajes de cliente interpretados en servidor.
  - Lenguajes compilados.
- Criterios en la elección de un lenguaje de programación web en servidor.
  Ventajas e inconvenientes.
- Características generales.
  - Tipos de datos.
  - Clases.
  - Operadores básicos. Manipulación de cadenas de caracteres.
  - Estructuras de control. Bucles y condicionales.
  - Módulos o paquetes.
  - Herencia.
  - Gestión de bibliotecas (libraries).
- Gestión de la configuración.
  - Configuración de descriptores.
  - Configuración de ficheros.
- Gestión de la seguridad.
  - Conceptos de identificación, autenticación y autorización.
  - Técnicas para la gestión de sesiones.
- Gestión de errores.
  - Técnicas de recuperación de errores.
  - Programación de excepciones.
- Transacciones y persistencia.
  - Acceso a bases de datos. Conectores.
  - Estándares para el acceso a bases de datos.
  - Gestión de la configuración de acceso a bases de datos.
  - Acceso a directorios y otras fuentes de datos.
  - Programación de transacciones.
- Componentes en servidor. Ventajas e inconvenientes en el uso de contenedores
  de componentes.
- Modelos de desarrollo. El modelo vista controlador.
  - Modelo: programación de acceso a datos.
  - Vista: Desarrollo de aplicaciones en cliente. Eventos e interfaz de usuario.
  - Programación del controlador.
- Documentación del software. Inclusión en código fuente. Generadores de
  documentación.
