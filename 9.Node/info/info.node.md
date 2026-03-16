---
title: Course Node.js
description: 'Información sobre Node.js para el certificado de profesionalidad de Desarrollo de Aplicaciones con Tecnologías Web'
dates: 01/2025
---

- [Fundamentos de Node.JS](#fundamentos-de-nodejs)
  - [Entorno de ejecución](#entorno-de-ejecución)
  - [Características: Node en la práctica](#características-node-en-la-práctica)
  - [Historia](#historia)
    - [Creación de Node.js](#creación-de-nodejs)
    - [Evolución de NodeJS](#evolución-de-nodejs)
  - [Node.js: utilización](#nodejs-utilización)
- [Preparación del Entorno de Desarrollo](#preparación-del-entorno-de-desarrollo)
  - [Creación de un proyecto con Node.js, TS, ESLint y Prettier \& Vitest (como herramienta de testing)](#creación-de-un-proyecto-con-nodejs-ts-eslint-y-prettier--vitest-como-herramienta-de-testing)
    - [Primera demo en Node.js](#primera-demo-en-nodejs)
    - [Código bloqueante](#código-bloqueante)
- [Asincronía en Node: el Event Loop](#asincronía-en-node-el-event-loop)
  - [Multiplicidad de tareas](#multiplicidad-de-tareas)
  - [Asincronía en JS, tiempo y ejecución en segundo plano](#asincronía-en-js-tiempo-y-ejecución-en-segundo-plano)
  - [Event Loop](#event-loop)
- [Eventos](#eventos)
  - [El módulo events y EventEmitter](#el-módulo-events-y-eventemitter)
  - [Métodos principales para trabajar con eventos](#métodos-principales-para-trabajar-con-eventos)
    - [on(…​) / addListener(…​)](#on--addlistener)
    - [emit(…​)](#emit)
    - [once(…​)](#once)
    - [removeListener(…​)](#removelistener)
  - [Definición de tipos personalizados para eventos](#definición-de-tipos-personalizados-para-eventos)
  - [Optimización de eventos en Node.js](#optimización-de-eventos-en-nodejs)
    - [Número máximo de manejadores (listeners)](#número-máximo-de-manejadores-listeners)
- [Módulos nativos de Node.JS](#módulos-nativos-de-nodejs)
  - [Acceso a los módulos. Importación y exportación](#acceso-a-los-módulos-importación-y-exportación)
  - [Módulos del core](#módulos-del-core)
  - [Entrono de ejecución](#entrono-de-ejecución)
  - [La variable global](#la-variable-global)
  - [Módulo Process](#módulo-process)
    - [Eventos y procesos](#eventos-y-procesos)
    - [Lanzar un proceso](#lanzar-un-proceso)
  - [Variables de entorno](#variables-de-entorno)
    - [Fichero .env](#fichero-env)
  - [Módulo OS](#módulo-os)
- [Node y la línea de comandos](#node-y-la-línea-de-comandos)
  - [Node REPL](#node-repl)
  - [stdin y stdout](#stdin-y-stdout)
    - [Output: stdout y stderr](#output-stdout-y-stderr)
    - [Nota sobre los saltos de línea](#nota-sobre-los-saltos-de-línea)
    - [Input: stdin](#input-stdin)
  - [Creación de un CLI](#creación-de-un-cli)
    - [Creación de un comando ejecutable](#creación-de-un-comando-ejecutable)
    - [Procesamiento de argumentos](#procesamiento-de-argumentos)
    - [Procesamiento de argumentos con minimist](#procesamiento-de-argumentos-con-minimist)
    - [Procesamiento de argumentos con yargs](#procesamiento-de-argumentos-con-yargs)
- [File System](#file-system)
  - [Estructura de carpetas: \_\_dirname y el módulo path](#estructura-de-carpetas-__dirname-y-el-módulo-path)
    - [Otras funciones del módulo path](#otras-funciones-del-módulo-path)
  - [Versiones de las funciones del módulo fs](#versiones-de-las-funciones-del-módulo-fs)
  - [Lectura de ficheros](#lectura-de-ficheros)
  - [File System basado en Promesas](#file-system-basado-en-promesas)
  - [Escritura de ficheros](#escritura-de-ficheros)
  - [Otras operaciones de ficheros](#otras-operaciones-de-ficheros)
- [CRUD sobre datos JSON](#crud-sobre-datos-json)
  - [Modelo de datos](#modelo-de-datos)
  - [Operaciones](#operaciones)
  - [Abstracción, Uso de Genéricos](#abstracción-uso-de-genéricos)
  - [Abstracción, Uso de Genéricos y Clases](#abstracción-uso-de-genéricos-y-clases)
    - [Servicio de Datos](#servicio-de-datos)
    - [Servicio de repositorio de notas](#servicio-de-repositorio-de-notas)
  - [Completando el CLI con CommanderJS](#completando-el-cli-con-commanderjs)
- [CLI Wizard: Inquirer](#cli-wizard-inquirer)
  - [Preguntas](#preguntas)
  - [Validación](#validación)
  - [Preguntas condicionales](#preguntas-condicionales)
  - [Preguntas en cascada](#preguntas-en-cascada)
  - [Confirmación y repetición de las preguntas](#confirmación-y-repetición-de-las-preguntas)
- [Testing](#testing)
- [Streams](#streams)
  - [Streams de lectura (Readable Streams)](#streams-de-lectura-readable-streams)
  - [Streams de escritura (Writable Streams)](#streams-de-escritura-writable-streams)
  - [Streams duplex](#streams-duplex)
  - [Streams transformables o de transformación (Transform Streams)](#streams-transformables-o-de-transformación-transform-streams)
  - [Pipe entre streams](#pipe-entre-streams)
  - [Manejo de errores en streams](#manejo-de-errores-en-streams)
  - [Conclusión: Streams en Node.js](#conclusión-streams-en-nodejs)
- [Módulo http: Servidor WEB (HTTP)](#módulo-http-servidor-web-http)
  - [Gestión de las URLs](#gestión-de-las-urls)
  - [Introducción al protocolo HTTP](#introducción-al-protocolo-http)
    - [Requests y Responses en HTTP](#requests-y-responses-en-http)
      - [Request (solicitud)](#request-solicitud)
      - [Response (respuesta)](#response-respuesta)
    - [Métodos HTTP más utilizados](#métodos-http-más-utilizados)
    - [Códigos de estado HTTP](#códigos-de-estado-http)
  - [Creación de un servidor HTTP en Node.js. La función `createServer`](#creación-de-un-servidor-http-en-nodejs-la-función-createserver)
    - [Funcionamiento interno de un servidor HTTP en Node.js](#funcionamiento-interno-de-un-servidor-http-en-nodejs)
    - [Los objetos `req` y `res`](#los-objetos-req-y-res)
    - [Optimización y Gestión de Memoria](#optimización-y-gestión-de-memoria)
  - [Ajustes del entorno de trabajo](#ajustes-del-entorno-de-trabajo)
    - [Utilidades de ejecución: Nodemon](#utilidades-de-ejecución-nodemon)
    - [Debugging y Logging](#debugging-y-logging)
    - [Clientes HTTP para desarrollo y pruebas](#clientes-http-para-desarrollo-y-pruebas)
  - [Evolución del servidor HTTP](#evolución-del-servidor-http)
    - [Servidor HTTP básico: rutas y respuestas en HTML](#servidor-http-básico-rutas-y-respuestas-en-html)
    - [Métodos HTTP y manejo en Node.js](#métodos-http-y-manejo-en-nodejs)
- [Otros protocolos de comunicaciones](#otros-protocolos-de-comunicaciones)
- [Aplicación Realtime con Socket IO](#aplicación-realtime-con-socket-io)
  - [Instalación de Socket.IO](#instalación-de-socketio)
  - [Creación de un servidor con Socket.IO](#creación-de-un-servidor-con-socketio)
  - [Conexión de clientes](#conexión-de-clientes)
  - [Eventos y mensajes](#eventos-y-mensajes)
  - [Salas de chat](#salas-de-chat)
- [Workers (Hilos de ejecución)](#workers-hilos-de-ejecución)
- [Despliegue y publicación en npm](#despliegue-y-publicación-en-npm)
  - [Despliegue en Render](#despliegue-en-render)
  - [Cache](#cache)

## Fundamentos de Node.JS

Node es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.

El ecosistema de paquetes de Node, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

### Entorno de ejecución

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

- V8:
  - Motor de JavaScript de código abierto
  - Escrito en C++
  - Define la sintaxis de JavaScript
  - Como funciona:
    - Compila el código JavaScript a código máquina
    - Ejecuta el código máquina
- Node, más allá de V8:
  - Proporciona módulos y APIs para interactuar con el sistema operativo
    - Mecanismos para interactuar con el exterior
    - Librería estándar (consola, ficheros, red, etc.)
    - Utilidades (intérprete, depurador, paquetes, etc.)

### Características: Node en la práctica

- Plataforma de desarrollo de software creada en 2009
- JavaScript en el lado del servidor
- Basado en la máquina virtual de Chrome V8: escrito en C = muy rápido
- Multiplataforma (Windows, Macintosh, Linux, etc.)
- Aunque es una marca registrada de Joyent, es open source
- Asíncrono y orientado a eventos (no bloqueante)
- Ideal para aplicaciones que consumen datos en tiempo real y que se ejecutan a través de dispositivos distribuidos
- Lo usan muchas empresas (Walmart, PayPal, Yahoo, LinkedIn, eBay, Uber, etc.)

### Historia

- Origen del lenguaje JS
- 1995 - Netscape incorpora un JS desarrollado por Brendan Eich
  - Objetivo: validación de formularios en cliente (Respuesta a la lentitud de las conexiones)
- 1996 – Microsoft desarrolla lenguajes de Script similarares
  - VBScript
  - JScript, que incorpora a Internet Explorer
- 1997 – Aparece ECMAScript como estándar respaldado por la European Computer Manufacturers Association

- 1988 - OWA incorpora XMLHttp (AJAX), desarrollado por Alex Hopmann
- 1999 - ES3, primer estándar de ECMAScript utilizado mayoritariamente por los navegadores
- 2004 - GMail utiliza JS incorporando AJAX masivamente
- 2005 - John Resig crea JQuery
- 2006 - Aparece NodeJS, JS en el servidor, de mano de Ryan Dahl
- 2009 - Google Chrome incorpora V8, motor de JS de NodeJS
- 2010 - NPM, gestor de paquetes de NodeJS
- 2011 - ES5, nuevo estándar de ECMAScript
- 2012 - Windows 8 incorpora JS como lenguaje nativo
- 2014 (2015) - Nuevo estándar ES6 / ES2015 marca un punto de inflexión en el lenguaje

![Time line de los primeros años de JS, hasta 2014](./assetts/timeline-js.png)

#### Creación de Node.js

Tiene su origen en un proyecto de Ryan Dahl y sus colaboradores en la empresa Joyent, que fue presentado en una conferencia en la JSConf de 2009.
<https://youtu.be/ztspvPYybIY>
Objetivo: escribir aplicaciones muy eficientes en E/S con el lenguaje dinámico más rápido (v8) para soportar miles de conexiones simultáneas
Planteamiento: sin complicaciones innecesarias

- Concurrencia sin paralelismo
- Asincronía apoyándose en Eventos y Callbacks
- Lenguaje sencillo y muy extendido: JavaScript
- API muy pequeña y muy consistente

¿Por qúe JS?

> JavaScript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads. Its model of concurrency is completely based around events
> Ryan Dahl <https://youtu.be/ztspvPYybIY>

En la búsqueda de una comunicación asíncrona para optimizar las tareas ligadas a I/O (I/O bound tasks) se pensó en un sistema de socket servers (algo similar a nano or microservices) denominados NODOS, comunicándose entre si con baja latencia y alto rendimiento.

La necesidad de un **event loop** para organizar estos nodos llevo a sustituir Ruby, usado en la implementación inicial, por **JS V8**, que ya disponía del event loop.

#### Evolución de NodeJS

- La empresa [Joyent](https://www.joyent.com/) trata de aprovechar su propiedad de la marca registrada NodeJS y dirigir su desarrollo y su ritmo de actualización
- En 2014, parte de la comunidad responde con un fork denominado **IO.JS** desarrollado bajo un modelo open governance
  - Su desarrollo es muy activo con liberaciones semanales llegando pronto hasta la 3.x
  - Paralelamente, al cabo de dos años, Joyent lanza la versión 0.12.x que recupera la paridad con las características de IO.JS
- En septiembre 2015 se produce la **reconciliación** entre ambos grupos con una nueva versión de Node.JS, que al adoptar el versionado semántico, se numera como 4.0.0

### Node.js: utilización

- Creación rápida de servidores HTTP o TCP ….
- Aplicaciones Web con frameworks como Express (<http://expressjs.com/es/>) y plantillas como las de Jade/Pug <(http://jade-lang.com/>)
- Aplicaciones en tiempo real, como los chats
- Servicios Web e.g. Restify (<http://mcavage.me/node-restify/>)
- Conexión con bases de datos (MySQL, MongoDB, SQLite)
- Scripting y conversiones en local o en servidor
- Manejo de flujos binarios, e.g. para Web RTC (<http://lynckia.com/>) o para streaming de audio y video
- Herramientas de desarrollo, e.g. Grunt, Gulp, Yeoman
- Herramientas de testing, e.g. Mocha, Jasmine, Karma
- Herramientas de análisis, e.g. JSHint, JSLint, ESLint
- Herramientas de documentación, e.g. JSDoc, YUIDoc
- Dispositivos diversos: IoT, Raspberry Pi, Arduino, e.g. Johnny-Five (<http://johnny-five.com/>).

## Preparación del Entorno de Desarrollo

- Git <https://git-scm.com/> y una cuenta en un hosting de repositorios (GitHub) <https://github.com/>
- Editor de código: Visual Studio Code <https://code.visualstudio.com/>
- Terminal (Linea de commandos)
- Administrador de versiones de Node.js: NVM <https://github.com/coreybutler/nvm-windows>
- Node.js y el gestor de paquetes npm <https://nodejs.org/es/>

Instalación de Node.js y npm, despues de instalar NVM:

```bash
nvm install 23.6.0
nvm install latest
nvm list
nvm use 23
```

- Nodemon <https://nodemon.io/>: `npm install -g nodemon`
- Alternativa actual `node -w`

### Creación de un proyecto con Node.js, TS, ESLint y Prettier & Vitest (como herramienta de testing)

- Creación de un proyecto con Node.js: `npm init -y`
- Instalación de TypeScript <https://www.typescriptlang.org/>: `npm install -D typescript`
- Instalación de Prettier <https://prettier.io/>: `npm install -D prettier`
- Configuración de Prettier en package.json
- Instalación de ESLint <https://eslint.org/>: `npm init @eslint/config@latest`
- Cambios en eslint.config.js: `tseslint.configs`
- Configuración de TypeScript: `npx tsc --init`
- Ajustes de la configuración de TypeScript en `tsconfig.json`
- Instalación de Vitest <https://vitest.io/>: `npm install -D vitest`
- Configuración de Vitest en `vitest.config.js` y `tsconfig.json`
- Incorporación de scripts en `package.json`

#### Primera demo en Node.js

```typescript
console.log('Hello World');
```

#### Código bloqueante

La operaciones entrada/salida (I/O o E/S) bloqueantes impactan en el rendimiento debido a la alta latencia de ese tipo de operaciones

Latencia de operaciones I/O

| Medio    | Latencia (ciclos) |
| -------- | ----------------- |
| Cache L1 | 3                 |
| Cache L2 | 14                |
| RAM      | 250               |
| Disco    | 41.000.000        |
| Red      | 240.000.000       |

El modelo tradicional de programación emplea programación secuencial
Las operaciones I/O bloquean el flujo de ejecución del programa que las invoca impidiendo que la siguiente instrucción comience hasta que la anterior haya terminado.

```typescript
const wait = (secondsLimit: number) => {
  const SECOND_INSTRUCTIONS = 3_000_000_000 / 1.5; // 1.5Ghz
  console.log(SECOND_INSTRUCTIONS / 1_000_000_000, 'GHz');
  const limit = secondsLimit * SECOND_INSTRUCTIONS;
  let i = 0;
  while (i < limit) {
    i++;
  }
};

const seconds = 1;
const start = Date.now();
console.log('Inicio');
wait(seconds);
console.log('Por fin', (Date.now() - start) * 0.001, 'segundos después');
```

## Asincronía en Node: el Event Loop

Arquitectura del core refleja el objetivo principal del proyecto NodeJS: **Eficiencia en la E/S**, es decir, escribir aplicaciones muy eficientes con un modelo de operaciones E/S Sin bloqueo y orientado a eventos.

Ver JS Asíncrono.md

### Multiplicidad de tareas

- Paralelismo
- Concurrencia sin paralelismo
  - Medida del tiempo
- Concurrencia y código bloqueante

JS emplea concurrencia sin paralelismo, es decir, la capacidad de ejecutar múltiples tareas de forma concurrente, pero no simultánea. Esto se consigue mediante la programación asíncrona, que permite que una tarea se ejecute en segundo plano mientras el programa principal sigue su ejecución.

### Asincronía en JS, tiempo y ejecución en segundo plano

### Event Loop

Para implementar la asincronía, JS emplea el Event Loop, un bucle de eventos que se encarga de gestionar las tareas asíncronas y de mantener la ejecución del programa principal.

![Event Loop de Node](./assetts/event-loop.png)

Este modelo da muy buena respuesta mara gestionar un elevado numero de operaciones I/O de forma concurrente (I/O Bound Applications)
No es lo mas adecuado para operaciones CPU-intensive (CPU Bound Applications)

## Eventos

Los eventos están en la base del diseño de JS y de su uso emn la Web, hasta el punto de referirnos al código en JS como **programación orientada a eventos** (Event-Driven Programming). En esta línea, los eventos son fundamentales en la arquitectura de Node.js y se utilizan para programar las interacciones con el entorno, como la temporización, las operaciones de entrada y salida, y las solicitudes HTTP. El uso de eventos en Node.js permite trabajar de manera eficiente con operaciones asíncronas, que son una característica clave del entorno.

Cuando ocurre un evento, se ejecuta una función de callback asociada, llamada **manejador del evento** (event handler o event listener). La mayoría de las clases que emiten eventos heredan de `EventEmitter`, lo que les otorga acceso a varios métodos importantes para trabajar con eventos.

Los eventos son una parte crucial de la programación en Node.js, permitiendo un modelo de ejecución eficiente y asíncrono. Como vamos a ver, los métodos como `on`, `once`, `emit`, y `removeListener` permiten gestionar de manera efectiva los manejadores de eventos. Además, la capacidad de personalizar los tipos de eventos ayuda a mantener un código más claro y seguro en sistemas grandes.

### El módulo events y EventEmitter

En Node.js, la clase **EventEmitter** es el núcleo de su sistema de eventos. Cualquier objeto que emite eventos es una instancia de esta clase o hereda de ella. La clase EventEmitter proporciona una interfaz para registrar manejadores de eventos y emitir eventos que activan esos manejadores.

Para usarla, necesitas importar el módulo events:

```ts
import { EventEmitter } from 'events';
```

En la práctica, la clase EventEmitter se utiliza directamente para crear emisores de eventos personalizados.

Al mismo tiempo, muchas de las clases de Node extienden EventEmitter, lo que les permite emitir eventos y registrar manejadores para ellos. Por ejemplo, el módulo `fs` (File System) de Node.js, que proporciona una API para interactuar con el sistema de archivos, emite eventos cuando se realizan operaciones de lectura y escritura.

Las clases que emiten eventos porque derivan de EventEmitter, pueden utilizar métodos como:

- `on(….)` / `addListener(….)`,
- `emit(……)`
- `once(….)`
- `removeListener(….)`

### Métodos principales para trabajar con eventos

#### on(…​) / addListener(…​)

Estos métodos se utilizan para **registrar** la función **callback**, que actuará como manejador del evento.
Cuando el evento ocurre, la función de callback registrada se ejecuta.

```ts
import { EventEmitter } from 'events';

// Crear una instancia de EventEmitter
const emitter: EventEmitter = new EventEmitter();

// Registrar un manejador para el evento 'message'
emitter.on('message', (message: string, user: string) => {
  console.log(`${user} dice: ${message}`);
});

// Emitir el evento 'message'
emitter.emit('message', '¡Hola!', 'Juan');
```

En el ejemplo anterior, se crea un nuevo emisor de eventos, se registra un manejador para el evento `message` y luego se emite dicho evento, activando el manejador y pasando parámetros al mismo.

#### emit(…​)

El método `emit` se utiliza para enviar eventos. Cuando se llama, se ejecutan todos los manejadores que hayan sido registrados previamente para ese evento. Junto con el nombre del evento, se pueden pasar parámetros adicionales a `emit`, que serán recibidos por los manejadores.

```ts
emitter.emit(<evento>, <p1>, <p2>, ...)
```

Por ejemplo, en el siguiente código, se emite el evento `message` con dos parámetros adicionales:

```ts
// Emitir el evento 'message' con parámetros adicionales
emitter.emit('message', '¡Hola de nuevo!', 'Carlos');
```

#### once(…​)

A veces, es necesario que un manejador se ejecute solo una vez y luego se elimine automáticamente. Para esto, se utiliza el método `once`.

```ts
// Registrar un manejador para que se ejecute solo una vez
emitter.once('message', (message: string, user: string) => {
  console.log(`(Una vez) ${user} dice: ${message}`);
});

// Emitir el evento 'message' dos veces
emitter.emit('message', '¡Solo una vez!', 'Carlos'); // Se ejecuta
emitter.emit('message', 'No se ejecutará', 'Carlos'); // No se ejecuta
```

En este ejemplo, el manejador del evento `message` se ejecutará solo la primera vez que se emita el evento.

#### removeListener(…​)

Es posible eliminar un manejador registrado anteriormente utilizando el método `removeListener`.

```ts
// Definir el manejador
const listener = (message: string, user: string) => {
  console.log(`${user} dice: ${message}`);
};

// Registrar el manejador
emitter.on('message', listener);

// Emitir el evento
emitter.emit('message', '¡Hola!', 'Lucas');

// Eliminar el manejador
emitter.removeListener('message', listener);

// Emitir el evento nuevamente (el manejador no se ejecuta)
emitter.emit('message', 'No se ejecutará', 'Lucas');
```

Aquí, se elimina el manejador registrado para el evento `message`, por lo que no se ejecutará cuando el evento se emita nuevamente.

### Definición de tipos personalizados para eventos

En sistemas más complejos, puede ser útil definir tipos específicos para los eventos que puede manejar un emisor. Esto permite asegurarse de que los eventos y sus parámetros sean coherentes en todo el sistema.

```ts
import { EventEmitter } from 'events';

// Definir una interfaz para los eventos que puede manejar el emisor
interface MyEmitter extends EventEmitter {
  on(event: 'message', listener: (message: string, user: string) => void): this;
  emit(event: 'message', message: string, user: string): boolean;
}

// Crear una instancia de EventEmitter con tipado personalizado
const myEmitter: MyEmitter = new EventEmitter();

// Registrar el manejador del evento 'message'
myEmitter.on('message', (message: string, user: string) => {
  console.log(`${user} dice: ${message}`);
});

// Emitir el evento 'message'
myEmitter.emit('message', '¡Hola, mundo!', 'Pedro');
myEmitter.emit('message', '¿Cómo estás?', 'Ana');
```

En este ejemplo, se define una interfaz personalizada para garantizar que el emisor solo maneje eventos llamados `message` y que estos eventos siempre reciban dos parámetros de tipo `string`.

### Optimización de eventos en Node.js

El sistema de eventos en Node.js también permite ajustes y optimizaciones en el manejo de eventos.

#### Número máximo de manejadores (listeners)

De forma predeterminada, Node.js emite una advertencia si se registran más de 10 manejadores para un mismo evento. Para aumentar este límite, se puede utilizar el método `setMaxListeners`.

```ts
// Aumentar el límite de manejadores para un evento
myEmitter.setMaxListeners(20);
```

Esto permite evitar la advertencia cuando se registran múltiples manejadores para un solo evento.

## Módulos nativos de Node.JS

La estructura de Node.js es completamente **modular**, incluso en los elementos nativos que componen su **núcleo**. Muchos de esos **módulos nativos** son conjuntos de identificadores en JS (funciones) que actúan como interfaz para poder invocar las **features** de Node.js **implementadas en C++**, que en muchos casos se apoyan en las funciones POSIX del sistema operativo.

Estas features le dan a Node.js la capacidad de interactuar con el sistema operativo y con el exterior, asi como ejecutar de forma no bloqueante el código asíncrono. Algunos ejemplos
incluyen la gestión de ficheros, la comunicación en red, la gestión de procesos, la gestión de eventos, etc.

### Acceso a los módulos. Importación y exportación

Para disponer de la funcionalidad de un módulo lo importamos.

Inicialmente Node soportaba e implementaba el sistema módulos CommonJS, donde los elementos exportados mediante `module.exports` son importados al asignarlos a una
variable mediante el comando `require`

```javascript
var <nombre> = require('<nombre módulo>);
```

Actualmente, desde la versión 18, Node.js soporta completamente el sistema de módulos ES6, indicando en package.json "type": "nodule". ESM está siendo paulatinamente adoptado como el más habitual en las aplicaciones Node: en las últimas versiones se reconoce incluso si no se ha configurado package.json.

Los elementos exportados como `module.exports` en CommonJS son importados mediante el comando `import` de la siguiente forma:

```javascript
import <nombre> from '<nombre módulo>';
```

Cuando los elementos exportados en ESM son varios, se importan mediante la notación de llaves `{}`

```javascript
import { <nombre1>, <nombre2> } from '<nombre módulo>';
```

Cada modulo es un fichero diferente con un espacio de nombres local que da lugar a un closure que incluye

- una parte pública (interfaz) que expone una serie de variables, principalmente funciones
- una parte otra privada, con la implementación de las funciones públicas y en su caso, variables privadas

Ejemplo: Creamos un modulo que contenga los cálculos geométricos de un círculo:

- Su circunferencia
- Su área

### Módulos del core

El núcleo de NodeJS está formado por poco más de 35 módulos

Es importante revisar su nivel de estabilidad al usarlos

- `deprecated`
- `experimental`
- `stable`
- `locked`

Toda la información sobre el núcleo está en el API Docs
<https://nodejs.org/dist/latest-v8.x/docs/api/>

Algunos módulos del core

- `global`: objeto global
- `process`: información y control sobre el proceso de Node.js
- `os`: información sobre el sistema operativo
- `module`: información sobre el módulo actual
- `debugger`: interfaz de depuración
- `events`: emisión y escucha de eventos
- `fs`: operaciones de ficheros (file system)
- `buffer`: manipulación de datos binarios
- `streams`: operaciones de lectura y escritura desde flujos de datos (streams)
- `http`: servidor y cliente HTTP
- `util`: funciones de utilidad
- `timers`: funciones de temporización

### Entrono de ejecución

Node.JS es un comando que arranca un proceso del sistema que proporciona

- un entorno de ejecución o intérprete para JavaScript
- un conjunto de librerías básicas, o módulos nativos

parte de estas librerías permite interactuar con componentes del sistema operativo a través de funciones que cumplen con el estándar POSIX

El entorno es ahora el sistema operativo y no el navegador. En el **navegador**, el entorno se hace accesible a traves del objeto **Window** que expone el DOM, el BOM y el resto de las APIs del navegador (Web APIs).

En Node.js el entorno es un **proceso** del S.O. que se ejecuta en un **espacio de memoria** propio, en el que se ejecuta el código JavaScript y se almacenan las variables, objetos y funciones que se crean en el proceso de ejecución. Por defecto, este espacio de memoria es **privado** y no accesible desde el exterior. Sin embargo, mediante la variable **global**, que es un objeto global que se crea automáticamente al arrancar el proceso de Node.js, se pueden hacer **accesibles** las variables, objetos y funciones que se crean en el proceso de ejecución.

### La variable global

Por defecto, disponemos a través de global de

- el módulo console
- el módulo timers
- el objeto Buffer y el módulo buffer
- el objeto nativo process
- structuredClone, fetch, crypto, navigator, etc.

```javascript
console.log(global)
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
```

La mayoría de los elementos de global están también implementados en el navegador, facilitando su uso en ambos entornos.

Para acceder a la variable global, la podemos referenciar como **global**, como **globalThis** u omitirla. Hacerlo a través de this no es posible si JS se ejecuta en modo estricto, lo cual sucede automáticamente en el caso de los módulos ES6

```javascript
process;
global.process;
globalThis.process;
```

La ventaja de usar thisGlobal es que es transparente al entorno de ejecución, ya que en el navegador thisGlobal es equivalente a window y en Node.js a global.

### Módulo Process

Dentro de global, el objeto **process** es un objeto global que proporciona información y control sobre el proceso del S.O en el que se ejecuta de Node.js. Como objeto global, está disponible en cualquier parte del código JavaScript como interfaz entre dicho código y el S.O.

```javascript
console.log(process);
```

El objeto process tiene propiedades y métodos que permiten interactuar con el proceso del S.O. en el que se ejecuta Node.js. Algunas de las propiedades y métodos más comunes son:

- **process.pid**: Número que identifica de forma única el proceso de Node.js en el S.O. Este número es asignado por el S.O. al arrancar el proceso y no cambia durante la ejecución del proceso.

- **process.arch**: Cadena que indica la arquitectura del sistema en el que se está ejecutando Node.js. Los valores posibles son 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32' y 'x64'.

- **process.platform**: Cadena que indica el sistema operativo en el que se está ejecutando Node.js. Los valores posibles son 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos' y 'win32'.

- **process.version**: Cadena que indica la versión de Node.js que se está ejecutando.

- **process.cwd()**: Método que devuelve el **directorio de trabajo actual** del proceso de Node.js.

- **process.argv**: Array que contiene los **argumentos** de la línea de comandos con la que se ha invocado el proceso de Node.js. El primer elemento es el ejecutable de Node.js, el segundo es el nombre del script que se está ejecutando y los siguientes son los argumentos que se han pasado al script.

- **process.env**: Objeto que contiene las **variables de entorno** del proceso de Node.js. Las variables de entorno son pares clave-valor que se pasan al proceso al arrancarlo y que pueden ser consultadas y modificadas a través de process.env.

- **process.exit([code])**: Método que finaliza el proceso de Node.js con el código de salida code. Si no se especifica code, el proceso finaliza con el código 0, que indica que ha finalizado correctamente. Si se especifica un código distinto de 0, indica que ha habido un error.

- **process.stdin**: Flujo de lectura estándar del proceso de Node.js. Este flujo permite leer datos de la entrada estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

- **process.stdout**: Flujo de escritura estándar del proceso de Node.js. Este flujo permite escribir datos en la salida estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

- **process.stderr**: Flujo de escritura de errores estándar del proceso de Node.js. Este flujo permite escribir mensajes de error en la salida de errores estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

#### Eventos y procesos

Como muchas de las clases de Node.js, el objeto process hereda de EventEmitter, lo que le permite emitir eventos y registrar manejadores para ellos. Algunos de los eventos más comunes que emite el objeto process son:

- **exit**: Se emite cuando el proceso está a punto de finalizar. Los manejadores de este evento se ejecutan de forma síncrona y no pueden evitar que el proceso finalice.
- **beforeExit**: Se emite antes de que el proceso finalice. Los manejadores de este evento se ejecutan de forma síncrona y pueden evitar que el proceso finalice.
- **uncaughtException**: Se emite cuando se produce una excepción que no ha sido capturada por ningún manejador. Los manejadores de este evento se ejecutan de forma síncrona y pueden evitar que el proceso finalice.
- **unhandledRejection**: Se emite cuando se produce un rechazo de una promesa que no ha sido capturado por ningún manejador. Los manejadores de este evento se ejecutan de forma síncrona y pueden evitar que el proceso finalice.
- **warning**: Se emite cuando se produce una advertencia. Los manejadores de este evento se ejecutan de forma síncrona y pueden evitar que el proceso finalice.

```typescript
import process from 'node:process';

process.on('exit', (code) => {
  console.log(`Proceso finalizado con código ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('Excepción no capturada:', err);
});

process.on('SIGINT', () => {
  console.log('Se recibió la señal SIGINT (Ctrl+C)');
  process.exit(0);
});
```

#### Lanzar un proceso

El módulo process también nos permite lanzar procesos secundarios utilizando el método ‘spawn’ del módulo ‘child_process’.

```typescript
import { spawn } from 'node:child_process';

// Comando para abrir gedit en Linux o macOS
const comando = 'gedit';

// Argumentos opcionales, en este caso no es necesario
const args = [];

const proceso = spawn(comando, args);

proceso.on('error', (err) => {
  console.error('Error al iniciar el proceso:', err);
});

proceso.on('exit', (code) => {
  console.log(`Proceso finalizado con código de salida: ${code}`);
});
```

### Variables de entorno

Como hemos mencionado, **process.env** contiene las **variables de entorno** del proceso de Node.js.

Las variables de entorno son pares clave-valor que se pasan al proceso al arrancarlo y que pueden proceder de diferentes fuentes, como el sistema operativo, el shell o el propio proceso de Node.js. Estas variables se utilizan para configurar el entorno de ejecución del proceso y para compartir información entre diferentes procesos.
Las variables pueden ser consultadas y modificadas a través de process.env.

Es posible añadir variables de entorno propias en el arranque del proceso de Node.
e.g. NODE_ENV para definir el entorno de Node

```bash (linux shell)
NODE_ENV=dev node index.js
```

```shell (windows command)
set NODE_ENV=dev & node index.js
```

Para evitar el problema de las diferencias entre sistemas operativos, se puede usar el paquete **cross-env** para definir variables de entorno de forma multiplataforma.

Su instalación se realiza mediante el siguiente comando:

```shell
npm install cross-env
```

En cuanto a su uso, se puede definir una variable de entorno de la siguiente forma:

```shell
cross-env NODE_ENV=dev node index.js
```

#### Fichero .env

Otra forma de añadir variables de entorno es mediante un fichero .env. En este fichero se definen las variables de entorno en formato clave=valor, una por línea.

```shell
NODE_ENV=dev
PORT=3000
PASSWORD=123456
```

La posibilidad de incluir información sensible en este fichero es muy alta por lo que es recomendable añadirlo al fichero .gitignore para evitar que se suba al repositorio.

Para acceder a las variables definidas en el fichero .env, se puede usar el paquete [dotenv](https://www.npmjs.com/package/dotenv), que permite cargar las variables del fichero en process.env.

Para instalar dotenv, ejecutamos el siguiente comando en la terminal:

```shell
npm install dotenv
```

Una vez instalado dotenv, podemos cargar las variables de un fichero .env en process.env en el script principal de la aplicación de la siguiente forma:

```javascript
// require('dotenv').config(); en CommonJS
import 'dotenv/config';
console.log(process.env.MY_VARIABLE);
```

A partir de la versión 20.6.0 de Node, es posible cargar las variables de un fichero .env en process.env sin necesidad de instalar dotenv, utilizando el flag --env-file al arrancar el proceso de Node.

```shell
node --env-file=.env app.js
```

En el **frontend**, cuando se usa **Vite**, este builder expone algunas de las variables de entrono a traves de `import.meta.env`. Para las variables con nombres definidos por el usuario, se debe usar el prefijo `VITE_` al definirlas en el fichero `.env`

### Módulo OS

El módulo **os** proporciona información sobre el sistema operativo en el que se está ejecutando Node.js con nuestra aplicación. Este módulo es útil para obtener información sobre la plataforma, la arquitectura, la versión del sistema operativo, la memoria total y libre, el directorio temporal y más.

Veamos algunos ejemplos de uso del módulo `os`:

- Obtener información sobre el sistema

```typescript
import os from 'node:os';

console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Versión del SO:', os.version());
console.log('Memoria total (bytes):', os.totalmem());
console.log('Memoria libre (bytes):', os.freemem());
console.log('Directorio temporal:', os.tmpdir());
console.log('Nombre del host:', os.hostname());
console.log('CPU:', os.cpus());
```

- Obtener información sobre los usuarios del sistema

También podemos utilizar el módulo os para obtener información sobre los usuarios del sistema, como el usuario actual y su directorio de inicio. Veamos un ejemplo:

```typescript
import os from 'node:os';

console.log('Información de usuario actual:', os.userInfo());
console.log('Directorio de inicio del usuario actual:', os.homedir());
```

- Obtener información sobre interfaces de red

El módulo os nos permite acceder a información sobre las interfaces de red disponibles en el sistema. Podemos obtener detalles como las direcciones IP y los nombres de las interfaces.

```typescript
import os from 'node:os';

const interfaces = os.networkInterfaces();
console.log('Interfaces de red:', interfaces);
```

- Obtener información sobre el tiempo de actividad del sistema

Con el módulo os, también podemos obtener información sobre el tiempo de actividad del sistema, que nos indica cuánto tiempo ha estado funcionando el sistema desde su último reinicio.

```typescript
import os from 'node:os';

console.log('Tiempo de actividad del sistema (segundos):', os.uptime());
```

- Obtener información sobre las constantes del sistema

Además de la información dinámica del sistema, el módulo os nos proporciona acceso a algunas constantes del sistema, como el fin de línea predeterminado y los directorios predeterminados.

```typescript
import os from 'node:os';

console.log('Fin de línea predeterminado:', os.EOL);
console.log('Directorio de ejecución del proceso Node:', os.homedir());
console.log('Directorio temporal predeterminado:', os.tmpdir());
```

## Node y la línea de comandos

### Node REPL

Node se define compo un REPL, Read-Eval-Print-Loop, que es un entorno interactivo que permite ejecutar código JavaScript en tiempo real. Para arrancar el REPL de Node, ejecutamos el comando node en la terminal sin argumentos.

```shell
node
```

Generalmente se usa para probar código, depurar y experimentar con nuevas funcionalidades. En el REPL de Node, podemos ejecutar cualquier instrucción de JavaScript y ver el resultado de su evaluación en tiempo real.

### stdin y stdout

Para interactuar con el usuario a través de la terminal, se pueden usar el **subsistema estándar I/O**, responsable de los flujos de entrada y salida estándar del proceso de Node.js. Estos flujos son **streams de datos** que permiten leer y escribir datos de forma asíncrona.

De acuerdo con POSIX (estándar para la integración de I/O del programa y las tareas a nivel del sistema) el subsistema estándar I/O tiene tres streams que representan (modelan) las entradas y salidas (en C, los file descriptors 0, 1, 2)

0 - stdin
1 - stdout
2 - stderr

JS como lenguaje NO tiene ningún subsistema estándar I/O (es agnóstico al I/O), por lo que es necesario que lo proporcione el entorno de ejecución, Node o el navegador. Esta independencia de JS del I/O es una de las razones de su capacidad de ser usado en cualquier entorno o dispositivo.

#### Output: stdout y stderr

Para los flujos de salida estándar y de errores estándar, tanto en Node como en el navegador utilizan los métodos del objeto `console`. En Node, estos métodos son en realidad llamadas al subsistema estándar I/O, por lo que simplificando para un simple string, la sentencia `console.log ('Hello!')` se implementaría como `process.stdout.write('Hello!\n')`.

```javascript
console.log('Hello!');
process.stdout.write('Hello!\n');
```

En realidad pasar los caracteres directamente al stream sería la forma menos eficiente, y el método `console.log()` es realmente una llamada al **subsistema estándar I/O** (process.std....), basado en **streams de datos**, que es más eficiente que pasar los caracteres directamente al stream. En cualquier caso, para entenderlo, podemos asumir esta simplificación.

En caso de errores, existe un subsistema estándar I/O específico, `process.stderr`, que se usa para mostrar mensajes de error. En lugar de `console.log('Error!')`, se puede usar `process.stderr.write('Error!\n')`.

```javascript
console.log('Error!');
process.stderr.write('Error!\n');
```

Los streams de salida son distintos (1 y 2) como demuestran las siguientes **redirecciones** en la consola

```shell (Linux shell)
node ex01.js 1>/dev/null  // Error! (no se muestra en consola Hello!)
node ex01.js 2>/dev/null  // Hello! (no se muestra en consola Error!)
```

En Linux, en cada uno de los casos, la parte 1 (stdout) o 2 (stderr) se redirige a /dev/null, que es un dispositivo especial en Unix que descarta todo lo que se escribe en él. Por tanto solo se verá el mensaje que no se redirige.

En Windows se puede hacer lo mismo, pero con un comando diferente, que redirige la salida a un fichero txt

```shell (windows command)
node ex01.js 1>log.txt ---> // se muestra solo Error! (se escribe en fichero Hello!)
node ex01.js 2>log.txt ---> // se muestra solo Hello! (se escribe en fichero Error!)
```

Por esto es conveniente usar console.error() incluso cuando en consola se vea igual, en caso de que el shell no distinga gráficamente entre stdout y stderr, como si hace la consola del navegador.

#### Nota sobre los saltos de línea

Existen tres formas de hacer saltos de línea, dependiendo del sistema operativo:

- **\n**: LF (Line Feed), que se usa en Unix y Linux
- **\r**: CR (Carriage Return), que se usaba en Mac OS antes de la versión X
- **\r\n**: CRLF (Carriage Return Line Feed), que se usa en Windows

En los ejemplos anteriores se ha utilizado `\n`, que es el salto de línea estándar en Unix y Linux, pero que también es reconocido por Windows. Para hacer saltos de línea en Windows, se debe usar `\r\n`.

#### Input: stdin

En process.stdin existe un método `read()` que permite leer datos de la entrada estándar del proceso de Node.js. Este método es asíncrono hace difícil su uso en la práctica.

En su lugar, se suele usar el evento `data` del stream de entrada estándar, que se dispara cuando se recibe un buffer de datos en la entrada estándar. Este evento se puede escuchar con el método `on()` del stream de entrada estándar.

Con ello podemos ver dos de los elementos clave del diseño de Node.js:

- la **orientación a eventos**
- la gestión de la **asincronía** mediante callbacks: el método on, que maneja el evento recibe como argumentos el nombre del evento y una función de callback que se ejecuta cuando se dispara el evento.

```javascript
process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Hello, ${name}!\n`);
  process.exit();
});
```

Como veremos, en la práctica la lectura de la entrada estándar se hace de forma más sencilla con **librerías**, que simplifican la gestión de la entrada estándar y permiten hacer cosas más complejas como leer líneas completas o mostrar mensajes al usuario.

### Creación de un CLI

Una de las aplicaciones más comunes de Node.js es la creación de **CLI** (Command Line Interface) o interfaces de línea de comandos. Una CLI es una aplicación que se ejecuta en la terminal y permite interactuar con el usuario a través de comandos, de manera similar a como lo hace un shell del S.O.

Esto plantea dos necesidades:

- hacer el comando ejecutable, es decir que se pueda invocar desde la terminal sin necesidad de invocar node, como si fuera un comando del sistema
- procesar los argumentos que se pasan al comando para hacer que la aplicación responda de forma diferente en función de los argumentos aportados por el usuario

#### Creación de un comando ejecutable

Para hacer un comando ejecutable en Linux, se debe añadir un shebang al principio del fichero que contiene el código del comando. Un shebang es una secuencia de caracteres que indica al S.O. cómo debe ejecutar el fichero.

```shell
#!/usr/bin/env node
```

Además, se debe dar permisos de ejecución al fichero que contiene el código del comando. Para ello, se debe ejecutar el siguiente comando en la terminal:

```shell
chmod +x index.js
```

En cualquiera de los casos, se debe añadir el fichero que contiene el código del comando al PATH del sistema para que se pueda invocar desde cualquier directorio. Alternativamente es posible crear un enlace simbólico al fichero en un directorio que ya esté en el PATH. Para ello, se debe ejecutar el siguiente comando en la terminal:

```shell (Linux shell)
ln -s /ruta/al/fichero /usr/local/bin/nombre_comando
```

```shell (Windows command)
mklink /ruta/al/fichero /usr/local/bin/nombre_comando
```

Esta misma operación se puede hacer mediante npm, añadiendo el comando a la sección bin de package.json y ejecutando el comando npm link en la terminal.

```json
{
  "name": "my-cli",
  "version": "1.0.0",
  "bin": {
    "my-cli": "./index.js"
  }
}
```

```shell (admin mode)
npm link
```

Nota: es posible que en Windows se necesite configurar el final de línea como LF en lugar de CRLF para que el comando funcione correctamente. También puede ser necesario configurar la extensión .js asociada a Node.

#### Procesamiento de argumentos

Como ya vimos, **process.argv** es un array que contiene los **argumentos** de la línea de comandos con la que se ha invocado el proceso de Node.js. El primer elemento es el ejecutable de Node.js, el segundo es el nombre del script que se está ejecutando y los siguientes son los argumentos que se han pasado al script.

Si al comando del CLI se le añade un texto, process.argv[2] lo recogerá

```javascript
const text = process.argv[2];
console.log(text);
```

Para facilitar el procesamiento se suelen utilizar librerías como [minimist](https://www.npmjs.com/package/minimist), [yargs](https://www.npmjs.com/package/yargs) o [commander](https://www.npmjs.com/package/commander) que permiten definir los argumentos que acepta el comando y procesarlos de forma sencilla.

Para instalar una de estas librerías, se debe ejecutar alternativamente alguno de los siguientes comandos en la terminal:

```shell
npm install minimist
npm install -D @types/minimist
```

```shell
npm install yargs
npm install -D @types/yargs
```

En el caso de commander, al estar echo en TS, no es necesario instalar los tipos aparte

```shell
npm install commander
```

#### Procesamiento de argumentos con minimist

Por ejemplo, con minimist, se puede definir los argumentos que acepta el comando y procesarlos de la siguiente forma:

```javascript
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2), {
  boolean: ['help', 'version'],
  string: ['name'],
  alias: {
    h: 'help',
    v: 'version',
  },
});
```

El tipo del argumento se define en el objeto de configuración de minimist, que acepta las siguientes propiedades:

- **boolean**: Array con los nombres de los argumentos que deben ser tratados como booleanos (solo se detecta su presencia o ausencia).
- **string**: Array con los nombres de los argumentos permiten recoger una cadenas de texto.
- **alias**: Objeto con los nombres de los argumentos y sus alias.

```shell
node index --version
node index.js -help
node index.js --name "John Doe" -h -v
```

#### Procesamiento de argumentos con yargs

Con yargs, no es necesario incluir los comandos de ayuda y versión, ya que se incluyen por defecto. Para definir los argumentos que acepta el comando y procesarlo, se puede hacer con el método **command**:

- command: crea un comando
  - nombre y argumentos <requeridos> / [opcionales]
  - descripción
  - objeto o función de formato, para los argumentos
  - función del comando

Por ejemplo, un comando new que acepta un argumento note, de tipo string

```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    {
      note: {
        describe: 'The content of the note you want to create',
        type: 'string',
      };
    },
    () => {
      console.log('Procesando comando new');
      console.log({ argv });
    },
  )
  .demandCommand(1)
  .parse();
```

El método option le añade al parámetro argumentos opcionales, definidas como un objeto

Por ejemplo, al comando new que acepta un argumento note, le añadimos un argumento opcional tags, de tipo string, que se puede abreviar con -t

```typescript
yargs(hideBin(process.argv))
  .command(
    'new <note>',
    ...
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  });
  .demandCommand(1)
  .parse();
```

En el método command, el cuarto parámetro es una función que se ejecuta cuando se invoca el comando. En este caso, se muestra el contenido del argumento note y tags.

Por el momento solo se muestra el contenido de los argumentos, que nos muestra como los procesa yargs

```shell
Procesando comando new
{
  argv: {
    _: [ 'new' ],
    t: 'saludo,español',
    tags: 'saludo,español',
    '$0': 'note',
    note: "'Hola'"
  }
}
```

Se crea un objeto argv con las siguientes propiedades:

- las propiedades correspondientes a los argumentos, incluyendo sus alias abreviados, en este caso note, tags y t.
- una propiedad $0 con el nombre del argumento obligatorio
- una propiedad \_ con el nombre del comando.

Podemos completar la función de comando con la creación de una nota, que se puede hacer de forma asíncrona, y mostrar un mensaje de confirmación.

```typescript
import yargs from 'yargs';
import { hideBin } from "yargs/helpers";

const createNote = async (content: string, tags: string[]) => {
    console.log('Creating note...');
    const newNote = { content, tags };
    return newNote;
};

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    {...},
    async (argv) => {
      // console.log('Procesando comando new');
      // console.log({ argv });
      const content = argv.note;
      if (!content) {
          console.error('You must provide a note to create');
          process.exit(1);
      }
      const tags: string[] = argv.tags
          ? (argv.tags as string).split(',')
          : [];
      const newNote = await createNote(content, tags);
      console.log('Note created!', newNote);
    },
  )
  ...
  .demandCommand(1)
  .parse();
```

El resultado final sería algo como esto:

```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const createNote = async (content: string, tags: string[]) => {
  console.log('Creating note...');
  const newNote = { content, tags };
  return newNote;
};

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    {
      note: {
        describe: 'The content of the note you want to create',
        type: 'string',
      };
    },
    async (argv) => {
      // console.log('Procesando comando new');
      // console.log({ argv });
      const content = argv.note;
      if (!content) {
        console.error('You must provide a note to create');
        process.exit(1);
      }
      const tags: string[] = argv.tags ? (argv.tags as string).split(',') : [];
      const newNote = await createNote(content, tags);
      console.log('Note created!', newNote);
    },
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  })
  .demandCommand(1)
  .parse();
```

El resultado es una nueva nota con el contenido y las etiquetas que se han pasado como argumentos al comando new, pero sin ninguna **persistencia** en el tiempo. Para dársela se necesita un sistema de **almacenamiento**, como una base de datos o un fichero. En el caso de un fichero, se puede usar el **file system** proporcionado por módulo fs de Node.js.

## File System

El módulo fs de Node incluye las principales funciones para trabajar con ficheros y directorios. Algunas de las funciones más comunes son:

- fs.readFile() to read a file
- fs.writeFile() to write a file
- fs.mkdir() to create a new directory
- fs.readdir() to read the contents of a directory
- fs.stat() to get information about a file
- fs.unlink() to delete a file
- fs.rename() to rename a file

### Estructura de carpetas: \_\_dirname y el módulo path

En la mayoría de los casos es necesaria una referencia a la estructura de carpetas sobre la que se quiere realizar la operación. Para ello se usaba tradicionalmente

- la variable \_\_dirname, que contiene la ruta absoluta del directorio que contiene el fichero que se esta ejecutando
- el método `path.join()` del módulo **path** del core de NodeJS, que permite concatenar las partes de una ruta de forma segura, independientemente del sistema operativo.

```typescript
import path from 'path';
const dir = path.join(__dirname, 'notes');
```

Sin embargo, con los módulos ES6, la variable \_\_dirname no está definida, pero se puede usar la variable `import.meta.url` para obtener la ruta del fichero actual, y el método `new URL()` para obtener la ruta del directorio que contiene el fichero actual. 'URL' es un objeto global que se puede usar para crear y manipular URLs, por lo que no es necesario importarlo.

```typescript
import { fileURLToPath } from 'url';

const fileURL = new URL('./notes.json', import.meta.url);
const filePath = fileURLToPath(fileURL);
```

Otra opción es usar otra función del módulo **path**, `path.resolve()`, que permite obtener la ruta absoluta de un fichero o directorio a partir de una ruta relativa.

Por defecto `path.resolve` toma la ruta absoluta al directorio donde se ejecuta el script
(el mismo valor de la variable predefinida \_\_dirname) y la incorpora a la ruta relativa que se le pasa como argumento.
Si se le pasa una ruta absoluta, simplemente la devuelve

```typescript
import path from 'path';
const filePath = path.resolve('notes.json'); // /ruta/absoluta/del/directorio/actual/notes.json
```

#### Otras funciones del módulo path

Algunas de las funciones más comunes del módulo path son:

- `normalize`: normalizar una ruta para eliminar redundancias y simplificar las rutas.

```typescript
const ruta = '/carpeta1//subcarpeta/./archivo.txt';
const rutaNormalizada = path.normalize(ruta);

console.log('Ruta normalizada:', rutaNormalizada);
// Ruta normalizada: \carpeta1\subcarpeta\archivo.txt
```

- `basename`: permite obtener el nombre de un archivo a partir de una ruta dada.

```typescript
const ruta = '/carpeta1/subcarpeta/archivo.txt';
const nombreBase = path.basename(ruta);

console.log('Nombre del archivo:', nombreBase);
//Nombre del archivo: archivo.txt
```

- '`dirname`': permite bbtener el nombre del directorio a partir de una ruta dada.

```typescript
const ruta = '/carpeta1/subcarpeta/archivo.txt';
const nombreDirectorio = path.dirname(ruta);

console.log('Nombre del directorio:', nombreDirectorio);
//Nombre del directorio: /carpeta1/subcarpeta
```

- `extname`: permite obtener la extensión de un archivo de una ruta dada.

```typescript
const ruta = '/carpeta1/subcarpeta/archivo.txt';
const extension = path.extname(ruta);

console.log('Extensión del archivo:', extension);
// Extensión del archivo: .txt
```

### Versiones de las funciones del módulo fs

Las funciones del módulo fs de Node.js tienen dos versiones:

- una versión **síncrona**, que bloquea el hilo principal hasta que se completa la operación. Su nombre termina en Sync
- una versión **asíncrona**, que no bloquea el hilo principal y recibe un callback que se ejecuta cuando se completa la operación

### Lectura de ficheros

Para leer un fichero de forma síncrona se usa `fs.readFileSync()`, y para leerlo de forma asíncrona se usa `fs.readFile()`.

En el caso síncrono, se pasa la ruta del fichero y la codificación del fichero, que por defecto es utf-8. El resultado es un string con el contenido del fichero.

```typescript
import fs from 'fs';

const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);
```

Si no se incluye la codificación, el resultado es un buffer con el contenido del fichero, del que se pueden obtener los datos en formato binario o convertirlos a string con el método toString.

```typescript
import fs from 'fs';
const content = fs.readFileSync(filePath);
console.log(content.toString());
```

En el caso asíncrono, se pasa la ruta del fichero, la codificación y una función de callback que se ejecuta cuando se completa la operación. El resultado es un buffer con el contenido del fichero.

```typescript
import fs from 'fs';
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Los parámetros de la función de callback siguen el patrón de Node.js, conocido como 'error first', con el primer parámetro como un posible error y el segundo como el resultado de la operación.

### File System basado en Promesas

Con posterioridad a la versión 12 de Node.js, el módulo fs incluye una versión basada en promesas de las funciones asíncronas, que se puede importar desde `fs/promises`.

```typescript
import fs from 'fs/promises';

const content = await fs.readFile(filePath, 'utf-8');
console.log(content);
```

### Escritura de ficheros

Para escribir un fichero de forma síncrona se usa `fs.writeFileSync()`, y para escribirlo de forma asíncrona se usa `fs.writeFile()` o su versión basada en promesas.

En el caso síncrono, se pasa la ruta del fichero, el contenido y la codificación del fichero, que por defecto es utf-8.

```typescript
import fs from 'fs';
const newContent = 'Hello, World!';
fs.writeFileSync(filePath, newContent, 'utf-8');
```

En el caso asíncrono, se pasa la ruta del fichero, el contenido, la codificación y una función de callback que se ejecuta cuando se completa la operación.

```typescript
import fs from 'fs';
const newContent = 'Hello, World!';
fs.writeFile(filePath, newContent, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written!');
});
```

Hoy en día es más habitual usar la versión basada en promesas, que se puede importar desde `fs/promises`. En ese caso, se pasa la ruta del fichero, el contenido y la codificación del fichero, y se usa el método then() para manejar el resultado de la operación.

```typescript
import fs from 'fs/promises';
const newContent = 'Hello, World!';
fs.writeFile(filePath, newContent, 'utf-8')
  .then(() => {
    console.log('File written!');
  })
  .catch((err) => {
    console.error(err);
  });
```

### Otras operaciones de ficheros

El módulo fs de Node.js incluye otras operaciones para trabajar con ficheros y directorios, como crear, renombrar, borrar, comprobar la existencia, obtener información y más.

- acceso a ficheros y directorios
  - `fs.access()`: comprueba si se puede acceder a un fichero o directorio
  - `fs.existsSync()`: comprueba si un fichero o directorio existe
  - `fs.stat()`: obtiene información sobre un fichero o directorio
- creación y eliminación directorios
  - `fs.mkdir()`: crea un directorio
  - `fs.rmdir()`: borra un directorio
  - `fs.rename()`: renombra (mueve) un fichero o directorio
- otras operaciones de ficheros
  - `fs.appendFile()`: añade contenido a un fichero
  - `fs.copyFile()`: copia un fichero
  - `fs.unlink()`: borra un fichero

## CRUD sobre datos JSON

El formato **JSON** es muy común para almacenar datos en ficheros, ya que es fácil de leer y escribir, y se puede convertir a objetos de JavaScript de forma sencilla. Es posible usar un fichero JSON para almacenar datos de forma persistente, como si fuera una base de datos, implementando como un servicio las operaciones **CRUD** (Create, Read, Update, Delete) sobre los datos.

El fichero puede crearse de forma manual, pero también se puede crear de forma automática si no existe, para lo que se puede usar el método `fs.existsSync()` para comprobar si el fichero existe, y `fs.writeFileSync()` para crearlo.

```typescript
import fs from 'fs';
import { resolve } from 'path';

const filePath = resolve('../data/db.json');
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '{}', 'utf-8');
}
```

El fichero se está creando en la carpeta data, que se debe crear manualmente, fuera de dist, para hacer posible su subida a GitHub. Al inicializarla como un objeto vacío, y tratándose de una operación que solo se ejecuta una vez, no es necesario que sea asíncrona.

Como servicio podemos crear los métodos que permitan realizar las operaciones CRUD sobre los datos del fichero JSON, es decir que leen, escriben, insertan y borran, como un ORM/ODM básico para nuestro fichero JSON.

### Modelo de datos

Para trabajar con los datos del fichero JSON, se puede definir un modelo de datos que represente la estructura de los datos. En este caso, se puede usar un tipo / interfaz de TypeScript para definir la estructura de los datos de las notas.

```typescript
export interface Note {
  id: string;
  content: string;
  tags: string[];
}
```

```typescript
export type Note = {
  id: string;
  content: string;
  tags: string[];
};
```

### Operaciones

Para realizar las operaciones CRUD sobre los datos del fichero JSON, se pueden definir los métodos que permitan leer, escribir, insertar y borrar datos del fichero.

```typescript
import fs from 'fs/promises';
import { resolve } from 'path';
import type { Note } from './note.model';

const filePath = resolve('../data/db.json');

export const readNotes = async (): Promise<Note[]> => {
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
};

export const writeNotes = async (notes: Note[]): Promise<void> => {
  await fs.writeFile(filePath, JSON.stringify(notes, null, 2), 'utf-8');
};

export const createNote = async (note: Note): Promise<void> => {
  const notes = await readNotes();
  notes.push(note);
  await writeNotes(notes);
};

export const updateNote = async (id: string, note: Note): Promise<void> => {
  const notes = await readNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes[index] = note;
  await writeNotes(notes);
};

export const deleteNote = async (id: string): Promise<void> => {
  const notes = await readNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes.splice(index, 1);
  await writeNotes(notes);
};
```

### Abstracción, Uso de Genéricos

Para hacer el servicio más genérico, abstraer el tipo de datos y permitir trabajar con cualquier tipo de datos, se pueden usar tipos genéricos en lugar de un tipo específico.

```typescript
const filePath = resolve('../data/db.json');

// Read Items

export const read = async <T>(): Promise<T[]> => {
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
};

// Write Data Array

const write = async <T>(items: T[]): Promise<void> => {
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf-8');
};

// Create item

export const create = async <T>(item: T): Promise<void> => {
  const items = await read<T>();
  items.push(item);
  await write<T>(items);
};

// Read item

export const update = async <T extends { id: string }>(
  id: T['id'],
  item: T,
): Promise<void> => {
  const items = await read<T>();
  const index = items.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Item with id ${id} not found`);
  }
  items[index] = item;
  await write<T>(items);
};

export const remove = async <T extends { id: string }>(
  id: T['id'],
): Promise<void> => {
  const items = await read<T>();
  const index = items.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Item with id ${id} not found`);
  }
  items.splice(index, 1);
  await write<T>(items);
};
```

### Abstracción, Uso de Genéricos y Clases

Para hacer el servicio más genérico, abstraer el tipo de datos y permitir trabajar con cualquier tipo de datos, además del uso de tipos genéricos, se pueden:

- usar clases en lugar de funciones
- usar interfaces para definir los métodos de las clases.
- distribuir el servicio en varias capas, como
  - un servicio de datos (similar a un ORM/ODM)
  - un servicio de notas (un repositorio, de acuerdo con el patrón repository).

#### Servicio de Datos

El interface define los métodos que debe implementar la clase de servicio de datos, que se encarga de el CRUD sobre el fichero JSON.

Opcionalmente el nombre de la colección se puede pasar como argumento al constructor, o ser un parámetro de cada método, para poder trabajar con diferentes colecciones de datos

```typescript
export interface TypeODM<T extends { id: string }> {
  read: (collection: string) => Promise<T[]>;
  readById: (collection: string, id: T['id']) => Promise<T>; // Errores => throw Error
  create: (collection: string, data: Omit<T, 'id'>) => Promise<T>;
  updateById: (
    collection: string,
    id: T['id'],
    data: Omit<Partial<T>, 'id'>,
  ) => Promise<T>;
  deleteById: (collection: string, id: T['id']) => Promise<T>;
}
```

La clase de servicio de datos implementa los métodos definidos en el interface, y se encarga de leer, escribir, insertar y borrar datos del fichero JSON.
En su implementación se añaden los métodos privados de lectura y escritura de ficheros, que utilizan las funciones del módulo fs para leer y escribir datos en el fichero JSON.

```typescript
import { resolve } from 'path';
import type { TypeODM } from './types';

export class ODMLite<T extends { id: string }> implements TypeODM<T> {
  file: string;
  constructor(file: string) {
    this.file = resolve(file);
  }

  private async readDB(): Promise<Record<string, T[]>> {
    const txtData = await fs.readFile(this.file, 'utf-8');
    return JSON.parse(txtData);
  }

  private writeDB(data: Record<string, T[]>): Promise<void> {
    return fs.writeFile(this.file, JSON.stringify(data, null, 2), 'utf-8');
  }
}
```

De acuerdo con el interface, se implementan los métodos del CRUD lectura, escritura, inserción, actualización y borrado de datos.

```typescript
export class ODMLite<T extends { id: string }> implements TypeODM<T> {
    ...

    private checkForCollection(
        collection: string,
        allData: Record<string, T[]>,
    ) {
        if (allData[collection] === undefined) {
            allData[collection] = [];
        }
    }

    async read(collection: string): Promise<T[]> {
        const allData = await this.readDB();
        return allData[collection];
    }

    async readById(collection: string, id: string): Promise<T> {
        const allData = await this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    async create(collection: string, initialData: Omit<T, 'id'>): Promise<T> {
        const allData = await this.readDB();
        this.checkForCollection(collection, allData);
        const itemData = {
            ...initialData,
            id: crypto.randomUUID().substring(0, 8),
        } as T;
        allData[collection].push(itemData);
        await this.writeDB(allData);
        return itemData;
    }

    async updateById(
        collection: string,
        id: string,
        data: Omit<Partial<T>, 'id'>,
    ): Promise<T> {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = await this.readDB();
        let item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        await this.writeDB(allData);
        return item;
    }

    async deleteById(collection: string, id: string) {
        const allData = await this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[collection] = allData[collection].filter(
            (item: T) => item.id !== id,
        );
        await this.writeDB(allData);
        return item;
    }
}
```

Algunas operaciones que suponen una responsabilidad claramente definida, como la comprobación de la existencia de una colección, especialmente si se repiten varias veces, como la localización de un item por su id, se pueden extraer a métodos privados.

```typescript
export class ODMLite<T extends { id: string }> implements TypeODM<T> {
  ...
  private checkForCollection(
    collection: string,
    allData: Record<string, T[]>,
  ) {
    if (allData[collection] === undefined) {
      allData[collection] = [];
    }
  }

  private async findItemById(
    collection: string,
    id: string,
    allData: Record<string, T[]>,
  ): Promise<T> {
    const item = allData[collection].find((item: T) => item.id === id);
    if (item === undefined) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  }
}
```

#### Servicio de repositorio de notas

A partir del servicio de datos, se puede crear un servicio de notas que implemente los métodos específicos para trabajar con las notas, como listar, crear, actualizar y borrar notas.

Inicialmente se puede definir la interfaz de un servicio repositorio, que defina en terminos genéricos el comportamiento de los métodos del crud en cualquier repositorio de cualquier entidad.

```typescript
export interface Repository<T> {
  read: () => Promise<T[]>;
  readById: (id: string) => Promise<T>;
  create: (data: Omit<T, 'id'>) => Promise<T>;
  update: (id: string, data: Partial<Omit<T, 'id'>>) => Promise<T>;
  delete: (id: string) => Promise<T>;
}
```

La clase de servicio repositorio de notas implementa los métodos definidos en el interface, y se encarga de leer, escribir, insertar y borrar notas del fichero JSON.

```typescript
import { resolve } from 'path';

export class RepoNotesFile implements Repository<Note> {
  odm: TypeODM<Note>;
  collection: string;
  constructor(file = '', collection = 'notes') {
    if (!file) {
      file = RepoNotesFile.#filePath;
    }
    this.odm = new ODMLite<Note>(file);
    this.collection = collection;
  }

  async read(): Promise<Note[]> {
    const data = await this.odm.read(this.collection);
    return data;
  }
  async readById(id: string) {
    return await this.odm.readById(this.collection, id);
  }
  async create(data: Omit<Note, 'id'>) {
    return await this.odm.create(this.collection, data);
  }
  async update(id: string, data: Partial<Omit<Note, 'id'>>) {
    return await this.odm.updateById(this.collection, id, data);
  }
  async delete(id: string) {
    return await this.odm.deleteById(this.collection, id);
  }
}
```

En la parte estática de la clase se puede definir la ruta del fichero JSON, y un método para inicializar el fichero JSON si no existe.

```typescript
export class RepoNotesFile implements Repository<Note> {
    static #filePath = '';
    static initializeJSON(relativeFilePath = './data/db.json') {
        this.#filePath = resolve(relativeFilePath);
        if (!existsSync(this.#filePath)) {
            writeFileSync(this.#filePath, '{}', 'utf-8');
            console.log('File initialized');
        } else {
            console.log('File already exists');
        }
        console.log(this.#filePath);
    }
```

### Completando el CLI con CommanderJS

A partir del servicio que nos proporciona los métodos del CRUD, podemos completar el CLI con los comandos que permitan interactuar con las notas, como listar, crear, actualizar y borrar notas.

El resultado final, utilizando `commander`, sería algo como esto:

```typescript
import { Command } from 'commander';
const program = new Command();

program
  .name('notes')
  .description('CLI para gestionar un CRUD de notas')
  .version('1.0.0');

program
  .command('new <note>')
  .description('create a new note')
  .option('-t, --tags <tags>', 'tags to add to the note: tag1,tag2...')
  .action(createNote);

program.command('all').description('get all notes').action(getAllNotes);

program
  .command('find <filter>')
  .description('get matching notes')
  .action(findNotes);

program
  .command('update <note>')
  .description('update note content notes')
  .argument('<id>', 'The id where will be applied note.content update')
  .action(updateNote);

program
  .command('remove <id>')
  .description('remove a note by id')
  .action(removeNote);

program.parse(process.argv);
```

Para cada comando

- se indica su nombre y el/los argumentos que acepta
- los argumentos se pueden incluir en la definición del comando
- o pueden ir aparte, como se ve en el caso del \<id> del comando update
- se añade la descripción de cada comando
- se define una función callback que se encargue de procesar los argumentos y llamar al método correspondiente del servicio de notas.

```typescript
const createNote = async (
  content: string,
  options: Record<string, unknown>,
) => {
  if (!content) {
    console.error('You must provide a note to create');
    process.exit(1);
  }
  const tags: string[] = options.tags
    ? (options.tags as string).split(',')
    : [];

  console.log('Creating note...');
  const newNote: Omit<Note, 'id'> = { content, tags };
  const finalNote = await repoNotes.create(newNote);
  console.log('Note created!', finalNote);
};

const getAllNotes = async () => {
  const notes = await repoNotes.read();
  console.table(notes);
};

const findNotes = async (filter: string) => {
  if (!filter) {
    console.error('You must provide a filter to search');
    process.exit(1);
  }
  console.log(`Notes with content "${filter}"`);
  const notes = await repoNotes.read();
  const validNotes = notes.filter((item) => item.content.includes(filter));
  console.table(validNotes);
};

const updateNote = async (content: string, id: string) => {
  console.log({ id, content });
  if (!id) {
    console.error('You must provide an id to remove');
    process.exit(1);
  }
  await repoNotes.update(id, { content });
  console.log('Note updated!', id);
};

const removeNote = async (id: string) => {
  if (!id) {
    console.error('You must provide an id to remove');
    process.exit(1);
  }
  await repoNotes.delete(id);
  console.log('Note removed!', id);
};
```

## CLI Wizard: Inquirer

[Inquirer.js](https://www.npmjs.com/package/inquirer) es una biblioteca de Node.js que permite crear interfaces de línea de comandos interactivas y amigables para el usuario. Proporciona una serie de métodos para crear preguntas y opciones, y manejar las respuestas del usuario.

Para instalarlo se puede usar npm:

```shell
npm i inquirer
```

### Preguntas

Para crear preguntas se puede usar el método `prompt()` de Inquirer, que recibe un array de objetos con las preguntas a realizar. Cada pregunta puede tener diferentes propiedades, como el tipo de pregunta, el mensaje que se muestra al usuario, las opciones disponibles, etc.

```typescript
import inquirer from 'inquirer';

const questions = [
  { type: 'input', name: 'name', message: '¿Cuál es tu nombre?' },
  { type: 'number', name: 'age', message: '¿Qué edad tienes?' },
  { type: 'password', name: 'password', message: '¿Cuál es tu password?' },
  {
    type: 'list',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    choices: ['Rojo', 'Azul', 'Verde'],
  },
  {
    type: 'checkbox',
    name: 'courses',
    message: '¿Qué cursos te interesan?',
    choices: ['Angular', 'React', 'Astro.js', 'Vue.js', 'Svelte'],
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '¿Estas seguro?',
    default: false,
  },
];
```

Existen varios tipos de preguntas que se pueden hacer, como:

- `input`: para preguntas abiertas que requieren una respuesta de texto
- `number`: para preguntas que requieren un número
- `password`: para preguntas que requieren una contraseña
- `confirm`: para preguntas que requieren una respuesta de sí o no
- `list`: para preguntas con una lista de opciones
- `checkbox`: para preguntas con una lista de opciones que se pueden seleccionar

Otros formatos menos habituales son

- `editor`: para preguntas que requieren una respuesta de texto más larga
- `expand`: para preguntas con una lista de opciones que se pueden expandir
- `rawlist`: para preguntas con una lista de opciones sin formato
- `scale`: para preguntas con una escala de valores
- `datetime`: para preguntas que requieren una fecha y hora
- `autocomplete`: para preguntas con autocompletado

Para mostrar las preguntas al usuario y obtener las respuestas, se puede usar el método `prompt()` de Inquirer, que recibe el array de preguntas y devuelve una promesa de un objeto con las respuestas, cons sus nombres como clave y las respuestas como valores.

```typescript
import inquirer from 'inquirer';
import { UnnamedDistinctQuestion } from 'inquirer/dist/commonjs/types';

type Question = UnnamedDistinctQuestion & { name: string };

const questions: Question[] = [];

inquirer.prompt(questions).then((answer) => {
  console.log(`Hola ${answer.name}`);
  console.log(answer);
});
```

En el ejemplo vemos como anotar el tipo del array de preguntas, para que TypeScript pueda inferir el tipo de las respuestas. Para ello se define un tipo `Question` que extiende el tipo `UnnamedDistinctQuestion` de Inquirer, y añade una propiedad `name` de tipo `string`.

### Validación

Inquirer.js permite validar las respuestas del usuario antes de aceptarlas. Para ello, se puede añadir una propiedad `validate` a cada pregunta, que recibe una función que devuelve un mensaje de error si la respuesta no es válida, o `true` si es válida.

```typescript
const questions: Question[] = [
  {
    type: 'input',
    name: 'name',
    message: '¿Cuál es tu nombre?',
    validate: (value: string) => {
      if (value.trim() === '') {
        return 'Debes introducir un nombre';
      }
      return true;
    },
  },
  {
    type: 'number',
    name: 'age',
    message: '¿Qué edad tienes?',
    validate: (value: number | undefined) => {
      if (!value || isNaN(value)) {
        return 'Debes introducir un número';
      }
      return true;
    },
  },
  {
    type: 'password',
    name: 'password',
    message: '¿Cuál es tu password?',
    validate: (value: string) => {
      if (value.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '¿Estas seguro?',
    default: false,
  },
];
```

### Preguntas condicionales

Inquirer.js permite hacer preguntas condicionales, es decir, mostrar una pregunta solo si se cumple una condición, como puede ser la respuesta afirmativa a una pregunta anterior. Para ello, se puede añadir una propiedad `when` a cada pregunta, que recibe una función que devuelve `true` si la pregunta debe mostrarse, o `false` si no.

```typescript
const questions = [
  {
    type: 'confirm',
    name: 'confirm',
    message: '¿Quieres introducir tu nombre?',
    default: false,
  },
  {
    type: 'input',
    name: 'name',
    message: '¿Cuál es tu nombre?',
    when: (answers) => answers.confirm,
  },
  {
    type: 'number',
    name: 'age',
    message: '¿Qué edad tienes?',
    validate: (value) => {
      if (isNaN(value)) {
        return 'Debes introducir un número';
      }
      return true;
    },
  },
  {
    type: 'password',
    name: 'password',
    message: '¿Cuál es tu password?',
    validate: (value) => {
      if (value.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '¿Estas seguro?',
    default: false,
  },
];
```

### Preguntas en cascada

Inquirer.js permite hacer preguntas en cascada, es decir, mostrar una pregunta en función de la respuesta a otra pregunta anterior. Para ello, se puede añadir una propiedad `choices` a cada pregunta, que recibe una función que devuelve un array de opciones en función de la respuesta a otra pregunta.

```typescript
const questions = [
  {
    type: 'list',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    choices: ['Rojo', 'Azul', 'Verde'],
  },
  {
    type: 'list',
    name: 'shoes',
    message: '¿Qué zapatos prefieres?',
    choices: (answers) => {
        const { color } = answers as { color: string };
        if (color === 'Rojo') {
            return ['Zapatos rojos', 'Zap que no son rojos'];
        } else if (color === 'Azul') {
            return ['Zapatos azules', 'Zap que no son azules'];
        } else {
            return ['Zapatos verdes', 'Zap que no son verdes'];
        }
    },
  ];
```

### Confirmación y repetición de las preguntas

Como hemos visto, Inquirer.js permite una pregunta boolean, que estamos usando en el caso de confirmar las respuestas, pero sin añadir ninguna lógica en consecuencia. Se podría usar para repetir las preguntas, en caso de que el usuario quiera corregir alguna respuesta. Para ello podemos encadenar las preguntas en una función recursiva, que volveremos a llamar si el usuario no confirma sus respuestas, si no que quiere corregirlas.

```typescript
const askPizza = async () => {
  const questions: Question[] = [
    {
      name: 'wantsPizza',
      type: 'confirm',
      message: '¿Quieres una pizza gratis?',
    },
    {
      name: 'confirmAnswer',
      type: 'confirm',
      message: '¿Estás seguro?',
    },
  ];

  const answers = await inquirer.prompt(questions);

  if (answers.wantsPizza) {
    console.log('Finalmente, el usuario quiere una pizza gratis 🍕');
  } else if (answers.confirmAnswer) {
    console.log('El usuario definitivamente no quiere pizza gratis');
  } else {
    askPizza();
  }
};

askPizza();
```

## Testing

## Streams

En Node.js, los streams son **objetos** que permiten leer o escribir datos de manera secuencial y asíncrona. Esto es particularmente útil cuando se trabaja con grandes cantidades de datos, ya que los streams procesan los datos en fragmentos o "chunks", en lugar de cargar todo el contenido en memoria de una sola vez.

Hay cuatro tipos principales de streams en Node.js:

1. **Readable** (de lectura)
2. **Writable** (de escritura)
3. **Duplex** (de lectura y de escritura)
4. **Transform** (streams duplex que pueden modificar o transformar los datos en tránsito)

Los streams en Node.js implementan interfaces basadas en eventos, lo que permite responder a eventos como `data`, `end`, `error`, etc.

### Streams de lectura (Readable Streams)

Los streams de lectura son aquellos de los que podemos leer datos. Se emiten eventos importantes como:

- `data`: Emitido cuando hay un nuevo fragmento de datos disponible.
- `end`: Emitido cuando no hay más datos que leer.
- `error`: Emitido cuando ocurre un error durante la lectura.

Veamos cómo leer datos de un stream de lectura:

```ts
import { createReadStream } from 'fs';

// Crear un stream de lectura desde un archivo
const readableStream = createReadStream('archivo.txt', { encoding: 'utf8' });

// Escuchar el evento 'data' para obtener fragmentos de datos
readableStream.on('data', (chunk: string) => {
  console.log('Nuevo fragmento recibido:', chunk);
});

// Escuchar el evento 'end' cuando ya no hay más datos que leer
readableStream.on('end', () => {
  console.log('Lectura completada.');
});

// Manejar posibles errores
readableStream.on('error', (error) => {
  console.error('Error durante la lectura:', error);
});
```

En este ejemplo, un stream de lectura lee el contenido de un archivo llamado `archivo.txt` en fragmentos. A medida que los fragmentos están disponibles, se emite el evento `data` y se manejan los datos. Una vez que no quedan más datos por leer, se emite el evento `end`.

### Streams de escritura (Writable Streams)

Los streams de escritura son aquellos a los que podemos enviar datos. Estos streams emiten eventos como:

- `finish`: Emitido cuando todos los datos han sido escritos.
- `error`: Emitido cuando ocurre un error durante la escritura.

Un ejemplo de cómo escribir datos a un stream de escritura sería:

```ts
import { createWriteStream } from 'fs';

// Crear un stream de escritura hacia un archivo
const writableStream = createWriteStream('salida.txt');

// Escribir algunos datos en el stream
writableStream.write('Primera línea de texto.\n');
writableStream.write('Segunda línea de texto.\n');

// Finalizar el stream para que los datos se escriban completamente
writableStream.end();

// Escuchar el evento 'finish' para saber cuándo se ha completado la escritura
writableStream.on('finish', () => {
  console.log('Escritura completada.');
});

// Manejar errores durante la escritura
writableStream.on('error', (error) => {
  console.error('Error durante la escritura:', error);
});
```

Este ejemplo muestra cómo escribir datos en un archivo utilizando un stream de escritura. Los datos se envían en fragmentos con el método `write`, y luego el stream se finaliza con `end` para asegurarse de que todo el contenido se escriba correctamente.

### Streams duplex

Los streams duplex son aquellos que son tanto de lectura como de escritura, lo que significa que pueden leer y escribir datos simultáneamente. Un ejemplo típico de un stream duplex es una conexión de red donde se pueden enviar y recibir datos al mismo tiempo. Generalmente añaden una complejidad innecesaria, por lo que son poco habituales, siendo más frecuente usar streams de lectura y escritura por separado.

Aquí hay un ejemplo de cómo trabajar con un stream duplex:

```ts
import { Duplex } from 'stream';

// Crear un stream duplex
const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log('Escribiendo:', chunk.toString());
    callback();
  },
  read(size) {
    this.push('Datos desde el stream duplex.');
    this.push(null); // Indicar que no hay más datos
  },
});

// Escribir datos en el stream duplex
duplexStream.write('Mensaje de prueba.');

// Leer datos del stream duplex
duplexStream.on('data', (chunk) => {
  console.log('Leyendo:', chunk.toString());
});

// Finalizar la escritura
duplexStream.end();
```

En este ejemplo, el stream duplex puede tanto recibir datos con el método `write` como emitir datos con el método `read`. Esto lo convierte en un stream bidireccional que se puede utilizar en situaciones donde es necesario procesar datos en ambas direcciones.

### Streams transformables o de transformación (Transform Streams)

Los streams transformables son una subclase de los streams duplex que permiten modificar los datos a medida que pasan a través del stream. Un ejemplo típico es comprimir datos antes de enviarlos o descomprimir datos al recibirlos.

A continuación, se muestra un ejemplo de un stream transformable que convierte los datos recibidos a mayúsculas:

```ts
import { Transform } from 'stream';

// Crear un stream transformable
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString().toUpperCase();
    this.push(data);
    callback();
  },
});

// Escribir datos en el stream transformable
transformStream.write('Hola, ');
transformStream.write('mundo!\n');

// Leer los datos transformados
transformStream.on('data', (chunk) => {
  console.log('Transformado:', chunk.toString());
});

// Finalizar el stream
transformStream.end();
```

En este ejemplo, el stream transformable convierte el texto a mayúsculas antes de emitirlo. Los datos se modifican a medida que pasan por el stream, sin necesidad de almacenarlos completamente en memoria.

### Pipe entre streams

Una característica clave de los streams en Node.js es que se pueden "conectar" o **pipe** entre sí. Esto permite que los datos fluyan automáticamente desde un stream de lectura a un stream de escritura o transformable.

```ts
import { createReadStream, createWriteStream } from 'fs';

// Crear un stream de lectura y un stream de escritura
const readableStream = createReadStream('archivo.txt');
const writableStream = createWriteStream('salida.txt');

// Conectar los streams utilizando pipe
readableStream.pipe(writableStream);

// Manejar el evento 'finish' cuando el pipe haya finalizado
writableStream.on('finish', () => {
  console.log('Pipe completado. Archivo copiado.');
});
```

En este ejemplo, los datos leídos desde `archivo.txt` se escriben directamente en `salida.txt` utilizando el método `pipe`. Esto permite que los datos fluyan de un stream a otro sin necesidad de leer y escribir manualmente los fragmentos.

### Manejo de errores en streams

Cuando se trabaja con streams, es importante manejar los errores de manera adecuada. Los streams emiten eventos `error` cuando ocurre un problema, y estos eventos deben ser manejados para evitar que el programa falle inesperadamente.

```ts
readableStream.on('error', (error) => {
  console.error('Error en el stream de lectura:', error);
});

writableStream.on('error', (error) => {
  console.error('Error en el stream de escritura:', error);
});
```

Manejar los eventos `error` es una buena práctica que asegura que el código sea más robusto y menos propenso a fallos inesperados durante la lectura o escritura de datos.

### Conclusión: Streams en Node.js

Los streams son una herramienta poderosa en Node.js para trabajar con grandes cantidades de datos de manera eficiente. Su capacidad para manejar datos en fragmentos permite reducir el uso de memoria y procesar los datos de forma asíncrona y fluida. Además, la capacidad de "conectar" streams usando `pipe` hace que trabajar con flujos de datos sea extremadamente flexible. Ya sea leyendo archivos, escribiéndolos o transformando los datos en el proceso, los streams proporcionan una arquitectura escalable y eficiente para manejar datos en Node.js.

## Módulo http: Servidor WEB (HTTP)

El módulo `http` de Node.js es un módulo de bajo nivel de rendimiento altamente optimizado que permite crear un objeto server. Este objeto proporciona una API para crear servidores HTTP que pueden escuchar peticiones y responder con datos, actuando como un servidor web específico para una aplicación concreta.

De esta forma Node permite crear aplicaciones web, APIs RESTful, servidores de archivos estáticos y otras aplicaciones Web sin necesidad de utilizar un servidor web al uso (como Apache, IIS o Nginx). Sim embargo, por sus características de configuración y gestión, por ejemplo de la seguridad basada en https, es más habitual utilizar un servidor web ligero, por ejemplo creado con Nginx, como proxy inverso para servir aplicaciones Node.js en producción.

### Gestión de las URLs

A la hora de manejar las urls en el servidor, Node incluye diversas utilidades en el módulo `url` que permiten analizar y construir urls, como `parse`, `format`, `resolve`, `fileURLToPath`, `fileURLToPath`, `pathToFileURL`, `pathToFileURL`.

Destaca entre ellas la **clase URL**, añadida recientemente, más fácil de usar que las funciones tradicionales, proporcionando métodos para parsear y modificar una URL compatible con el navegador, implementada siguiendo el estándar URL de WHATWG. Para utilizar esta clase no es necesario importar el módulo 'url' en Node.js, ya que está disponible globalmente (`globalThis`), igual que en el navegador.

```typescript
const urlBase = 'https://user:12345@www.sample.com';
const urlRelative = '/ruta/sub_ruta#hash';
const oUrl = new URL(urlRelative, urlBase);
const params = new URLSearchParams({
  param1: 'valor1',
  param2: 'valor2',
});
oUrl.search = params.toString();

console.log('URL:', oUrl.href);
// https://user:12345@www.sample.com/ruta/sub_ruta/?param1=valor1&param2=valor2#hash
console.log('-------------------------');
console.log('Origen:', oUrl.origin);
console.log('Protocolo:', oUrl.protocol);
console.log('Host:', oUrl.host);
console.log('Nombre de host:', oUrl.hostname);
console.log('Puerto:', oUrl.port);
console.log('-------------------------');
console.log('Usuario:', oUrl.username);
console.log('Contraseña (password):', oUrl.password);
console.log('-------------------------');
console.log('Ruta:', oUrl.pathname);
console.log('-------------------------');
console.log('Parámetros de búsqueda:', oUrl.searchParams);
console.log('Parámetros de búsqueda:', oUrl.search);
console.log('-------------------------');
console.log('Hash:', oUrl.hash);
```

Como se ve en el ejemplo, el contructor de la clase permite crear una url a partir de una url base y una url relativa, y proporciona propiedades y métodos para acceder a los distintos componentes de la url, como el protocolo, el host, el nombre de host, el puerto, el usuario, la contraseña, la ruta, los parámetros de búsqueda y el hash.

Una segunda clase, **URLSearchParams**, permite trabajar con los parámetros de búsqueda de una url. El constructor de la clase acepta un objeto iterable, como un array o un objeto, y la propiedad `searchParams` es uan instancia de URLSearchParams que proporciona métodos para añadir, eliminar y modificar parámetros, y para convertir los parámetros en una cadena de consulta.

```typescript
const urlSearch: URLSearchParams = oUrl.searchParams;

// Obtener parámetros
console.log('Parámetro 1:', urlSearch.get('param1'));
console.log('Parámetro 2:', urlSearch.get('param2'));

// Añadir parámetro
urlSearch.append('param3', 'valor3');
console.log('URL con nuevo parámetro:', oUrl.href);

// Eliminar parámetro
urlSearch.delete('param2');
console.log('URL sin param2:', oUrl.href);
```

Finalmente, podemos verificar si una cadena es una URL válida utilizando el constructor URL dentro de un bloque try-catch:

```typescript
function esURLValida(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

console.log('¿Es válida la URL?', esURLValida('https://www.ejemplo.com')); // true
console.log('¿Es válida la URL?', esURLValida('esto no es una URL')); // false
```

### Introducción al protocolo HTTP

**HTTP (HyperText Transfer Protocol)** es un protocolo de comunicación que permite la transferencia de información entre un cliente (como un navegador web) y un servidor web. HTTP sigue un modelo de **request-response**: el cliente envía una solicitud (**request**) al servidor, y el servidor responde con una respuesta (**response**).

El protocolo HTTP es el fundamento de la comunicación en la web y permite a los navegadores recuperar recursos como HTML, imágenes, archivos CSS, scripts y otros tipos de contenido. El estándar define varios métodos (`GET`, `POST`, `PUT`/`PATCH`, y `DELETE`) que especifican qué tipo de acción se quiere realizar con el recurso al que se accede (como obtener, enviar, actualizar o eliminar datos). El uso de los códigos de estado HTTP proporciona información clara sobre el resultado de cada solicitud, permitiendo a los clientes saber si la operación fue exitosa o si hubo algún error.

#### Requests y Responses en HTTP

##### Request (solicitud)

Una **request** HTTP es enviada por el cliente al servidor, solicitando un recurso o ejecutando una acción específica. Una solicitud HTTP típica tiene los siguientes componentes:

- **Método HTTP**: Indica la intención de la solicitud (por ejemplo, `GET`, `POST`, `PUT`, `DELETE`).
- **URL o ruta**: Especifica el recurso que el cliente está solicitando.
- **Encabezados (headers)**: Proveen información adicional sobre la solicitud o el cliente (por ejemplo, tipo de contenido, autenticación).
- **Cuerpo (body)**: Solo en ciertos tipos de solicitudes (como `POST` o `PUT`), el cuerpo contiene datos que el cliente está enviando al servidor.

##### Response (respuesta)

Una **response** HTTP es enviada por el servidor al cliente en respuesta a la solicitud. Una respuesta HTTP típica contiene:

- **Código de estado**: Un número que indica el resultado de la solicitud (por ejemplo, `200 OK`, `404 Not Found`, `500 Internal Server Error`).
- **Encabezados (headers)**: Información adicional sobre la respuesta (por ejemplo, el tipo de contenido, longitud del contenido).
- **Cuerpo (body)**: Los datos solicitados o una respuesta textual que el servidor envía al cliente.

#### Métodos HTTP más utilizados

Los métodos HTTP especifican la acción que se desea realizar con el recurso. Los más comunes son:

- **GET**: Solicita un recurso o datos desde el servidor. No tiene un cuerpo y no modifica el estado del servidor. Se usa principalmente para obtener información.

  Ejemplo: solicitar una página web, un archivo, etc.

- **POST**: Envía datos al servidor para que sean procesados. Se utiliza principalmente para enviar datos del cliente al servidor (por ejemplo, formularios).

  Ejemplo: enviar un formulario de registro o autenticación.

- **PUT**: Envía datos al servidor para crear o reemplazar un recurso. Se utiliza para actualizar o crear nuevos recursos.

  Ejemplo: actualizar un perfil de usuario.

- **PATCH**: Similar a `PUT`, pero se utiliza para actualizar parcialmente un recurso en lugar de reemplazarlo por completo.

  Ejemplo: actualizar solo el correo electrónico de un perfil de usuario.

- **DELETE**: Elimina un recurso del servidor.

  Ejemplo: eliminar un artículo o un comentario de un sistema.

- **HEAD**: Solicita el encabezado de la respuesta de un recurso sin obtener el cuerpo. Se utiliza principalmente para comprobar si un recurso está disponible.

#### Códigos de estado HTTP

Los **códigos de estado HTTP** son una parte crucial de las respuestas HTTP y permiten que el cliente sepa el resultado de la solicitud. Algunos de los códigos de estado más comunes son:

- **200 OK**: La solicitud ha sido exitosa.
- **201 Created**: Un nuevo recurso ha sido creado con éxito.
- **400 Bad Request**: La solicitud es inválida.
- **401 Unauthorized**: La solicitud requiere autenticación.
- **403 Forbidden**: El cliente no tiene permisos para acceder al recurso.
- **404 Not Found**: El recurso solicitado no existe.
- **500 Internal Server Error**: Ha ocurrido un error en el servidor.

Estos códigos se configuran usando la propiedad `statusCode` del objeto `ServerResponse` en Node.js, como se verá en los ejemplos posteriores.

### Creación de un servidor HTTP en Node.js. La función `createServer`

El módulo `http` del core de NodeJS permite crear servidores web y manejar solicitudes HTTP. El método `createServer` de este módulo es el punto de partida para crear un servidor que pueda manejar solicitudes HTTP.

El método `createServer` es una función factory, que crea una instancia de un servidor HTTP que

- escucha las solicitudes entrantes en un puerto específico.
- acepta un **callback** que se ejecuta cada vez que se recibe una solicitud al servidor en ese puerto.

Aquí hay un ejemplo del servidor HTTP más básico que se puede crear.

```ts
import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // res.statusCode = 200 ; // valor por defecto
  // res.setHeader('Content-Type', 'text/plain'); // valor por defecto
  res.end('Hola mundo');
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

En el código anterior:

- Se utiliza el módulo `http` para llamar a `createServer`, que recibe una función que se ejecuta en cada solicitud.
- La función tiene acceso a dos objetos importantes: `req` (request) y `res` (response).
- Gracias al método listen, el servidor se pone en marcha y se queda escuchando en el puerto 3000, mostrando un mensaje en la consola cuando se inicia.

#### Funcionamiento interno de un servidor HTTP en Node.js

Recordemos que

- Node.js está escrito principalmente en **JavaScript**, pero se construye sobre el **V8** (el motor de JavaScript de Google) y
- está respaldado por bibliotecas escritas en **C++** que interactúan directamente con el sistema operativo y la red. Ahí es donde entra en juego el módulo `http`, su método `createServer` y los objetos `request` y `response`.

Aunque nosotros escribimos el servidor en JavaScript (TypeScript en este caso), el proceso subyacente de manejar una solicitud HTTP involucra los componentes de Node que no están escritos en este lenguaje, a diversos niveles

1. **Interacción con el sistema operativo**: Node.js se basa en el sistema operativo para abrir un puerto de red y "escuchar" las conexiones entrantes. Node.js utiliza las bibliotecas del sistema operativo para acceder a los sockets de red y gestionar las conexiones TCP/IP.

   El servidor escucha en un puerto específico, que está vinculado a una dirección IP en el sistema. Cuando en la instancia del servidor creada por `createServer` se ejecuta `server.listen(3000)`, Node.js pide al sistema operativo que abra un **socket** de red en el puerto 3000.

   Las solicitudes HTTP se basan en conexiones (sockets) TCP. Cuando se establece una conexión TCP, el cliente y el servidor intercambian paquetes de datos a través de la red. Este socket está vinculado a la dirección IP del servidor. Al recibir una conexión, se establece un canal TCP entre el cliente (por ejemplo, un navegador) y el servidor

   El servidor espera recibir la solicitud completa del cliente y, una vez recibida, procesa los datos para generar una respuesta. Cada vez que llega una nueva conexión a ese puerto, el sistema operativo notifica a Node.js a través de la capa de **libuv**, y se genera un evento que activa el callback pasado a `createServer`.

2. **Motor de eventos**: Node.js se basa en un **bucle de eventos** (event loop) que le permite ser **asíncrono** y no bloquear el flujo de ejecución. Cada vez que una solicitud llega al puerto donde está escuchando el servidor, se genera un evento de solicitud que se encola. El **event loop** despacha la solicitud y ejecuta el callback asociado con `createServer`.

   Node.js utiliza un **modelo de entrada/salida no bloqueante (non-blocking I/O)**. Esto significa que mientras el servidor espera a que llegue una solicitud, puede seguir ejecutando otras tareas. Esto es posible gracias al bucle de eventos y a la capacidad de Node.js para manejar múltiples conexiones de manera eficiente sin bloquear el flujo de ejecución.

3. **Thread pool y librerías nativas**: Aunque Node.js es de un solo hilo para las operaciones JavaScript, se apoya en un conjunto de hilos gestionado por **libuv**, una biblioteca C/C++ de bajo nivel, para operaciones de entrada/salida intensivas (como la gestión de conexiones de red, lectura/escritura de archivos, y otras operaciones I/O). Esto le permite delegar estas tareas al sistema operativo mientras sigue gestionando otros eventos.

4. **Response y Request como streams**: En Node.js, los objetos `req` (request) y `res` (response) son **streams**, lo que significa que puedes procesar los datos de manera incremental (ideal para manejar grandes volúmenes de datos o conexiones de red prolongadas).

#### Los objetos `req` y `res`

Al usar `createServer`, la función callback recibe dos objetos clave, construidos por Node como interfaces o facade para las interacciones con las partes del sistema ajenas de JavaScript:

- **`request` (objeto `req`)**: Representa la solicitud HTTP entrante. Contiene información importante sobre la solicitud, extraída a partir de los datos que han llegado por la red de acuerdo con el protocolo http, como:

  - **Método HTTP** (GET, POST, PUT, etc.) a través de `req.method`.
  - **URL solicitada** a través de `req.url`.
  - **Encabezados (headers)** de la solicitud a través de `req.headers`.
  - **Cuerpo (body)** de la solicitud, que puede leerse como un stream si la solicitud incluye datos, por ejemplo, en un POST.

- **`response` (objeto `res`)**: Es el objeto usado para construir y enviar la respuesta al cliente. Contiene:
  - **Métodos para escribir la respuesta**: `res.writeHead` (para escribir encabezados de respuesta), `res.write` (para escribir datos en el cuerpo), y `res.end` (para finalizar la respuesta y cerrar la conexión).
  - **Encabezados (headers)** de la respuesta.
  - **Código de estado HTTP**: que indica si la solicitud fue exitosa (por ejemplo, `200 OK`) o falló (por ejemplo, `404 Not Found`).

En última instancia, este objeto incluye métodos como `writeHead`, `write`, y `end`, responsables de interaccionar con otras partes del sistema para desencadenar el envío de la respuesta al cliente, en el que intervienen el sistema operativo y la red.

Tanto `req` como `res` son **streams**, lo que significa que los datos pueden ser leídos o escritos de forma incremental:

- **`req` (Request)** es un stream de lectura. Puedes leer los datos de una solicitud entrante en bloques (`chunks`), lo cual es muy útil cuando se manejan solicitudes grandes.
- **`res` (Response)** es un stream de escritura. Puedes enviar datos al cliente de forma incremental antes de finalizar la respuesta.

Más adelante veremos un ejemplo de como se accede a estos objetos y se utilizan para manejar solicitudes 'POST'.

#### Optimización y Gestión de Memoria

Node.js está diseñado para ser eficiente en términos de rendimiento, utilizando:

- **Recolección de basura (Garbage Collection)**: El motor V8 tiene un recolector de basura eficiente que libera automáticamente la memoria no utilizada. Esto es importante cuando se manejan múltiples conexiones de red, ya que evita fugas de memoria.

- **Gestión eficiente de conexiones**: Node.js maneja las conexiones de red de manera eficiente mediante el uso de **streams** y el modelo no bloqueante, lo que le permite manejar miles de conexiones concurrentes sin bloquear el hilo principal.

### Ajustes del entorno de trabajo

Existen diversas herramientas y utilidades que facilitan el desarrollo de aplicaciones Node.js, de las que podemos destacar tres tipos de herramientas:

- **Utilidades de ejecución**: herramientas que facilitan la gestión del proceso y el reinicio automático del servidor en desarrollo
- **Herramientas informativas**: herramientas que facilitan la depuración (debugging) y el registro de información sobre el funcionamiento de la aplicación (logging).
- **Clientes HTTP para desarrollo y pruebas**: herramientas que permiten enviar solicitudes a un servidor y ver las respuestas, facilitando el desarrollo y las pruebas de la API.

#### Utilidades de ejecución: Nodemon

Gestión del proceso y reinicio automático del servidor en desarrollo cuando se detectan cambios en los ficheros compilados con TypeScript.

- [Nodemon](https://nodemon.io/). Node --watch. Reinicia el servidor cuando se detectan cambios en los ficheros.
- [PM2](https://pm2.keymetrics.io/). Gestor de procesos de producción para aplicaciones Node.js.

Nodemon es una herramienta muy utilizada tradicionalmente para el desarrollo de aplicaciones Node.js, ya que **reinicia automáticamente** el servidor cada vez que se detectan cambios en los ficheros del proyecto. Esto evita tener que reiniciar manualmente el servidor cada vez que se realizan cambios en el código.

Suele instalarse de forma global para poder ejecutarlo desde cualquier proyecto, y se puede configurar para que ignore ciertos directorios o ficheros, o para que ejecute un script de inicio específico.

```bash
npm install -g nodemon
```

Una vez instalado, se puede ejecutar el servidor con `nodemon` en lugar de `node`:

```bash
nodemon server.ts
```

Recientemente a surgido una alternativa en el propio Node.JS que permite ejecutar un script de node con la opción `--watch` para reiniciar el servidor cuando se detectan cambios en los ficheros:

```bash
node --watch server.ts
```

#### Debugging y Logging

herramientas para depurar y registrar información sobre el funcionamiento de la aplicación.

- [debug](https://www.npmjs.com/package/debug). Pequeña librería de logging para Node.js (178M).
- [Winston](https://www.npmjs.com/package/winston). Logger flexible y versátil para Node.js (7M).
- [Pino-http](https://www.npmjs.com/package/pino-http). Logger rápido y seguro para http de Node.js (6M).

La más sencilla y utilizada es `debug`, que permite registrar mensajes de depuración en la consola, con la posibilidad de activar o desactivar mensajes de depuración en función de un entorno de ejecución. Se puede utilizar en cualquier parte del código, y se puede configurar para que muestre mensajes de depuración en función de un entorno de ejecución.

En principio depende da que exista una variable de entorno `DEBUG` que contenga un patrón de mensajes de depuración a mostrar, por ejemplo `DEBUG=app:*` para mostrar todos los mensajes de depuración de la aplicación `app`.

La librería `debug` se instala como dependencia final o de desarrollo:

```bash
npm install debug
```

Para utilizarla se importa en el código y se crea un logger con un nombre específico:

```typescript
import createDebug from 'debug';
const debug = createDebug('app:server');
// const logger = debug('app:server');

debug('Mensaje de depuración');
```

Los mensajes de depuración se muestran en la consola si la variable de entorno `DEBUG` contiene el patrón `app:*` siguiendo un patrón de colores y formato que facilita la lectura de los mensajes y ayuda a reconocer su procedencia.

En los distintos módulos de la aplicación se puede crear un logger con un nombre específico, siempre que respete el patrón `app:*`, definido en la variable de entorno `DEBUG`.

```typescript
import createDebug from 'debug';
const debug = createDebug('app:module_name');

debug('Mensaje de depuración');
```

Otros loggers como `Winston` y `Pino` son más completos y versátiles, permiten configurar distintos niveles de log, guardar los mensajes en ficheros, enviarlos a servicios de monitorización, etc.

Por ejemplo, el logger `Winston` permite crear un logger con distintos niveles de log, añadir transportes para guardar los mensajes en ficheros, enviarlos a servicios de monitorización, etc.

```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
```

En este ejemplo, se crea un logger con dos transportes: uno para guardar los mensajes de error en un fichero `error.log` y otro para guardar todos los mensajes en un fichero `combined.log`. Además, si el entorno de ejecución no es producción, se añade un transporte adicional para mostrar los mensajes en la consola.

Para utilizar el logger, se pueden llamar a los distintos métodos del logger, como `log`, `info`, `warn`, `error`, etc.

```typescript
logger.info('/about', { user: 'user_id' });
```

En cualquier caso, es importante tener en cuenta que el uso de loggers puede tener un impacto en el rendimiento de la aplicación, por lo que es importante utilizarlos de forma adecuada y configurarlos correctamente.

#### Clientes HTTP para desarrollo y pruebas

Existen diversos clientes HTTP que permiten enviar solicitudes a un servidor y ver las respuestas. A diferencia de los navegadores, se puede utilizar cualquiera de los métodos del protocolo HTTP y controlar las cabeceras, la información incluida en el body, su formato ... Algunos de los más populares son:

- [Curl](https://curl.se/). Cliente HTTP en línea de comandos, estándar en los sistemas Linux.
- [Postman](https://www.postman.com/). Cliente HTTP para pruebas de API.
- [Insomnia](https://insomnia.rest/). Cliente HTTP para pruebas de API.

En los entornos gráficos es posible crear colecciones con las peticiones a un servidor para volver a ejecutarlas, disponiendo así de un entorno de tests gráficos completo.

Extensiones de Visual Studio Code

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Cliente REST en Visual Studio Code (5.5M).
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client). Cliente REST en Visual Studio Code (5M).
- [Postman](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Cliente REST en Visual Studio Code (1M).
- [RapidAPI](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Cliente REST en Visual Studio Code (440K).

Tienen las mismas funcionalidades que los entornos gráficos, pero integradas en el editor de código.

### Evolución del servidor HTTP

#### Servidor HTTP básico: rutas y respuestas en HTML

La primera funcionalidad que se suele añadir a un servidor HTTP es la capacidad de manejar diferentes rutas (enrutamiento) y responder con contenido HTML. Esto permite crear páginas web simples y servir contenido estático a los clientes.

En el siguiente ejemplo básico, se crean respuestas en base a la url, distinguiendo entre la página principal (`/`) y la página `about`, y añadiendo una respuesta por defecto para cualquier otra página no encontrada. En este último caso es importante sustituir el código de status 200, usado por defecto, por el código 404.

La estructura del código es la siguiente:

- una función que devuelve un string con el HTML de la página
- una función (app) que recibe la petición y la respuesta y que se encarga de
  - crear la respuesta adecuada como html
  - enviarla al cliente.
- un servidor
  - que escucha en el puerto 3000
  - ejecuta la función app (su callback) en cada petición.

```ts
import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 3000;

const createHtmlString = (content: string) => `
  <!DOCTYPE html>... ${content} ...</html>`;

// App que recibirá como callback el servidor http
const app = (req: IncomingMessage, res: ServerResponse) => {
  // Crear la respuesta adecuada como html
  // ...
  // Enviar la respuesta al cliente
  res.end(page);
};

// Crear un servidor HTTP
debug('Iniciando el servidor');
const server = createServer(app);

// Escuchar el servidor en el puerto 3000
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  debug('Servidor escuchando en http://localhost:%d', PORT);
});
```

El código de la aplicación discrimina entre las diferentes rutas, construye la respuesta y la envía al cliente. En este caso, se envía una página HTML simple con poco más que un título

```ts
const app = (req: IncomingMessage, res: ServerResponse) => {
  // Desestructurar la URL y el método de la request
  const { url, method } = req;
  debug(method + ' ' + url);

  // Manejar diferentes rutas
  let htmlContent = '<h1>404 Página no encontrada</h1>';
  let statusCode = 404;
  if (url === '/') {
    htmlContent = '<h1>Bienvenido a la página principal</h1>';
    statusCode = 200;
  } else if (url === '/about') {
    htmlContent = '<h1>Acerca de nosotros</h1>';
    statusCode = 200;
  }
  const page = createHtmlString(htmlContent);

  // Creación y envío de la respuesta
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html');
  res.end(page);
};
```

El código de la aplicación se puede refactorizar utilizando un objeto con las rutas y las respuestas asociadas a cada ruta, y una función separada que maneje las rutas y devuelva la respuesta html y su código de status.

```ts
const router = (url: string, method: string) => {
  if (method !== 'GET') {
    return { page: '', statusCode: 405 };
  }

  const routes: Record<string, string> = {
    '/': '<h1>Bienvenido a la página principal</h1>',
    '/about': '<h1>Acerca de nosotros</h1>',
  };

  const htmlContent = routes[url] || '<h1>404 Página no encontrada</h1>';
  const statusCode = routes[url] ? 200 : 404;
  const page = createHtmlString(htmlContent);
  return { page, statusCode };
};
```

De esta forma, la función app quedaría mas simple y con una responsabilidad más definida:

```ts
const app = (req: IncomingMessage, res: ServerResponse) => {
  // Desestructurar la URL y el método de la request
  const { url, method } = req;
  debug(method + ' ' + url);

  const { page, statusCode } = router(url!, method!);

  // Creación y envío de la respuesta
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html');
  res.end(page);
};
```

#### Métodos HTTP y manejo en Node.js

Dependiendo del tipo de método HTTP que se use en la solicitud, el servidor puede responder de manera diferente. En este ejemplo, se maneja el método `POST` de forma diferente a los demás.

- Para las solicitudes que no sean `POST`, (e.g. `GET`), el router se ocupa de las operaciones, como en el ejemplo anterior.
- Para las solicitudes `POST`, existe un controller específico, que recibe req y res como parámetros para construir la respuesta adecuada.

```ts
const app = (req: IncomingMessage, res: ServerResponse) => {
  // Desestructurar la URL y el método de la request
  const { url, method } = req;
  debug(method + ' ' + url);

  if (method == 'POST') {
    controllerPost(req, res);
    return;
  }

  const { page, statusCode } = router(url!, method!);

  // Creación y envío de la respuesta
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html');
  res.end(page);
  return;
};
```

En el caso de una solicitud `POST`, el servidor espera recibir datos en el cuerpo de la solicitud (por ejemplo, datos de un formulario) y luego responde con el contenido recibido; los datos de la solicitud son leídos de manera incremental (`req.on('data')`), lo que permite manejar solicitudes con grandes cantidades de datos sin consumir demasiada memoria de una sola vez.

```ts
const controllerPost = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;

  let statusCode = 404;
  let htmlTitle = '<h1>404 Página no encontrada</h1>';
  let content = '';
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    if (url === '/submit') {
      statusCode = 200;
      htmlTitle = '<h1>Gracias por enviar el formulario</h1>';
      content = `<p>Datos recibidos:</p> <pre>${body}</pre>`;
    }
    const page = createHtmlString(htmlTitle, content);
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'txt/html');
    res.end(page);
  });
};
```

## Otros protocolos de comunicaciones

- TCP
- UDP
- SSE (Server-Sent Events)
- Websockets
- MQTT (Message Queuing Telemetry Transport)

## Aplicación Realtime con Socket IO

### Instalación de Socket.IO

### Creación de un servidor con Socket.IO

### Conexión de clientes

### Eventos y mensajes

### Salas de chat

## Workers (Hilos de ejecución)

## Despliegue y publicación en npm

### Despliegue en Render

### Cache
