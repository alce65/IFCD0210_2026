/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Union de tipos
{
    let id: string | number;
    id = 12;
    id = "KO923";

    const fooString = (a: string): void => {
        // TODO
    };
    const fooNumber = (a: number): void => {
        // TODO
    };

    let x: string | number = 0;
    // Error fooString(x)
    fooNumber(x);
    x = "Pepe";
    fooString(x);

    const foo = (a: string | number): void => {
        if (typeof a === "string") {
            a.slice();
            a.replace("z", "Ç");
        } else {
            a.toPrecision();
        }
    };

    const fooT = (a: string | number): void => {
        const x = typeof a === "string" ? a.slice() : a.toPrecision();
    };

    const fooR = (a: string | number): void => {
        if (typeof a === "string") {
            a.slice();
            a.replace("z", "Ç");
            return;
        }
        a.toPrecision();
    };

    foo(x);
}
// Union de tipos literales
{
    let state: "Idle" | "Success" | "Error";
    state = "Success";
    state = "Error";
}

// Uniones discriminadas
{
    interface Success {
        status: "success";
        data: string[];
    }
    interface Fail {
        status: "error";
        error: Error;
    }
    interface Load {
        status: "loading";
        url: string;
    }

    type Options = Success | Fail | Load;

    const foo = (a: Options): void => {
        if (a.status === "success") {
            const l = a.data.length;
        } else if (a.status === "error") {
            const m = a.error.message;
        } else if (a.status === "loading") {
            const u = a.url;
            console.log(u);
        } else {
            const never: never = a;
            console.log("No se como estoy aquí");
        }
    };
}

// Tipos intersection
{
    let c: (1 | 2 | 3) & (2 | 4 | 6);
    // eslint-disable-next-line prefer-const
    c = 2;
}
{
    // Arrays
    const arr: (number | string)[] = [];
    arr.push(22);
    arr.push("");

    // Objeto de propiedades desconocidas -> Record
    // index signature
    const o: { [key: string]: string | number | boolean } = {};
    // const o: Record<string, string | number | boolean> = {}
    o.x = 22;
    o.y = "";
    o.z = true;
}
{
    let x: { [key: string]: unknown };
    // eslint-disable-next-line prefer-const
    x = { a: 12 };
    x.b = null;
    x.c = [];
}
{
    let c: { id: number } & { name: string };
    // eslint-disable-next-line prefer-const
    c = { id: 12, name: "Pepe" };
}
// Tipos propios
// Alias v. Interface

// Firmas de indice

{
    const user: {
        name: string;
        age: number;
    } = {
        name: "Pepe",
        age: 23,
    };
    user.age = 24;
    for (const key in user) {
        const element = (user as { [key: string]: string | number })[key];
    }
}

{
    const user: { [key: string]: string | number | boolean } = {
        name: "Pepe",
        age: 23,
        hasJob: true,
    };

    user.algo = "";

    const p = "score";
    console.log(user[p]);

    for (const key in user) {
        const element = user[key];
    }
}
