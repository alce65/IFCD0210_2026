// TS mal hecho
{
    // class Foo {
    //     constructor() {}
    //     foo(a: string): string {
    //         return a;
    //     }
    //     foo(a: number): number {
    //         return a * a;
    //     }
    //     foo(a: string, b: string): string {
    //         return a + b;
    //     }
    //     foo(a: number, b: number): number {
    //         return a * b;
    //     }
    // }
    // const foo = new Foo();
    // foo.foo("a");
    // foo.foo(1);
    // foo.foo("a", "b");
    // foo.foo(1, 2);
}
{
    class Foo {

        foo(a: string): string;
        foo(a: number): number;
        // eslint-disable-next-line @typescript-eslint/unified-signatures
        foo(a: string, b: string): string;
        // eslint-disable-next-line @typescript-eslint/unified-signatures
        foo(a: number, b: number): number;

        foo(a: string | number, b?: string | number): string | number {
            if (typeof a === "string" && typeof b === "undefined") {
                return a;
            }
            if (typeof a === "number" && typeof b === "undefined") {
                return a * a;
            }
            if (typeof a === "string" && typeof b === "string") {
                return a + b;
            }
            if (typeof a === "number" && typeof b === "number") {
                return a * b;
            }
            return "";
        }
    }

    const foo = new Foo();
    foo.foo(1);
    foo.foo("a");
    foo.foo(1, 2);
    foo.foo("a", "b");
    // foo.foo(1, 'f') // Error
    // foo.foo('z', 6) // Error
}
