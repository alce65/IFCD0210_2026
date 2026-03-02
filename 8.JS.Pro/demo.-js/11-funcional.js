{
    function foo(a, b, ...rest) {
        console.log(a, b, rest.length);
    }

    const foo2 = function (a, b, ...rest) {
        console.log(a, b, rest.length);
    };

    console.log(foo, foo2);

    foo.title = 'Soy foo';
    foo2.title = 'Soy foo 2';

    console.log(foo, foo2);

    foo.foo2 = foo2;

    console.log(foo, foo2);

    foo.foo2('Pepe', 22, 1, 2, 3, 4);
}
{
    const makeFoo = function (a) {
        const r = [a];

        const innerFoo = () => {
            console.log(r);
            console.log('Soy innerFoo');
        };

        return innerFoo;
    };

    makeFoo(12)();
}
{
    //IIFE

    (function (a) {
        const r = [a];

        return () => {
            console.log(r);
            console.log('Soy innerFoo');
        };
    })(12)();
}

const counterCreator = () => {
    let value = 0;

    const increase = () => {
        value++;
        console.log(value);
    };

    const decrease = () => {
        value--;
        console.log(value);
    };

    return { increase, decrease };
};

const counter1 = counterCreator();
counter1.increase();
counter1.decrease();

const { increase: i2, decrease: d2 } = counterCreator();
i2();
d2();
