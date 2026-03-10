/*eslint-disable */

// alias de tipos

type Id = string | number;
type Role = "user" | "editor" | "admin";

{
    type User = {
        readonly id: Id;
        readonly name: string;
        age: number;
        job?: string;
        role?: Role;
    };

    const user1: User = {
        id: 1,
        name: "Pepe",
        age: 23,
    };

    const user2: User = {
        id: "2",
        name: "Juan",
        age: 22,
    };
}
// Interfaces
{
    interface User {
        readonly id: Id;
        readonly name: string;
        age: number;
        job?: string;
        role?: Role;
    }

    interface Project {
        owner: User;
    }

    const user1: User = {
        id: 34,
        name: "Pepe",
        age: 23,
    };
}
// Solo con alias de tipo -> primitivos
{
    type Name = string;
    let userName: Name = "Pepe";

    type ID = string | number;
    let sku: ID = 1;

    type State = "success" | "fail" | "idle";
    let processState: State = "success";
}
// Solo con interfaces -> Ampliación
{
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    }
    //    ...
    interface User {
        pet: string[];
    }
}

// Uniones / Intersecciones
{
    type UserT = {
        readonly name: string;
        age: number;
        job?: string;
    };
    //    ...
    type PetOwnerT = {
        pet: string[];
    };

    interface UserI {
        readonly name: string;
        age: number;
        job?: string;
    }
    //    ...
    interface PetOwnerI {
        pet: string[];
    }

    type UserWithPet = UserT & PetOwnerI;
    interface UserWithPetI extends UserI, PetOwnerT {}
}

{
    class User {
        name: string;
        age: number;
        pets?: string[];
        constructor(name: string, age: number, pets: string[] = []) {
            this.name = name;
            this.age = age;
            this.pets = pets;
        }
    }

    let user1: User;

    user1 = new User("Pepe", 22);
    const user2 = new User("Raul", 34);

    let user3: User;
    // Tipado estructural -> NO ES tipado nominal
    // Duck typing
    user3 = { name: "Juan", age: 32 };
    const user4 = { name: "Juan", age: 32 };

    console.log(user1, user2);
    console.log(user1 instanceof User);
    console.log(user3 instanceof User);
}

{
    class User {
        name: string;
        age: number;
        pets?: string[];
        constructor(name: string, age: number, pets: string[] = []) {
            this.name = name;
            this.age = age;
            this.pets = pets;
        }
    }

    // function UserF (name, age, pet) {
    //     this.name= name 
    //     this.age = age
    //     this.pet = pet

    // }

    interface UserI {
        name: string;
        age: number;
        pets?: string[];
    }

    const user1: UserI = { name: "Juan", age: 32 };
    const user2 = new User("Pepe", 23);

    let users: User[] = []
    fetch('').then(
        (respose) => {
           return respose.json()}
    ).then(data => {
        users = data
        users.map(user => user.name)
    })

}

