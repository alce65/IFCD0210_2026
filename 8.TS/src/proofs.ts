interface X {
    x: string;
}
interface Y extends X {
    y: string;
}

const y: Y = {
    x: "x",
    y: "y",
};

console.log(y);


function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

export class Car {
  drive(name:string): void {
    console.log(`This ${name} can drive very fast`);
  }
}

export class Lorry {
  carry(weight:number): void {
    console.log(`This vehicle can carry ${weight} kg`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface Truck extends Car, Lorry {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class Truck {
    x!: string
};


applyMixins(Truck, [Car, Lorry]);

const t = new Truck()
t.carry(23)
t.drive('Pepe')

{

    // Tipo que define cualquier función constructora
    // capaz de recibir cualquier conjunto de argumentos
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Constructor = new (...args: any) => object

    //
    function CreateMixin<T extends Constructor>(Base: T): Constructor {
        return class Mixin extends Base {
            // Props and methods
        }
    }

    class BaseClass {
        prop!: string
    }

    const WithMixin = CreateMixin(BaseClass)

    const x = new WithMixin()
    console.log(x)
}

